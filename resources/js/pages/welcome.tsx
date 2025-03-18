import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Bienvenidos Egresados">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-gray-100 p-6 text-gray-800 lg:justify-center lg:p-8">
                <header className="bg-white shadow-md mb-6 w-full">
                    <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                        <div className="flex space-x-4">
                            <a className="text-blue-600 font-bold" href="https://www.umariana.edu.co/index.html" target="_blank" rel="noopener noreferrer">
                                UNIVERSIDAD
                            </a>
                            <Link className="text-gray-600" href="#">
                                INICIO
                            </Link>
                            <Link className="text-gray-600" href="#">
                                RED DE CONTACTOS
                            </Link>
                        </div>
                        <div className="flex space-x-4">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="text-gray-600"
                                >
                                    INICIAR SESIÓN
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="text-gray-600"
                                    >
                                        INICIAR SESIÓN
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="text-gray-600"
                                    >
                                        REGISTRARSE
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </header>
                <main className="container mx-auto px-4 py-8">
                    <div className="text-center">
                        <img
                            alt="Graduados celebrando frente a un edificio universitario"
                            className="mx-auto mb-4"
                            height="400"
                            src="https://scontent.feoh1-1.fna.fbcdn.net/v/t39.30808-6/480820109_3816524715326017_3818215907761810768_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=U_JTFydMxL0Q7kNvgFLGAbg&_nc_oc=Adi0ctLeraXlt09gQrnVEIbOHwAV-4P6orTOTIRWhxwBqI9zynk_-3gEFKLey05Eahq8Dgcm3WvDZTDr0BypkAFy&_nc_zt=23&_nc_ht=scontent.feoh1-1.fna&_nc_gid=9BZem_dIUHGpY1fs5jNYPA&oh=00_AYHF8RaBN4SkUzSeVeD2OCOZnHz8m2-6SpVtZSqG9zGRiw&oe=67DEE459"
                            width="800"
                        />
                        <h1 className="text-4xl font-bold text-gray-800">
                            BIENVENIDOS EGRESADOS
                        </h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <h2 className="text-2xl font-bold text-gray-800">
                                EVENTOS
                            </h2>
                            <p className="text-gray-600 mt-2">
                                Descripción breve sobre los eventos disponibles para los graduados.
                            </p>
                            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-full">
                                EVENTOS
                            </button>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <h2 className="text-2xl font-bold text-gray-800">
                                OPORTUNIDADES
                            </h2>
                            <p className="text-gray-600 mt-2">
                                Descripción breve sobre las oportunidades disponibles para los graduados.
                            </p>
                            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-full">
                                OPORTUNIDADES
                            </button>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <h2 className="text-2xl font-bold text-gray-800">
                                RED DE CONTACTOS
                            </h2>
                            <p className="text-gray-600 mt-2">
                                Descripción breve sobre la red de contactos para los graduados.
                            </p>
                            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-full">
                                RED DE CONTACTO
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}