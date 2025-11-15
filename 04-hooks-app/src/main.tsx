import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

import { Toaster } from 'sonner';

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
import { MemoHook } from './06-memos/MemoHook';
import { MemoCounter } from './06-memos/MemoCounter';
import { InstagromApp } from './07-useOptimistic/InstagromApp';
import { ClientInformation } from './08-use-suspense/ClientInformation';
import { getUserAction } from './08-use-suspense/api/get-user.action';
import { ProfessionalApp } from './09-useContext/ProfessionalApp';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster />
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHook /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp /> */}
    {/* <TasksAppWithReducer /> */}
    {/* <ScrambleWords /> */}
    {/* <ScrambleWordsWithReducer /> */}
    {/* <MemoHook /> */}
    {/* <MemoCounter /> */}
    {/* <InstagromApp /> */}
    {/* <Suspense fallback={<h1>Cargando</h1>}>
      <ClientInformation getUser={getUserAction(1001)} />
    </Suspense> */}
    <ProfessionalApp />
  </StrictMode>
);
