import { FilterDropdown, Input, OrdersTable, Pagination } from '@/components';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function Orders() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Orders</CardTitle>
        <CardDescription>Record your customer orders</CardDescription>
        <div className='pt-4 flex justify-between'>
          <Input />
          <FilterDropdown />
        </div>
      </CardHeader>

      <CardContent className=''>
        <OrdersTable />
        <Pagination />
      </CardContent>
    </Card>
  );
}
