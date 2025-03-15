import Chart from '@/components/chart';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import TableUsers from '@/components/TableUsers';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Users',
        href: '/users',
    },
];


const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <ThemeProvider theme={darkTheme}>
                    <TableUsers />
                </ThemeProvider>
            </div>
        </AppLayout>
    );
}
