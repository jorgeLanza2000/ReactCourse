import { useEffect, useState } from 'react';
import {
  colors,
  type TrafficLightColor,
} from '../interfaces/trafficLight.interface';

export const useTrafficLight = () => {
  const [light, setLight] = useState<TrafficLightColor>('red');
  const [countdown, setCountdown] = useState(5);

  //Countdown effect
  useEffect(() => {
    if (countdown === 0) return;

    const intervalId = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [countdown]);

  //Change light color effect
  useEffect(() => {
    if (countdown != 0) return;
    setCountdown(5);
    switch (light) {
      case 'red':
        setLight('green');
        break;
      case 'yellow':
        setLight('red');
        break;
      case 'green':
        setLight('yellow');
        break;
      default:
        return;
    }
  }, [countdown, light]);

  return {
    //Props
    countdown,

    //Computed
    percentage: (countdown / 5) * 100,
    greenLight: light === 'green' ? colors.green : 'bg-gray-500',
    redLight: light === 'red' ? colors.red : 'bg-gray-500',
    yellowLight: light === 'yellow' ? colors.yellow : 'bg-gray-500',

    //Methods
  };
};
