import AppLogoIcon from './app-logo-icon';

export default function AppLogo() {
    return (
        <>
            <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-10 items-center justify-center rounded-md">
            <a href="https://ibb.co/9H8CdPdQ"><img src="https://i.ibb.co/9H8CdPdQ/Escudo-Universidad-Mariana-removebg-preview.png" alt="Escudo-Universidad-Mariana-removebg-preview"/></a>
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate leading-none font-semibold">Universidad Mariana</span>
            </div>
        </>
    );
}
