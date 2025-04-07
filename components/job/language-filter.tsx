'use client';

import { Check, ChevronsUpDown } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';

type LanguageFilter = {
  value: string;
  label: string;
}
const languages: LanguageFilter[] = [
  { value: 'all', label: 'all' },
  { value: 'english', label: 'English' },
  { value: 'mandarin', label: 'Mandarin' },
  { value: 'korean', label: 'Korean' },
  { value: 'japanese', label: 'Japanese' },
];

export function LanguageFilter() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('all');

  return (
    <div className="flex items-center">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[180px] justify-between h-12 bg-white border-gray-200 text-gray-700 hover:bg-gray-50 shadow-sm"
          >
            {value === 'all' ? 'All Languages' : languages.find((language) => language.value === value)?.label}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 text-gray-400" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[180px] p-0 bg-white border border-gray-200 shadow-md">
          <Command>
            <CommandInput placeholder="Search languages..." className="border-b border-gray-100" />
            <CommandList>
              <CommandEmpty>No languages found</CommandEmpty>
              <CommandGroup>
                {languages.map((language) => (
                  <CommandItem
                    key={language.value}
                    value={language.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? 'all' : currentValue);
                      setOpen(false);
                    }}
                    className={cn(
                      'cursor-pointer hover:bg-gray-50',
                      value === language.value ? 'bg-blue-50 text-brandPrimary' : '',
                    )}
                  >
                    <Check
                      className={cn('mr-2 h-4 w-4', value === language.value ? 'opacity-100 text-brandPrimary' : 'opacity-0')} />
                    {language.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}