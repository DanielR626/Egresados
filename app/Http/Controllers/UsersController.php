<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Response;
use Inertia\Inertia;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;

class UsersController extends Controller
{
    public function index(): Response
    {
        $users = User::select('id', 'name', 'email', 'created_at')->latest()->paginate(10);
        return Inertia::render('users', [
            'users' => $users,
        ]);
    }

    public function getUsers()
    {
        $users = User::select('id', 'name', 'email', 'created_at')->latest()->paginate(10);
        return response()->json($users);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
        ]);

        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
        ]);

        return response()->json(['success' => true, 'user' => $user]);
    }

    public function update(Request $request, User $user)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                Rule::unique('users')->ignore($user->id),
            ],
        ]);

        $user->update($validated);

        return response()->json(['success' => true, 'user' => $user]);
    }

    public function destroy(User $user)
    {
        // Evitar eliminar al usuario actual o al administrador principal
        if ($user->id === auth()->id()) {
            return response()->json(['success' => false, 'message' => 'No puedes eliminar tu propia cuenta'], 403);
        }

        // Aquí podrías agregar más validaciones si es necesario
        
        $user->delete();

        return response()->json(['success' => true]);
    }
}