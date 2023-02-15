import { QuestionSet, Question } from 'nest-commander';
import { QUERIES } from '../consts/queries.const';

@QuestionSet({ name: 'select-query' })
export class QueryQuestions {
  @Question({
    message: 'Which database query to execute?',
    name: 'query',
    type: 'list',
    choices: QUERIES,
  })
  parseQuery(query: string): string {
    if (!QUERIES.includes(query)) {
      throw new Error('Invalid query');
    }
    return query;
  }
}
