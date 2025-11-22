import type { Hero } from '@/heroes/interfaces/hero.interface';

import { HeroCard } from './HeroCard';

interface Props {
  heroes: Hero[];
}

export const HeroGrid = ({ heroes }: Props) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
      {/* Hero Card 1 - Superman */}
      {heroes &&
        heroes.map((heroe) => <HeroCard key={heroe.id} hero={heroe} />)}
    </div>
  );
};
