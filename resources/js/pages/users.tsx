import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import TableUsers from '@/components/TableUsers';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paginas from '@/components/Paginasusers';

// Definir la interfaz de usuario
interface User {
    id: number;
    name: string;
    email: string;
    created_at: string;
}

// Definir tipos específicos para los enlaces y metadatos de paginación
interface PaginationLinks {
    first: string | null;
    last: string | null;
    prev: string | null;
    next: string | null;
}

interface PaginationMeta {
    current_page: number;
    from: number;
    last_page: number;
    links: Array<{
        url: string | null;
        label: string;
        active: boolean;
    }>;
    path: string;
    per_page: number;
    to: number;
    total: number;
}

// Definir la interfaz para el objeto paginado de usuarios
interface UsersPaginated {
    data: User[];
    links: PaginationLinks;
    meta: PaginationMeta;
}

// Definir la interfaz para las props de la página
interface UsersProps {
    users: UsersPaginated;
}

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

// Especificamos el tipo correcto para las props
export default function Users({ users }: UsersProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Users" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <ThemeProvider theme={darkTheme}>
                    <Paginas />
                    <TableUsers users={users} />
                </ThemeProvider>
            </div>
        </AppLayout>
    ); 
}