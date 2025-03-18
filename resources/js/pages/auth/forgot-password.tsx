import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';

export default function ForgotPassword({ status }: { status?: string }) {
    const { data, setData, post, processing, errors } = useForm<Required<{ email: string }>>({
        email: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('password.email'));
    };

    return (
        <>
            <Head title="Recuperar Contraseña" />
            <div className="bg-blue-100 flex items-center justify-center min-h-screen">
                <div className="bg-white rounded-lg shadow-lg flex max-w-4xl w-full">
                    {/* Imagen en el lado izquierdo */}
                    <div className="hidden md:flex md:w-1/2 bg-blue-200 rounded-l-lg items-center justify-center p-8">
                        <img 
                            src="https://www.umariana.edu.co/images2023/programas/fisioterapia/img-7.jpg"
                            alt="Ilustración de recuperación de contraseña"
                            className="w-full h-auto"
                        />
                    </div>

                    {/* Formulario de recuperación */}
                    <div className="w-full md:w-1/2 p-8">
                        <h2 className="text-2xl font-bold text-blue-700 mb-4">Recuperar Contraseña</h2>
                        <p className="text-gray-600 mb-6">Ingresa tu correo para recibir un enlace de recuperación</p>

                        {status && <div className="mb-4 text-center text-sm font-medium text-green-600">{status}</div>}

                        <form className="space-y-4" onSubmit={submit}>
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

                            {/* Botón de envío */}
                            <div>
                                <button 
                                    type="submit" 
                                    className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800"
                                    disabled={processing}
                                >
                                    {processing ? 'Cargando...' : 'Enviar enlace de recuperación'}
                                </button>
                            </div>
                        </form>

                        {/* Enlace de inicio de sesión */}
                        <div className="text-center mt-4">
                            <span className="text-gray-500">
                                ¿Recuerdas tu contraseña? 
                                <a href={route('login')} className="text-blue-500"> Inicia Sesión</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
