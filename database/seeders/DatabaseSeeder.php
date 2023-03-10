<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        
        Role::insert([
            ['name' => 'Admin'],
            ['name' => 'Guru'],
            ['name' => 'Siswa'],
        ]);

        User::create([
            'username' => '123',
            'password' => '123',
            'role_id' => 1
        ]);
    }
}
