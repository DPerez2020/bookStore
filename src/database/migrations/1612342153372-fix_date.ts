import {MigrationInterface, QueryRunner} from "typeorm";

export class fixDate1612342153372 implements MigrationInterface {
    name = 'fixDate1612342153372'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "users_details"."created_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users_details" ALTER COLUMN "created_at" SET DEFAULT now()`);
        await queryRunner.query(`COMMENT ON COLUMN "users_details"."update_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users_details" ALTER COLUMN "update_at" SET DEFAULT now()`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."created_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT now()`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."update_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "update_at" SET DEFAULT now()`);
        await queryRunner.query(`COMMENT ON COLUMN "Roles"."created_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "Roles" ALTER COLUMN "created_at" SET DEFAULT now()`);
        await queryRunner.query(`COMMENT ON COLUMN "Roles"."update_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "Roles" ALTER COLUMN "update_at" SET DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Roles" ALTER COLUMN "update_at" DROP DEFAULT`);
        await queryRunner.query(`COMMENT ON COLUMN "Roles"."update_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "Roles" ALTER COLUMN "created_at" DROP DEFAULT`);
        await queryRunner.query(`COMMENT ON COLUMN "Roles"."created_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "update_at" DROP DEFAULT`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."update_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" DROP DEFAULT`);
        await queryRunner.query(`COMMENT ON COLUMN "users"."created_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users_details" ALTER COLUMN "update_at" DROP DEFAULT`);
        await queryRunner.query(`COMMENT ON COLUMN "users_details"."update_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "users_details" ALTER COLUMN "created_at" DROP DEFAULT`);
        await queryRunner.query(`COMMENT ON COLUMN "users_details"."created_at" IS NULL`);
    }

}
