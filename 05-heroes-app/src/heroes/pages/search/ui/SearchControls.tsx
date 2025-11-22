import React from 'react';
import { useRef } from 'react';
import { useSetParams } from '@/heroes/hooks/useSetParams';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, SortAsc, Grid, Plus } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from '@/components/ui/accordion';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { OptionSearchParams } from '@/heroes/actions/search-heroes.action';

export const SearchControls = () => {
  const { searchParams, changeParams, setSearchParams } = useSetParams();

  const inputRef = useRef<HTMLInputElement>(null);
  const filters = searchParams.get('filters') ?? 'false';
  const filterParams: Required<OptionSearchParams> = {
    team: searchParams.get('team') ?? 'all',
    category: searchParams.get('category') ?? 'all',
    universe: searchParams.get('universe') ?? 'all',
    strength: searchParams.get('strength') ?? '0',
    name: '',
    status: '',
  };

  const enterHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      changeParams([{ key: 'name', value: inputRef.current?.value ?? '' }]);
    }
  };

  const clearFiltersHanler = () => {
    for (const key in filterParams) {
      searchParams.delete(key);
    }
    setSearchParams(searchParams);
    filterParams.team = 'all';
  };

  return (
    <>
      <div className='flex flex-col lg:flex-row gap-4 mb-8'>
        {/* Search */}
        <div className='relative flex-1'>
          <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5' />
          <Input
            ref={inputRef}
            placeholder='Search heroes, villains, powers, teams...'
            className='pl-12 h-12 text-lg bg-white'
            onKeyDown={enterHandler}
            defaultValue={searchParams.get('name') ?? ''}
          />
        </div>

        {/* Action buttons */}
        <div className='flex gap-2'>
          <Button
            variant={filters == 'true' ? 'default' : 'outline'}
            className='h-12'
            onClick={() =>
              changeParams([
                {
                  key: 'filters',
                  value: filters === 'true' ? 'false' : 'true',
                },
              ])
            }
          >
            <Filter className='h-4 w-4 mr-2' />
            Filters
          </Button>

          <Button variant='outline' className='h-12'>
            <SortAsc className='h-4 w-4 mr-2' />
            Sort by Name
          </Button>

          <Button variant='outline' className='h-12'>
            <Grid className='h-4 w-4' />
          </Button>

          <Button className='h-12'>
            <Plus className='h-4 w-4 mr-2' />
            Add Character
          </Button>
        </div>
      </div>
      {/* Advanced Filters */}
      <Accordion
        type='single'
        collapsible
        value={filters === 'true' ? 'item-1' : ''}
      >
        <AccordionItem value='item-1'>
          <AccordionContent>
            <div className='bg-white rounded-lg p-6 mb-8 shadow-sm border'>
              <div className='flex justify-between items-center mb-4'>
                <h3 className='text-lg font-semibold'>Advanced Filters</h3>
                <Button variant='ghost' onClick={clearFiltersHanler}>
                  Clear All
                </Button>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                <div className='space-y-2'>
                  <label className='text-sm font-medium'>Team</label>
                  <Select
                    defaultValue={
                      filterParams.team != '' ? filterParams.team : 'all'
                    }
                    onValueChange={(val) =>
                      changeParams([
                        { key: 'team', value: val != 'all' ? val : '' },
                      ])
                    }
                  >
                    <SelectTrigger className='h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm'>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='all'>All teams</SelectItem>
                      <SelectItem value='Liga de la Justicia'>
                        Liga de la Justicia
                      </SelectItem>
                      <SelectItem value='Vengadores'>Vengadores</SelectItem>
                      <SelectItem value='X-Men'>X-Men</SelectItem>
                      <SelectItem value='Batfamilia'>Batfamilia</SelectItem>
                      <SelectItem value='Jóvenes Titanes'>
                        Jóvenes Titanes
                      </SelectItem>
                      <SelectItem value='Suicide Squad'>
                        Suicide Squad
                      </SelectItem>
                      <SelectItem value='Solo'>No team</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className='space-y-2'>
                  <label className='text-sm font-medium'>Category</label>
                  <Select
                    defaultValue={
                      filterParams.category != ''
                        ? filterParams.category
                        : 'all'
                    }
                    onValueChange={(val) =>
                      changeParams([
                        { key: 'category', value: val != 'all' ? val : '' },
                      ])
                    }
                  >
                    <SelectTrigger className='h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm'>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='all'>All categories</SelectItem>
                      <SelectItem value='hero'>Heroes</SelectItem>
                      <SelectItem value='villain'>Villains</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className='space-y-2'>
                  <label className='text-sm font-medium'>Universe</label>
                  <Select
                    defaultValue={
                      filterParams.universe != ''
                        ? filterParams.universe
                        : 'all'
                    }
                    onValueChange={(val) =>
                      changeParams([
                        { key: 'universe', value: val != 'all' ? val : '' },
                      ])
                    }
                  >
                    <SelectTrigger className='h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm'>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='all'>All universes</SelectItem>
                      <SelectItem value='dc'>DC</SelectItem>
                      <SelectItem value='marvel'>Marvel</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className='space-y-2'>
                  <label className='text-sm font-medium'>Status</label>
                  <div className='h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm'>
                    All statuses
                  </div>
                </div>
              </div>
              <div className='mt-4'>
                <label className='text-sm font-medium'>
                  Minimum Strength: {+filterParams.strength}/10
                </label>
                <Slider
                  defaultValue={[+filterParams.strength]}
                  max={10}
                  step={1}
                  onValueChange={(val) =>
                    changeParams([{ key: 'strength', value: String(val[0]) }])
                  }
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};
