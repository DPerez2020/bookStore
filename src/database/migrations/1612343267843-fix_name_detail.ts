import {MigrationInterface, QueryRunner} from "typeorm";

export class fixNameDetail1612343267843 implements MigrationInterface {
    name = 'fixNameDetail1612343267843'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_details" ALTER COLUMN "name" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "users_details"."name" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users_details" ALTER COLUMN "status" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "users_details"."status" IS NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "users_details"."status" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users_details" ALTER COLUMN "status" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "users_details"."name" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users_details" ALTER COLUMN "name" SET NOT NULL`);
    }

}
