'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { SearchInput } from '@/components/ui/input';

export function Input() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams);
    const query = e.currentTarget.value;

    if (query) {
      params.set('q', query);
    } else {
      params.delete('q');
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <SearchInput
      type='search'
      placeholder='search by name'
      onChange={handleChange}
    />
  );
}
