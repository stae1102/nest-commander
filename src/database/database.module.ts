import { Module } from '@nestjs/common';
import { DatabaseCommander } from './database.command';
import { QueryQuestions } from './questions/query.question';
import { TableQuestions } from './questions/table.question';

@Module({
  providers: [DatabaseCommander, TableQuestions, QueryQuestions],
})
export class DatabaseModule {}
