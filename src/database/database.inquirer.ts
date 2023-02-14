import { Question, QuestionSet } from 'nest-commander';

@QuestionSet({ name: 'select-database' })
export class DatabaseInquirer {
  @Question({
    message: 'Which database would you like to choose?',
    name: 'database',
  })
  parseDatabase(database: string) {
    return database;
  }
}
