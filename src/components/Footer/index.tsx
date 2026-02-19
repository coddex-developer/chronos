import styles from './Footer.module.css';

export function Footer() {
    return <footer className={styles.footer}>
        <a href="#">Entenda comofunciona a técnica pomodoro</a>
        <a href="#">CoddeX Pomodoro &copy; {new Date().getFullYear()} feito com ❤</a>
    </footer>;
}