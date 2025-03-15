import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import TableUsers from '@/components/TableUsers';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Usuarios',
        href: '/users',
    },
];

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export default function Users() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Usuarios" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="mb-4">
                    <h1 className="text-2xl font-semibold">Gestión de Usuarios</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Administra los usuarios del sistema
                    </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                    <ThemeProvider theme={darkTheme}>
                        <TableUsers />
                    </ThemeProvider>
                </div>
            </div>
        </AppLayout>
    );
}