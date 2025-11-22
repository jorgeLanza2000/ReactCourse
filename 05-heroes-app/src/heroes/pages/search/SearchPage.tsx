import { CustomJumbotron } from '@/components/custom/CustomJumbotron';
import { HeroStats } from '@/heroes/components/custom/HeroStats';
import { SearchControls } from './ui/SearchControls';
import type { OptionSearchParams } from '@/heroes/actions/search-heroes.action';
import { useSetParams } from '@/heroes/hooks/useSetParams';
import { useSearchHero } from '@/heroes/hooks/useSearchHero';
import { HeroGrid } from '@/heroes/components/custom/HeroGrid';

export const initialSearchParams: OptionSearchParams = {
  name: '',
  team: '',
  category: '',
  universe: '',
  status: '',
  strength: '',
};

export const SearchPage = () => {
  const { searchParams } = useSetParams();
  const searchParamsOptions: OptionSearchParams = {};
  for (const key in initialSearchParams) {
    const value = searchParams.get(key) ?? '';
    if (value != '') {
      searchParamsOptions[key as keyof OptionSearchParams] = value;
    }
  }

  // if (Object.keys(searchParamsOptions).length > 0) {
  const { data: searchHeroes = [] } = useSearchHero(searchParamsOptions);
  // }

  return (
    <>
      {/* Header */}
      <CustomJumbotron
        title='Búsqueda de SuperHéroes'
        description='Descubre, explora y administra super héroes y villanos'
      />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Controls */}
      <SearchControls />

      <HeroGrid heroes={searchHeroes} />
    </>
  );
};

export default SearchPage;
