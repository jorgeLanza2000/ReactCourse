import { useSearchParams } from 'react-router';

interface setParamasData {
  key: string;
  value: string;
}

export const useSetParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const changeParams = (data: setParamasData[]) => {
    setSearchParams((prev) => {
      data.forEach((param) => {
        prev.set(param.key, param.value);
      });
      return prev;
    });
  };

  return { changeParams, searchParams, setSearchParams };
};
