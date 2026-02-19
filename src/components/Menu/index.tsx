import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./Menu.module.css";
import { useEffect, useState } from "react";

type ThemeProps = 'dark' | 'light';

export function Menu() {
    const [theme, setTheme] = useState<ThemeProps>(() => {
        const savedTheme = localStorage.getItem("theme") as ThemeProps ?? 'dark';
        return savedTheme;
    });

    const selectThemeIcon = {
        dark: <SunIcon />,
        light: <MoonIcon />
    }

    function handleTheme(ev: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        ev.preventDefault();
        const nowTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(nowTheme)
        return nowTheme
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme)
    }, [theme])

    return <nav className={styles.menu}>

        <a href="#" className={styles.menuLink} aria-label="Ir para Home" title="Ir para Home">
            <HouseIcon />
        </a>

        <a href="#" className={styles.menuLink} aria-label="Ver seu Hiatórico" title="Ver seu Histórico">
            <HistoryIcon />
        </a>

        <a href="#" className={styles.menuLink} aria-label="Configurações" title="Configurações">
            <SettingsIcon />
        </a>

        <a
            href="#" className={styles.menuLink} aria-label="Alterar Tema" title="Alterar Tema"
            onClick={(ev) => handleTheme(ev)}
        >
            {selectThemeIcon[theme]}
        </a>

    </nav>
}