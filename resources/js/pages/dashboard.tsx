import Chart from '@/components/chart';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-6 p-6 bg-gradient-to-br from-blue-500 to-indigo-700 dark:from-gray-900 dark:to-black text-white">
                {/* Sección de estadísticas */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-gray-300 bg-white shadow-lg p-6 dark:bg-gray-800 dark:border-gray-700">
                        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Métricas de Egresados</h3>
                        <Chart />
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-gray-300 bg-white shadow-lg p-6 dark:bg-gray-800 dark:border-gray-700 flex items-center justify-center">
                        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Empleabilidad</h3>
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-gray-300 bg-white shadow-lg p-6 dark:bg-gray-800 dark:border-gray-700 flex items-center justify-center">
                        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Eventos y Noticias</h3>
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                </div>
                
                {/* Sección de información detallada */}
                <div className="relative flex-1 overflow-hidden rounded-xl border border-gray-300 bg-white shadow-lg p-8 dark:bg-gray-800 dark:border-gray-700">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Información General</h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">Aquí puedes ver estadísticas detalladas sobre los egresados de la Universidad Mariana, incluyendo tasas de empleo, sectores laborales y más.</p>
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div>
            </div>
        </AppLayout>
    );
}
