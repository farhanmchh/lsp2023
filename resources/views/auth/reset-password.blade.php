<x-guest-layout>
    <x-auth-card>
        <x-slot name="logo">
            <a href="/">
                <x-application-logo class="w-20 h-20 fill-current text-gray-500" />
            </a>
        </x-slot>

<<<<<<< HEAD
        <!-- Validation Errors -->
        <x-auth-validation-errors class="mb-4" :errors="$errors" />

        <form method="POST" action="{{ route('password.update') }}">
=======
        <form method="POST" action="{{ route('password.store') }}">
>>>>>>> 3c8e8ffbfd64f6f4f5f4cfde92b1c5013f6fb596
            @csrf

            <!-- Password Reset Token -->
            <input type="hidden" name="token" value="{{ $request->route('token') }}">

            <!-- Email Address -->
            <div>
                <x-input-label for="email" :value="__('Email')" />
<<<<<<< HEAD

                <x-text-input id="email" class="block mt-1 w-full" type="email" name="email" :value="old('email', $request->email)" required autofocus />
=======
                <x-text-input id="email" class="block mt-1 w-full" type="email" name="email" :value="old('email', $request->email)" required autofocus />
                <x-input-error :messages="$errors->get('email')" class="mt-2" />
>>>>>>> 3c8e8ffbfd64f6f4f5f4cfde92b1c5013f6fb596
            </div>

            <!-- Password -->
            <div class="mt-4">
                <x-input-label for="password" :value="__('Password')" />
<<<<<<< HEAD

                <x-text-input id="password" class="block mt-1 w-full" type="password" name="password" required />
=======
                <x-text-input id="password" class="block mt-1 w-full" type="password" name="password" required />
                <x-input-error :messages="$errors->get('password')" class="mt-2" />
>>>>>>> 3c8e8ffbfd64f6f4f5f4cfde92b1c5013f6fb596
            </div>

            <!-- Confirm Password -->
            <div class="mt-4">
                <x-input-label for="password_confirmation" :value="__('Confirm Password')" />

                <x-text-input id="password_confirmation" class="block mt-1 w-full"
                                    type="password"
                                    name="password_confirmation" required />
<<<<<<< HEAD
=======

                <x-input-error :messages="$errors->get('password_confirmation')" class="mt-2" />
>>>>>>> 3c8e8ffbfd64f6f4f5f4cfde92b1c5013f6fb596
            </div>

            <div class="flex items-center justify-end mt-4">
                <x-primary-button>
                    {{ __('Reset Password') }}
                </x-primary-button>
            </div>
        </form>
    </x-auth-card>
</x-guest-layout>
