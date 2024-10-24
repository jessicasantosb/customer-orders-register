import { ChevronsUpDown } from 'lucide-react';
import { Badge } from './ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

export function OrdersTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Clients</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className='flex items-center gap-2'>
            Data
            <ChevronsUpDown size={14} />
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        <TableRow>
          <TableCell>
            <div className='font-medium'>Emily Carter</div>
            <div className='hidden md:inline text-sm text-muted-foreground'>
              emily.carter@example.com
            </div>
          </TableCell>
          <TableCell>
            <Badge variant='outline' className='text-xs'>
              Pending
            </Badge>
          </TableCell>
          <TableCell className='hidden md:table-cell'>2024-10-24</TableCell>
          <TableCell className='text-right'>R$100,00</TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <div className='font-medium'>Jason Miller</div>
            <div className='hidden md:inline  text-sm text-muted-foreground'>
              jason.miller@example.com
            </div>
          </TableCell>
          <TableCell>
            <Badge variant='outline' className='text-xs'>
              Completed
            </Badge>
          </TableCell>
          <TableCell className='hidden md:table-cell'>2023-10-20</TableCell>
          <TableCell className='text-right'>R$500,00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
