import { useQuery } from '@tanstack/react-query';
import {
  searchHeroesAction,
  type OptionSearchParams,
} from '../actions/search-heroes.action';

export const useSearchHero = (optionsSearch: OptionSearchParams) => {
  return useQuery({
    queryKey: ['search', optionsSearch],
    queryFn: () => searchHeroesAction(optionsSearch),
    staleTime: 1000 * 60 * 5, //5 minutos,
    retry: false,
  });
};
