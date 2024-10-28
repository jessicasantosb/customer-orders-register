'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import {
  Pagination as PaginationComponent,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { PaginationProps } from '@/lib/types';

export function Pagination({ links }: PaginationProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handlePagination = (page: number) => {
    const params = new URLSearchParams(searchParams);

    if (page > 1) {
      params.set('page', page.toString());
    } else {
      params.delete('page');
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <PaginationComponent>
      <PaginationContent className='[&>*]:hidden [&>*]:md:inline-flex'>
        <PaginationItem>
          <PaginationPrevious />
        </PaginationItem>

        {links.map(({ label, active, id }) => {
          if (label.includes('Anterior') || label.includes('Próximo'))
            return null;

          if (label === '...') {
            return (
              <PaginationItem key={id}>
                <PaginationEllipsis />
              </PaginationItem>
            );
          }

          return (
            <PaginationItem key={id}>
              <PaginationLink
                isActive={active}
                onClick={() => handlePagination(Number(label))}>
                {label}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        <PaginationItem>
          <PaginationNext />
        </PaginationItem>
      </PaginationContent>
    </PaginationComponent>
  );
}
