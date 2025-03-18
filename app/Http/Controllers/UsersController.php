<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Response;
use Inertia\Inertia;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Spatie\Permission\Models\Role;

class UsersController extends Controller
{
    public function index(): Response
    {
        $users = User::select('id', 'name', 'email', 'created_at')->latest()->paginate(10);
        return Inertia::render('users', [
            'users' => $users,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'surname' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
        ]);

        $user = User::create([
            'name' => $validated['name'] . ' ' . $validated['surname'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
        ]);

        // Asignar el rol automáticamente sin campo en la base de datos
        $user->assignRole('egresado');

        $this->reorderIds();

        return redirect()->route('users.index');
    }

    public function update(Request $request, User $user)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'surname' => 'required|string|max:255',
            'email' => ['required', 'string', 'email', 'max:255', Rule::unique('users')->ignore($user->id)],
            'password' => $request->filled('password') ? 'string|min:8|confirmed' : '',
        ]);

        $user->name = $validated['name'] . ' ' . $validated['surname'];
        $user->email = $validated['email'];

        if ($request->filled('password')) {
            $user->password = Hash::make($validated['password']);
        }

        $user->save();

        return redirect()->route('users.index');
    }

    public function destroy(User $user)
    {
        $user->delete();

        // Reordenar IDs después de eliminar
        $this->reorderIds();

        return redirect()->route('users.index');
    }

    /**
     * Reordenar los IDs de los usuarios para evitar gaps
     */
    private function reorderIds()
    {
        $connection = DB::connection();
        $prefix = $connection->getTablePrefix();
        $table = $prefix . 'users';

        try {
            $users = User::orderBy('id')->get();
            Schema::disableForeignKeyConstraints();
            DB::beginTransaction();
            $tempTable = 'temp_user_ids';
            if (Schema::hasTable($tempTable)) {
                Schema::drop($tempTable);
            }
            DB::statement("CREATE TEMPORARY TABLE {$tempTable} (old_id INT, new_id INT)");
            $newId = 1;
            foreach ($users as $user) {
                DB::statement("INSERT INTO {$tempTable} VALUES (?, ?)", [$user->id, $newId]);
                $newId++;
            }
            DB::statement("SET @row_number = 0");
            DB::statement("UPDATE users SET id = (@row_number:=@row_number + 1) ORDER BY id");
            DB::statement("ALTER TABLE users AUTO_INCREMENT = " . $newId);
            DB::commit();
            Schema::enableForeignKeyConstraints();
        } catch (\Exception $e) {
            DB::rollBack();
            Schema::enableForeignKeyConstraints();
            \Log::error('Error al reordenar IDs de usuarios: ' . $e->getMessage());
        }
    }
}
