<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class LoginTest extends TestCase
{
    use RefreshDatabase; // Para reiniciar la BD en cada prueba

    /** @test */
    public function un_usuario_puede_iniciar_sesion()
    {
        // Crear un usuario de prueba
        $user = \App\Models\User::factory()->create([
            'email' => 'test@example.com',
            'password' => bcrypt('password123'),
        ]);

        // Hacer la petición POST
        $response = $this->post('/login', [
            'email' => 'test@example.com',
            'password' => 'password123',
        ]);

        // Verificar que el usuario fue autenticado
        $this->assertAuthenticatedAs($user);
        $response->assertRedirect('/dashboard');

    }
}
