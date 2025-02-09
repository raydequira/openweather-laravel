<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        /* 
         * Adding default User 
         * via seed
        */
        User::firstOrCreate([            
            'name'              => 'admin',
            'email'             => 'admin@test.com',
            'email_verified_at' => now(),
            'password'          => \Hash::make('p@ssw0rd'),
            'remember_token'    => Str::random(10),
        ]);
    }
}
