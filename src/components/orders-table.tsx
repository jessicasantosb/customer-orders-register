import { ChevronsUpDown } from 'lucide-react';

import { OrdersTableProps } from '@/lib/types';
import { formatPrice } from '@/utils/formatPrice';
import { Badge } from './ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

export function OrdersTable({ orders }: OrdersTableProps) {
  console.log(orders);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Clients</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className='hidden md:flex items-center gap-2'>
            Data
            <ChevronsUpDown size={14} />
          </TableHead>
          <TableHead className='text-right'>Valor</TableHead>
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
                  <Badge variant='outline' className='text-xs capitalize'>
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
