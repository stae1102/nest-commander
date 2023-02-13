import { Command, CommandRunner } from 'nest-commander';

@Command({
  name: 'my-exec',
  arguments: '<task>',
  options: { isDefault: true },
})
export class TaskRunner extends CommandRunner {
  async run(inputs: string[], options?: Record<string, any>): Promise<void> {
    console.log(inputs);
  }
}
