import './styles/theme.css';
import './styles/global.css';
import Home from './templates/pages/Home';
import type { TaskStateModel } from './models/TaskStateModel';
import { useState } from 'react';

const initialState: TaskStateModel = {
  tasks: [],
  currentCycle: 0,
  activeTask: null,
  formatedSecondsRemaining: '01:05',
  secondsRemaining: 0,
  config: {
    longBreakTime: 15,
    shortBreakTime: 25,
    workTime: 5
  }
}

export default function App() {
  const [state, setState] = useState(initialState);
  return <Home state={state} setState={setState} />
}