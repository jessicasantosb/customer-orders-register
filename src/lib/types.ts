export type OrderProps = {
  id: number;
  customer_name: string;
  customer_email: string;
  order_date: Date;
  amount_in_cents: number;
  status: string;
  created_at: Date;
  updated_at: Date;
};

export type OrdersTableProps = {
  orders: OrderProps[];
};

export type SearchParams = {
  searchParams?: { q?: string; status?: string; sort?: string; page?: number };
};

export type DirectionKey = 'order_date' | 'amount_in_cents';

export type Links = {
  id: number;
  url: string;
  label: string;
  active: boolean;
}[];

export type PaginationProps = {
  links: Links;
};
