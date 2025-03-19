import { type BreadcrumbItem } from '@/types';
import Fechas from '@/components/Fecha';

interface AppSidebarHeaderProps {
    breadcrumbs?: BreadcrumbItem[];
}

export function AppSidebarHeader({ breadcrumbs = [] }: AppSidebarHeaderProps) {
    return (
        <div className="flex items-center justify-between p-4 border-b">
            {/* Breadcrumbs alineados a la izquierda */}
            <nav aria-label="breadcrumb" className="flex">
                <ol className="flex space-x-2 text-sm text-gray-500">
                    {breadcrumbs.map((breadcrumb, index) => (
                        <li key={index} className="flex items-center">
                            <a href={breadcrumb.href} className="hover:text-gray-700">
                                {breadcrumb.title}
                            </a>
                            {index < breadcrumbs.length - 1 && <span className="mx-2">/</span>}
                        </li>
                    ))}
                </ol>
            </nav>

            {/* Fechas alineado a la derecha */}
            <Fechas />
        </div>
    );
}
