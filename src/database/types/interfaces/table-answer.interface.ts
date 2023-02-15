import { Table } from '../enums/table.enum';

export interface TableAnswer {
  query?: string;
  target?: {
    table: Table;
    columns: string[];
  };
}
