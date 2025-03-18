<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Models\User;


class UserTest extends TestCase
{
    /** @test */
    public function puede_crear_un_usuario()
    {
        $user = User::factory()->create();

        $this->assertDatabaseHas('users', [
            'email' => $user->email,
        ]);
    }
    
}

