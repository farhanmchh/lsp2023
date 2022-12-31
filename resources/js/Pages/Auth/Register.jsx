<<<<<<< HEAD
import React, { useEffect } from 'react';
=======
import { useEffect } from 'react';
>>>>>>> 3c8e8ffbfd64f6f4f5f4cfde92b1c5013f6fb596
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                    <InputLabel forInput="name" value="Name" />

                    <TextInput
<<<<<<< HEAD
                        type="text"
=======
                        id="name"
>>>>>>> 3c8e8ffbfd64f6f4f5f4cfde92b1c5013f6fb596
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel forInput="email" value="Email" />

                    <TextInput
<<<<<<< HEAD
=======
                        id="email"
>>>>>>> 3c8e8ffbfd64f6f4f5f4cfde92b1c5013f6fb596
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel forInput="password" value="Password" />

                    <TextInput
<<<<<<< HEAD
=======
                        id="password"
>>>>>>> 3c8e8ffbfd64f6f4f5f4cfde92b1c5013f6fb596
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel forInput="password_confirmation" value="Confirm Password" />

                    <TextInput
<<<<<<< HEAD
=======
                        id="password_confirmation"
>>>>>>> 3c8e8ffbfd64f6f4f5f4cfde92b1c5013f6fb596
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
<<<<<<< HEAD
                    <Link href={route('login')} className="underline text-sm text-gray-600 hover:text-gray-900">
=======
                    <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
>>>>>>> 3c8e8ffbfd64f6f4f5f4cfde92b1c5013f6fb596
                        Already registered?
                    </Link>

                    <PrimaryButton className="ml-4" processing={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
