<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Response;
use Inertia\Inertia;

class UsersController extends Controller
{
    public function index():Response
    {
        $users = User::select('id','name','email','created_at')->latest()->paginate(10);
        return Inertia::render('users',[
            'users' => $users,
        ]);
    }
}
