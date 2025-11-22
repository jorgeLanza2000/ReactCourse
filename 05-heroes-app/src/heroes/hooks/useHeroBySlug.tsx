import { useQuery } from '@tanstack/react-query';
import { getHeroBySlugAction } from '../actions/get-hero-by-slug.actions';

export const useHeroBySlug = (slug: string) => {
  return useQuery({
    queryKey: ['hero', slug],
    queryFn: () => getHeroBySlugAction(slug),
    staleTime: 1000 * 60 * 5, // 5 min
    retry: false,
  });
};
