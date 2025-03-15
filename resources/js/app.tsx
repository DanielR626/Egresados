import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { initializeTheme } from './hooks/use-appearance';
import { useEffect, useState, createContext, useContext } from 'react';
import axios from 'axios';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// Crear contexto para traducciones
const TranslationContext = createContext<{ [key: string]: string }>({});

// Hook para usar traducciones en cualquier componente
export function useTranslations() {
    return useContext(TranslationContext);
}

function TranslationProvider({ children }: { children: React.ReactNode }) {
    const [translations, setTranslations] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        axios.get('/translations')
            .then(response => {
                console.log("Traducciones cargadas:", response.data); // Verifica en consola
                setTranslations(response.data);
            })
            .catch(error => console.error('Error cargando traducciones:', error));
    }, []);

    return (
        <TranslationContext.Provider value={translations}>
            {children}
        </TranslationContext.Provider>
    );
}

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <TranslationProvider>
                <App {...props} />
            </TranslationProvider>
        );
    },
    progress: {
        color: '#4B5563',
    },
});

// Inicializar tema (dark/light mode)
initializeTheme();

