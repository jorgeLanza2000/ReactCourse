import { use, useMemo } from 'react';

import { useHeroSummary } from '@/heroes/hooks/useHeroSummary';
import { usePaginatedHero } from '@/heroes/hooks/usePaginatedHero';
import { useSetParams } from '@/heroes/hooks/useSetParams';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CustomJumbotron } from '@/components/custom/CustomJumbotron';
import { HeroStats } from '@/heroes/components/custom/HeroStats';
import { HeroGrid } from '@/heroes/components/custom/HeroGrid';
import { CustomPagination } from '@/components/custom/CustomPagination';
import { FavoriteHeroContext } from '@/heroes/context/FavoriteHeroContext';

export const HomePage = () => {
  const { changeParams, searchParams } = useSetParams();
  const { favoriteCount, favorites } = use(FavoriteHeroContext);

  const activeTab = searchParams.get('tab') ?? 'all';
  const page = searchParams.get('page') ?? '1';
  const limit = searchParams.get('limit') ?? '6';
  const category = searchParams.get('category') ?? 'all';

  const selectedTab = useMemo(() => {
    const validTabs = ['all', 'favorites', 'heroes', 'villains'];
    return validTabs.includes(activeTab) ? activeTab : 'all';
  }, [activeTab]);

  const { data: heroesResponse } = usePaginatedHero(page, limit, category);

  const { data: summary } = useHeroSummary();

  //!sin tankstack, todo mal
  // useEffect(() => {
  //   getHeroesByPage().then(() => {});
  // }, []);

  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron
          title='Universo de SuperHéroes'
          description='Descubre, explora y administra super héroes y villanos'
        />

        {/* Stats Dashboard */}
        <HeroStats />

        {/* Tabs */}
        <Tabs value={selectedTab} className='mb-8'>
          <TabsList className='grid w-full grid-cols-4'>
            <TabsTrigger
              value='all'
              onClick={() =>
                changeParams([
                  { key: 'tab', value: 'all' },
                  { key: 'category', value: 'all' },
                  { key: 'page', value: '1' },
                ])
              }
            >
              All Characters ({summary?.totalHeroes})
            </TabsTrigger>
            <TabsTrigger
              value='favorites'
              className='flex items-center gap-2'
              onClick={() =>
                changeParams([
                  { key: 'tab', value: 'favorites' },
                  { key: 'category', value: 'favorites' },
                  { key: 'page', value: '1' },
                ])
              }
            >
              Favorites ({favoriteCount})
            </TabsTrigger>
            <TabsTrigger
              value='heroes'
              onClick={() =>
                changeParams([
                  { key: 'tab', value: 'heroes' },
                  { key: 'category', value: 'hero' },
                  { key: 'page', value: '1' },
                ])
              }
            >
              Heroes ({summary?.heroCount})
            </TabsTrigger>
            <TabsTrigger
              value='villains'
              onClick={() =>
                changeParams([
                  { key: 'tab', value: 'villains' },
                  { key: 'category', value: 'villain' },
                  { key: 'page', value: '1' },
                ])
              }
            >
              Villains ({summary?.villainCount})
            </TabsTrigger>
          </TabsList>

          {/* Tab todos */}
          <TabsContent value='all'>
            {/* Character Grid */}
            <HeroGrid heroes={heroesResponse?.heroes ?? []} />
          </TabsContent>

          {/* Tab favoritos */}
          <TabsContent value='favorites'>
            <HeroGrid heroes={favorites} />
          </TabsContent>

          {/* Tab heroes */}
          <TabsContent value='heroes'>
            <HeroGrid heroes={heroesResponse?.heroes ?? []} />
          </TabsContent>

          {/* Tab villanos */}
          <TabsContent value='villains'>
            <HeroGrid heroes={heroesResponse?.heroes ?? []} />
          </TabsContent>
        </Tabs>

        {/* Pagination */}
        {selectedTab != 'favorites' && (
          <CustomPagination totalPages={heroesResponse?.pages ?? 0} />
        )}
      </>
    </>
  );
};
