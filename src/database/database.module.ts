import { Module } from '@nestjs/common';
import { DatabaseCommander } from './database.command';
import { DatabaseService } from './database.service';
import { QueryQuestions } from './questions/query.question';
import { TableQuestions } from './questions/table.question';

@Module({
  providers: [
    /* Main Commander that guides which command has to be executed */
    DatabaseCommander,

    /* Question Layer */
    TableQuestions,
    QueryQuestions,

    /* Main Service that execute queries */
    DatabaseService,
  ],
})
export class DatabaseModule {}
