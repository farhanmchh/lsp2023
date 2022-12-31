<x-guest-layout>
    <x-auth-card>
        <x-slot name="logo">
            <a href="/">
                <x-application-logo class="w-20 h-20 fill-current text-gray-500" />
            </a>
        </x-slot>

        <div class="mb-4 text-sm text-gray-600">
            {{ __('This is a secure area of the application. Please confirm your password before continuing.') }}
        </div>

<<<<<<< HEAD
        <!-- Validation Errors -->
        <x-auth-validation-errors class="mb-4" :errors="$errors" />

=======
>>>>>>> 3c8e8ffbfd64f6f4f5f4cfde92b1c5013f6fb596
        <form method="POST" action="{{ route('password.confirm') }}">
            @csrf

            <!-- Password -->
            <div>
                <x-input-label for="password" :value="__('Password')" />

                <x-text-input id="password" class="block mt-1 w-full"
                                type="password"
                                name="password"
                                required autocomplete="current-password" />
<<<<<<< HEAD
=======

                <x-input-error :messages="$errors->get('password')" class="mt-2" />
>>>>>>> 3c8e8ffbfd64f6f4f5f4cfde92b1c5013f6fb596
            </div>

            <div class="flex justify-end mt-4">
                <x-primary-button>
                    {{ __('Confirm') }}
                </x-primary-button>
            </div>
        </form>
    </x-auth-card>
</x-guest-layout>
