import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';

export class CatTable implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'cat',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
        },
        {
          name: 'name',
          type: 'varchar',
        },
        {
          name: 'description',
          type: 'text',
        }
      ]
    }), true);

    await queryRunner.createIndex('cat', new TableIndex({
      name: 'IDX_CAT_ID',
      columnNames: ['id'],
    }))
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('cat');
  }
}