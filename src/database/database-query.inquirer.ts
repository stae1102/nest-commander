import { QuestionSet, Question } from 'nest-commander';

@QuestionSet({ name: 'select-query' })
export class DatabaseQueryInquirer {
  @Question({
    message: 'Which database query to execute? (I: Insert, S: Select, U: Update, D: Delete)',
    name: 'query',
    choose: ['Select', 'Update', 'Delete', 'Insert'],
  })
  parseQuery(query: string) {
    return query;
  }
}
