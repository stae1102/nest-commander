import { Question, QuestionSet } from 'nest-commander';
import { TABLES } from '../consts/tables.const';
import { BasicDatabaseOptions } from '../types/interfaces/basic-database-options.interface';

@QuestionSet({ name: 'select-table' })
export class TableQuestions {
  @Question({
    message: 'Which table would you like to choose?',
    name: 'target',
    type: 'list',
    choices: TABLES,
  })
  parseDatabase(table: string, options: BasicDatabaseOptions) {
    if (!TABLES.includes(table)) {
      throw new Error(`Table ${table} not found`);
    }

    if (options.query === 'CLEAR NULL ROWS') {
      let columns: string[] = [];
      switch (table) {
        case 'user_info':
          columns = ['height', 'weight', 'age'];
          break;
      }

      return { table, columns };
    }

    return table;
  }
}
