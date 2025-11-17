import { HeroCard } from './HeroCard';

export const HeroGrid = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
      {/* Hero Card 1 - Superman */}
      <HeroCard
        name='Superman'
        realName='Clark Kent'
        status='Active'
        universe='DC'
        groupName='Justice League'
        description='The Last Son of Krypton, protector of Earth and symbol of hope for
            all humanity.'
        strngth={100}
        intelligence={80}
        speed={90}
        durability={100}
        powers={[
          'Super Strength',
          'Flight',
          'Heat Vision',
          'X-Ray',
          'Sun Recharge',
          'Super Speed',
        ]}
        personality='Hero'
        firstAppearence='1938'
      />

      {/* Hero Card 2 - Batman */}
      <HeroCard
        name='Batman'
        realName='Bruce Wayne'
        status='Active'
        universe='DC'
        groupName='Justice League'
        description='The Dark Knight of Gotham City, using fear as a weapon against crime and corruption.'
        strngth={60}
        intelligence={100}
        speed={60}
        durability={70}
        powers={[
          'Martial Arts',
          'Detective Skills',
          'Endurance',
          'Intelligence',
          'Durabilty',
        ]}
        personality='Hero'
        firstAppearence='1920'
      />

      {/* Hero Card 3 - Wonder Woman */}
      <HeroCard
        name='Wonder Woman'
        realName='Diana Prince'
        status='Active'
        universe='DC'
        groupName='Justice League'
        description='Amazonian princess and warrior, champion of truth, justice, and equality.'
        strngth={90}
        intelligence={80}
        speed={90}
        durability={90}
        powers={[
          'Super Strength',
          'Flight',
          'Heat Vision',
          'X-Ray',
          'Sun Recharge',
          'Super Speed',
        ]}
        personality='Hero'
        firstAppearence='1941'
      />

      {/* Hero Card 4 - Spider-Man */}
      <HeroCard
        name='Spider-Man'
        realName='Peter Parker'
        status='Active'
        universe='Marvel'
        groupName='Avengers'
        description='Your friendly neighborhood Spider-Man, with great power comes great responsibility.'
        strngth={70}
        intelligence={90}
        speed={70}
        durability={60}
        powers={[
          'Wall Crawling',
          'Spider Sense',
          'Intelligence',
          'Strength',
          'Web Creation',
        ]}
        personality='Hero'
        firstAppearence='1962'
      />

      {/* Hero Card 5 - Iron Man */}
      <HeroCard
        name='Iron Man'
        realName='Tony Stark'
        status='Active'
        universe='Marvel'
        groupName='Avengers'
        description='Billionaire genius inventor who uses his technology to protect the world.'
        strngth={70}
        intelligence={100}
        speed={60}
        durability={70}
        powers={[
          'Powered Armor',
          'Genius Intellect',
          'Flight',
          'Laser Shooting',
          'Minions',
        ]}
        personality='Hero'
        firstAppearence='1963'
      />

      {/* Hero Card 6 - Deadpool */}
      <HeroCard
        name='Deadpool'
        realName='Wade Wilson'
        status='Active'
        universe='Marvel'
        groupName='X-Force'
        description='The Merc with a Mouth, an unpredictable anti-hero with accelerated healing powers.'
        strngth={60}
        intelligence={60}
        speed={70}
        durability={90}
        powers={[
          'Healing Factor',
          'Martial Arts',
          'Endurance',
          'Fast Recovery',
          'Strength',
        ]}
        personality='Anti-Hero'
        firstAppearence='1991'
      />
    </div>
  );
};
