import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { HooksApp } from './HooksApp';

import './index.css';
import { TrafficLight } from './01-useState/TrafficLight';
import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect';
import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook';
import { PokemonPage } from './03-examples/PokemonPage';
import { FocusScreen } from './04-useRef/FocusScreen';
import { TasksApp } from './05-userReducer/TaskApp';
import { TasksAppWithReducer } from './05-userReducer/TaskAppWithReducer';
import { ScrambleWords } from './05-userReducer/ScrambleWords';
import { ScrambleWordsWithReducer } from './05-userReducer/ScrambleWordsWithReducer';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHook /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp /> */}
    {/* <TasksAppWithReducer /> */}
    {/* <ScrambleWords /> */}
    <ScrambleWordsWithReducer />
  </StrictMode>
);
