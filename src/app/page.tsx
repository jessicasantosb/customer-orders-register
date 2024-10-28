import { Orders } from '@/components';
import { SearchParams } from '@/lib/types';

export default function Home({ searchParams }: SearchParams) {
  return (
    <main className='bg-primary p-4 md:p-8'>
      <Orders searchParams={searchParams} />
    </main>
  );
}
