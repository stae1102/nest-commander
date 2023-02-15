import { Table } from '../enums/tables.enum';

export interface QueryTarget {
  query?: string;
  target?: {
    table: Table;
    columns: string[];
  };
}
