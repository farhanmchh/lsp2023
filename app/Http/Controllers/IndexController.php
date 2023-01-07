<?php

namespace App\Http\Controllers;

use App\Models\Administrator;
use App\Models\Guru;
use App\Models\Siswa;
use App\Models\User;
use Illuminate\Contracts\Session\Session;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class IndexController extends Controller
{
  public function index()
  {
    return Inertia::render('Login');
  }

  public function login(Request $request)
  {
    $user = User::where('username', $request->username)->where('password', $request->password)->first();

    if ($user) {
      Auth::loginUsingId($user->id);

      return redirect('/home');
    }

    return back()->with('message', 'invalid authentication');
  }

  public function home()
  {
    return view('home');
  }
}
