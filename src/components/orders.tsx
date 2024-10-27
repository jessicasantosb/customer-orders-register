import axios from 'axios';

import { FilterDropdown, Input, OrdersTable, Pagination } from '@/components';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { SearchParams } from '@/lib/types';

export async function Orders({ searchParams }: SearchParams) {
  const response = await axios.get(
    'https://apis.codante.io/api/orders-api/orders',
    {
      params: {
        search: searchParams?.q,
        status: searchParams?.status,
        sort: searchParams?.sort
      },
    },
  );

  const orders = response.data.data;

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
        <OrdersTable orders={orders} />
        <Pagination />
      </CardContent>
    </Card>
  );
}
