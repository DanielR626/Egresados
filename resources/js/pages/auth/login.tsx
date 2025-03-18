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
                                <label className="block text-gray-700">
                                    <i className="fas fa-user mr-2"></i>
                                    <input 
                                        type="email" 
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                                        placeholder="Ingresa tu correo"
                                        required
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                    />
                                </label>
                                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                            </div>

                            {/* Campo de contraseña */}
                            <div>
                                <label className="block text-gray-700">
                                    <i className="fas fa-lock mr-2"></i>
                                    <input 
                                        type="password" 
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                                        placeholder="Ingresa tu contraseña"
                                        required
                                        value={data.password}
                                        onChange={(e) => setData('password', e.target.value)}
                                    />
                                </label>
                                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                            </div>

                            {/* Enlace para recuperar contraseña */}
                            {canResetPassword && (
                                <div className="text-right">
                                    <a href={route('password.request')} className="text-blue-500 text-sm">¿Tienes problemas para iniciar sesión?</a>
                                </div>
                            )}

                            {/* Botón de inicio de sesión */}
                            <div>
                                <button 
                                    type="submit" 
                                    className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800"
                                    disabled={processing}
                                >
                                    {processing ? 'Cargando...' : 'Iniciar Sesión'}
                                </button>
                            </div>

                            {/* Enlace de registro */}
                            <div className="text-center">
                                <span className="text-gray-500">
                                    ¿No tienes una cuenta? 
                                    <a href={route('register')} className="text-blue-500"> Regístrate Ahora</a>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}