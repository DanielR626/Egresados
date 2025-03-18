import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';

// Definición de tipos para el formulario de registro
type RegisterForm = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
};

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm<Required<RegisterForm>>({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <>
            <Head title="Registro" />
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

                    {/* Formulario de registro */}
                    <div className="w-full md:w-1/2 p-8">
                        <h2 className="text-2xl font-bold text-blue-700 mb-4">Registro</h2>
                        <p className="text-gray-600 mb-6">Ingresa tus datos para crear una cuenta</p>

                        <form className="space-y-4" onSubmit={submit}>
                            {/* Campo de nombre */}
                            <div>
                                <label className="block text-gray-700">
                                    <i className="fas fa-user mr-2"></i>
                                    <input 
                                        type="text" 
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                                        placeholder="Nombre completo"
                                        required
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                    />
                                </label>
                                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                            </div>

                            {/* Campo de correo */}
                            <div>
                                <label className="block text-gray-700">
                                    <i className="fas fa-envelope mr-2"></i>
                                    <input 
                                        type="email" 
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                                        placeholder="Correo electrónico"
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
                                        placeholder="Contraseña"
                                        required
                                        value={data.password}
                                        onChange={(e) => setData('password', e.target.value)}
                                    />
                                </label>
                                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                            </div>

                            {/* Confirmación de contraseña */}
                            <div>
                                <label className="block text-gray-700">
                                    <i className="fas fa-lock mr-2"></i>
                                    <input 
                                        type="password" 
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                                        placeholder="Confirmar contraseña"
                                        required
                                        value={data.password_confirmation}
                                        onChange={(e) => setData('password_confirmation', e.target.value)}
                                    />
                                </label>
                                {errors.password_confirmation && <p className="text-red-500 text-sm">{errors.password_confirmation}</p>}
                            </div>

                            {/* Botón de registro */}
                            <div>
                                <button 
                                    type="submit" 
                                    className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800"
                                    disabled={processing}
                                >
                                    {processing ? 'Cargando...' : 'Registrarse'}
                                </button>
                            </div>

                            {/* Enlace de inicio de sesión */}
                            <div className="text-center">
                                <span className="text-gray-500">
                                    ¿Ya tienes una cuenta? 
                                    <a href={route('login')} className="text-blue-500"> Inicia Sesión</a>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}