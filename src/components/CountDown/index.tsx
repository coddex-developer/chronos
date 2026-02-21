import type { HomeProps } from "../../templates/pages/Home";
import styles from "./CountDown.module.css";

export function CountDown({ state }: HomeProps) {
    return <div className={styles.container}>{state.formatedSecondsRemaining}</div>
}