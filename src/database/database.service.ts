import { Injectable } from '@nestjs/common';
import { DataSource, DeleteResult, EntityMetadata } from 'typeorm';
import { Table } from './types/enums/table.enum';

@Injectable()
export class DatabaseService {
  constructor(private readonly dataSource: DataSource) {}
  async clearNullRows(table: Table, columns: string[]): Promise<DeleteResult> {
    const tableEntityMetadata = this.dataSource.entityMetadatas.find((entity: EntityMetadata) => entity.name === table);

    const tableEntity = tableEntityMetadata.target;

    if (!tableEntity) {
      throw new Error(`Entity ${table} not found`);
    }

    const queryBuilder = this.dataSource.getRepository(table).createQueryBuilder().delete().from(tableEntity);

    /* With clearNullRows query, the columns length should be positive. */
    queryBuilder.where(`${table}.${columns.at(0)} = null`);

    for (let i = 1; i < columns.length; i++) {
      queryBuilder.andWhere(`${table}.${columns.at(i)} = null`);
    }

    const result = await queryBuilder.execute();
    return result;
  }
}
