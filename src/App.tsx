import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { Input } from './components/Input';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { PlayIcon } from 'lucide-react';


export default function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>

      <Container>

        <form action="" className='form'>
          <div className="formRow">
            <Input labelText='Task' id='meuInput' type='number' placeholder='Adicione o nome da tarefa...' />
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor, sit.</p>
          </div>

          <div className="formRow">
            <Cycles />
          </div>

          <div className="formRow">
            <DefaultButton color='green' icon={<PlayIcon />} />
          </div>

        </form>
      </Container>
    </>
  );
}