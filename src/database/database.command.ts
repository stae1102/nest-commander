import { Command, CommandRunner, InquirerService, Option } from 'nest-commander';

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
    /* first value of inputs */
    let database = passedParams[0];

    /* If there were not inputs, ask which database to choose */
    if (!database) {
      database = (
        await this.inquirer.ask<{ database: string }>(
          'choose-database',
          /* no options */
          undefined,
        )
      ).database;
    }

    /* If there was not option value, ask which query to execute */
    if (!options.query) {
      options.query = (await this.inquirer.ask<{ query: string }>('choose-query', undefined)).query;
    }

    console.log(options.query);
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
