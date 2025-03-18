import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';

// Definición de tipos para el formulario de inicio de sesión
type LoginForm = {
    email: string;
    password: string;
    remember: boolean;
};

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
}

export default function Login({ status, canResetPassword }: LoginProps) {
    const { data, setData, post, processing, errors, reset } = useForm<Required<LoginForm>>({
        email: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <>
            <Head title="Inicio de Sesión" />
            <div className="bg-blue-100 flex items-center justify-center min-h-screen">
                <div className="bg-white rounded-lg shadow-lg flex max-w-4xl w-full">
                    {/* Imagen en el lado izquierdo */}
                    <div className="hidden md:flex md:w-1/2 bg-blue-200 rounded-l-lg items-center justify-center p-8">
                        <img 
                            src="https://www.umariana.edu.co/images2023/programas/fisioterapia/img-7.jpg"
                            alt="Ilustración de fisioterapia"
                            className="w-full h-auto"
                        />
                    </div>

                    {/* Formulario de inicio de sesión */}
                    <div className="w-full md:w-1/2 p-8">
                        <h2 className="text-2xl font-bold text-blue-700 mb-4">Inicio de Sesión</h2>
                        <p className="text-gray-600 mb-6">Ingresa tus datos para iniciar sesión en tu cuenta</p>

                        <form className="space-y-4" onSubmit={submit}>
                            {/* Campo de correo */}
                            <div>
                                <Label htmlFor="email" className="text-gray-700">Correo Electrónico</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    required
                                    autoFocus
                                    tabIndex={1}
                                    autoComplete="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    placeholder="email@example.com"
                                    className="border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-md"
                                />
                                <InputError message={errors.email} />
                            </div>

                            {/* Campo de contraseña */}
                            <div>
                                <Label htmlFor="password" className="text-gray-700">Contraseña</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    required
                                    tabIndex={2}
                                    autoComplete="current-password"
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    placeholder="********"
                                    className="border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-md"
                                />
                                <InputError message={errors.password} />
                            </div>

                            {/* Recordarme */}
                            <div className="flex items-center space-x-3">
                                <Checkbox
                                    id="remember"
                                    name="remember"
                                    checked={data.remember}
                                    onClick={() => setData('remember', !data.remember)}
                                    tabIndex={3}
                                />
                                <Label htmlFor="remember" className="text-gray-700">Recuérdame</Label>
                            </div>

                            {/* Enlace para recuperar contraseña */}
                            {canResetPassword && (
                                <div className="text-right">
                                    <TextLink href={route('password.request')} className="text-blue-500 text-sm">¿Tienes problemas para iniciar sesión?</TextLink>
                                </div>
                            )}

                            {/* Botón de inicio de sesión */}
                            <div>
                                <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-lg" tabIndex={4} disabled={processing}>
                                    {processing && <LoaderCircle className="h-4 w-4 animate-spin mr-2" />} Iniciar Sesión
                                </Button>
                            </div>

                            {/* Enlace de registro */}
                            <div className="text-center">
                                <span className="text-gray-500">
                                    ¿No tienes una cuenta? <TextLink href={route('register')} className="text-blue-500">Regístrate Ahora</TextLink>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
