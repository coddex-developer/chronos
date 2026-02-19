import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { Input } from '../Input';
import styles from './MainForm.module.css';

export function MainForm() {
    return (
        <form action="" className={styles.form}>
            <div className="formRow">
                <Input labelText='Task' id='meuInput' type='text' placeholder='Adicione o nome da tarefa...' />
            </div>
            <div className={styles.formRow}>
                <p>Lorem ipsum dolor, sit.</p>
            </div>
            <div className={styles.formRow}>
                <Cycles />
            </div>
            <div className={styles.formRow}>
                <DefaultButton color='green' icon={<PlayCircleIcon />} />
            </div>
        </form>
    )
}