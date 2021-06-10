export interface PaginationProps {
  count?: number;
  pageSize: number;
  setCount: (num: number) => void;
}
