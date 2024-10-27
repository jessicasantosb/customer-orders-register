'use client';

import { Filter } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function FilterDropdown() {
  const [filterStatus, setFilterStatus] = useState('');
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleChange = (option: string) => {
    const params = new URLSearchParams(searchParams);

    if (option) {
      params.set('status', option);
    } else {
      params.delete('status');
    }

    setFilterStatus(option);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'outline'}>
          <Filter size={14} />
          Status
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>Filter by:</DropdownMenuLabel>

        <DropdownMenuSeparator /> 

        <DropdownMenuRadioGroup
          value={filterStatus}
          onValueChange={handleChange}>
          <DropdownMenuRadioItem value=''>All</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='pending'>Pending</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='completed'>
            Completed
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
