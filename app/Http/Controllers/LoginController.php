<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Providers\RouteServiceProvider;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class LoginController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function redirectToGoogle()
    {
        return Socialite::driver('google')->redirect();
    }

    public function handleGoogleCallback()
    {
        try {
            $user = Socialite::driver('google')->user();
            $foundUser = User::where('google_id', $user->id)->first();
            if ($foundUser) {
                Auth::login($foundUser);
                return redirect(RouteServiceProvider::HOME);
            }
        } catch (Exception $e)
        {
            return redirect('auth/google');
        }
    }
}
