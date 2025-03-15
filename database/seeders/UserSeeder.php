<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Crear permisos básicos
        Permission::create(['name' => 'Ver usuarios']);
        Permission::create(['name' => 'Crear usuarios']);
        Permission::create(['name' => 'Editar usuarios']);
        Permission::create(['name' => 'Eliminar usuarios']);

        // Crear rol Administrador
        $roleAdministrador = Role::create(['name' => 'Administrador']);

        // Crear rol Coordinador
        $roleCoordinador = Role::create(['name' => 'Coordinador']);

        // Crear rol Egresado (este se asignará automáticamente a los nuevos usuarios)
        $roleEgresado = Role::create(['name' => 'Egresado']);

        // Crear usuario Administrador
        $administradorUser = User::query()->create([
            'name' => 'Administrador',
            'email' => 'administrador@gmail.com',
            'password' => bcrypt('12345'),
            'email_verified_at' => now(),
        ]);
        $administradorUser->assignRole($roleAdministrador);

        // Asignar todos los permisos al Administrador
        $permissionsAdministrador = Permission::query()->pluck('name');
        $roleAdministrador->syncPermissions($permissionsAdministrador);

        // Crear usuario Coordinador
        $coordinadorUser = User::query()->create([
            'name' => 'Coordinador',
            'email' => 'coordinador@gmail.com',
            'password' => bcrypt('1234567'),
            'email_verified_at' => now(),
        ]);
        $coordinadorUser->assignRole($roleCoordinador);
    }
}

