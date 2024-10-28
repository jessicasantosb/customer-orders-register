'use client';

import { ChevronDown, ChevronsUpDown, ChevronUp } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { DirectionKey, OrdersTableProps } from '@/lib/types';
import { formatPrice } from '@/utils/formatPrice';

export function OrdersTable({ orders }: OrdersTableProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleDirection = (key: DirectionKey) => {
    const params = new URLSearchParams(searchParams);

    if (params.get('sort') === key) {
      params.set('sort', `-${key}`);
    } else if (params.get('sort') === `-${key}`) {
      params.delete('sort');
    } else if (key) {
      params.set('sort', key);
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const getSortIcon = (key: DirectionKey) => {
    if (searchParams.get('sort') === key) return <ChevronDown size={14} />;
    if (searchParams.get('sort') === `-${key}`) return <ChevronUp size={14} />;
    return <ChevronsUpDown size={14} />;
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Clients</TableHead>
          <TableHead>Status</TableHead>

          <TableHead
            onClick={() => handleDirection('order_date')}
            className='hidden md:table-cell justify-end items-center gap-1 cursor-pointer'>
            <div className='flex items-center gap-1'>
              Date
              {getSortIcon('order_date')}
            </div>
          </TableHead>

          <TableHead
            onClick={() => handleDirection('amount_in_cents')}
            className='text-right flex justify-end items-center gap-1 cursor-pointer'>
            Total
            {getSortIcon('amount_in_cents')}
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {orders.map(
          ({
            id,
            customer_name,
            customer_email,
            status,
            order_date,
            amount_in_cents,
          }) => {
            return (
              <TableRow key={id}>
                <TableCell>
                  <div className='font-medium'>{customer_name}</div>
                  <div className='hidden md:inline text-sm text-muted-foreground'>
                    {customer_email}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant='outline'
                    className={`text-xs capitalize ${status === 'pending' ? 'bg-red-200' : 'bg-green-200'}`}>
                    {status}
                  </Badge>
                </TableCell>
                <TableCell className='hidden md:table-cell'>
                  {order_date.toString()}
                </TableCell>
                <TableCell className='text-right'>
                  {formatPrice(amount_in_cents)}
                </TableCell>
              </TableRow>
            );
          },
        )}
      </TableBody>
    </Table>
  );
}
