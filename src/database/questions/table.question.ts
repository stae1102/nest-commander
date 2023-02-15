import { Question, QuestionSet } from 'nest-commander';

@QuestionSet({ name: 'select-table' })
export class TableQuestions {
  @Question({
    message: 'Which table would you like to choose?',
    name: 'table',
  })
  parseDatabase(table: string) {
    return table;
  }
}
