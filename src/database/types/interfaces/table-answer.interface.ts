import { Table } from '../enums/tables.enum';

export interface TableAnswer {
  query?: string;
  target?: {
    table: Table;
    columns: string[];
  };
}
