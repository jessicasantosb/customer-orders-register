import { FilterDropdown, Input } from '@/components';
import {
  Card,
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
    </Card>
  );
}
