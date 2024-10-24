import {
  Pagination as PaginationComponent,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from './ui/pagination';

export function Pagination() {
  return (
    <PaginationComponent>
      <PaginationContent className='[&>*]:hidden [&>*]:md:inline-flex'>
        <PaginationItem>
          <PaginationPrevious />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink isActive={true}>1</PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationLink>2</PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationLink>3</PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink>8</PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationLink>9</PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationLink>10</PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationNext />
        </PaginationItem>
      </PaginationContent>
    </PaginationComponent>
  );
}
