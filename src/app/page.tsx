import { Orders } from '@/components';
import { SearchParams } from '@/lib/types';

export default function Home({ searchParams }: SearchParams) {
  return (
    <main className='container px-1 py-10 md:p-10'>
      <Orders searchParams={searchParams} />
    </main>
  );
}
