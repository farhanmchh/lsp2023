<?php

use App\Http\Controllers\GuruController;
use App\Http\Controllers\IndexController;
use App\Http\Controllers\JurusanController;
use App\Http\Controllers\KelasController;
use App\Http\Controllers\MapelController;
use App\Http\Controllers\MengajarController;
use App\Http\Controllers\NilaiController;
use App\Http\Controllers\SiswaController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/',[IndexController::class,'login']);
Route::post('/login', [IndexController::class, 'login']);
Route::get('/home',[IndexController::class,'home']);
Route::get('/guru',[GuruController::class, 'index']);
Route::get('/jurusan',[JurusanController::class, 'index']);
Route::get('/kelas',[KelasController::class,'index']);
Route::get('/siswa',[SiswaController::class,'index']);
Route::get('/mapel',[MapelController::class, 'index']);
Route::get('mengajar',[MengajarController::class,'index']);
Route::get('/nilai',[NilaiController::class,'index']);


// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

// require __DIR__ . '/auth.php';
