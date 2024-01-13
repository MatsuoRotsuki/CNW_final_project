<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Providers\RouteServiceProvider;
use Laravel\Socialite\Facades\Socialite;

class GoogleController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function login()
    {
        return Socialite::driver('google')->redirect();
    }

    public function callback()
    {
        try {
            $user = Socialite::driver('google')->user();

            $foundUser = User::where('google_id', $user->id)->first();
            if ($foundUser) {
                Auth::login($foundUser);
                return redirect()->intended(RouteServiceProvider::HOME);
            } else {
                $newUser = User::create([
                    'name' => $user->name,
                    'email' => $user->email,
                    'password' => Hash::make('123456'),
                    'google_id' => $user->id,
                    'avatar_url' => $user->avatar,
                ]);
                Auth::login($newUser);
                return redirect()->intended(RouteServiceProvider::HOME);
            }
        } catch (Exception $e)
        {
            return redirect()->back();
        }
    }
}
