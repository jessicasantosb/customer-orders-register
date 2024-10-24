import { Filter } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export function FilterDropdown() {
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

        <DropdownMenuRadioGroup>
          <DropdownMenuRadioItem value='all'>All</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='pending'>Pending</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='completed'>
            Completed
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
