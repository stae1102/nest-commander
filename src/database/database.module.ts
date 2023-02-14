import { Module } from '@nestjs/common';
import { DatabaseCommander } from './database.command';
import { DatabaseQueryInquirer } from './database-query.inquirer';
import { DatabaseInquirer } from './database.inquirer';

@Module({
  providers: [DatabaseCommander, DatabaseInquirer, DatabaseQueryInquirer],
})
export class DBControlModule {}
