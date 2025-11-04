import {
  GAME_WORDS,
  type ScrambleWordState,
} from '../interface/scrambleWordsWithReducer.interface';

// Esta función mezcla el arreglo para que siempre sea aleatorio
const shuffleArray = (array: string[]) => {
  return array.sort(() => Math.random() - 0.5);
};

// Esta función mezcla las letras de la palabra
const scrambleWord = (word: string = '') => {
  return word
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');
};

export type ScrambleWordActions =
  | { type: 'SET_GUESS'; payload: string }
  | { type: 'CHECK_ANSWER' }
  | { type: 'SKIP_WORD' }
  | { type: 'START_NEW_GAME'; payload: ScrambleWordState };

export const getInitialState = (): ScrambleWordState => {
  const shuffleWords = shuffleArray([...GAME_WORDS]);

  return {
    currentWord: shuffleWords[0],
    errorCounter: 0,
    guess: '',
    isGameOver: false,
    maxAllowErrors: 3,
    maxSkips: 3,
    points: 0,
    scrambledWord: scrambleWord(shuffleWords[0]),
    skipCounter: 0,
    words: shuffleWords,
    totalWords: shuffleWords.length,
  };
};

export const scrambeWordsRedcures = (
  state: ScrambleWordState,
  action: ScrambleWordActions
): ScrambleWordState => {
  switch (action.type) {
    case 'SET_GUESS':
      return {
        ...state,
        guess: action.payload.trim().toUpperCase(),
      };

    case 'CHECK_ANSWER': {
      //si adivina
      if (state.guess === state.currentWord) {
        const newWords = state.words.slice(1);
        return {
          ...state,
          currentWord: newWords[0],
          guess: '',
          points: state.points + 1,
          scrambledWord: scrambleWord(newWords[0]),
          words: newWords,
        };
      }
      //si falla
      return {
        ...state,
        errorCounter: state.errorCounter + 1,
        guess: '',
        isGameOver: state.errorCounter + 1 === state.maxAllowErrors,
      };
    }

    case 'SKIP_WORD': {
      if (state.skipCounter >= state.maxSkips) return state;

      const newWords = state.words.slice(1);
      return {
        ...state,
        currentWord: newWords[0],
        guess: '',
        scrambledWord: scrambleWord(newWords[0]),
        skipCounter: state.skipCounter + 1,
        words: newWords,
      };
    }

    case 'START_NEW_GAME':
      return getInitialState();

    default:
      return state;
  }
};
