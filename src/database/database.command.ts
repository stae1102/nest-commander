import { Command, CommandRunner, InquirerService, Option } from 'nest-commander';
import { Table } from './types/enums/table.enum';
import { QueryAnswer } from './types/interfaces/query-answer.interface';
import { TableAnswer } from './types/interfaces/table-answer.interface';

@Command({
  name: 'db-control',
  arguments: '[database]',
  options: { isDefault: true },
})
export class DatabaseCommander extends CommandRunner {
  constructor(private readonly inquirer: InquirerService) {
    super();
  }

  async run(passedParams: string[], options?: Record<string, any>): Promise<void> {
    /* If there was not option value, ask which query to execute */
    if (!options.query) {
      options.query = (await this.inquirer.ask<QueryAnswer>('select-query', options)).query;
    }

    /* first value of inputs */
    let table: Table = passedParams[0] as Table;
    let columns: string[] = [];

    /* If there were not inputs, ask which database to choose */
    if (!table) {
      const target = (await this.inquirer.ask<TableAnswer>('select-table', undefined)).target;
      table = target.table;
      columns = target.columns;
    }

    let result: any;

    switch (options.query) {
      case 'INSERT':
        break;
      case 'SELECT':
        break;
      case 'UPDATE':
        break;
      case 'DELETE':
        break;
      case 'CLEAR NULL ROWS':
    }
  }

  @Option({
    name: 'query',
    flags: '-q, --query [query]',
    description: 'A query which user wants to execute',
  })
  parseQuery(query: string) {
    return query;
  }
}
