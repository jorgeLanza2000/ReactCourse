import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { FirstStepsApp } from './components/FirstStepsApp';
import { MyAwesomeApp } from './components/my-awesome-app/MyAwesomeApp';
import { FirstEmbebedComponent } from './components/first-embebed-component/FirstEmbebedComponent';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <FirstStepsApp /> */}
    {/* <MyAwesomeApp /> */}
    <FirstEmbebedComponent />
  </StrictMode>
);
