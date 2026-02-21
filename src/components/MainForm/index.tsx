import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { Input } from '../Input';
import styles from './MainForm.module.css';
import type { HomeProps } from '../../templates/pages/Home';

export function MainForm({ state }: HomeProps) {
    return (
        <form action="" className={styles.form}>
            <div className="formRow">
                <Input labelText='Task' id='meuInput' type='text' placeholder='Adicione o nome da tarefa...' />
            </div>
            <div className={styles.formRow}>
                <p>Próximo intervalo é de {state.config.workTime}</p>
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