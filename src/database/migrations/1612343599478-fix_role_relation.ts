import {MigrationInterface, QueryRunner} from "typeorm";

export class fixRoleRelation1612343599478 implements MigrationInterface {
    name = 'fixRoleRelation1612343599478'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_role" ("rolesId" integer NOT NULL, "usersId" integer NOT NULL, CONSTRAINT "PK_80c0fdeadb39af251fead9a275f" PRIMARY KEY ("rolesId", "usersId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_5d19ca4692b21d67f692bb837d" ON "user_role" ("rolesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_0d65428bf51c2ce567216427d4" ON "user_role" ("usersId") `);
        await queryRunner.query(`ALTER TABLE "user_role" ADD CONSTRAINT "FK_5d19ca4692b21d67f692bb837df" FOREIGN KEY ("rolesId") REFERENCES "Roles"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_role" ADD CONSTRAINT "FK_0d65428bf51c2ce567216427d46" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_role" DROP CONSTRAINT "FK_0d65428bf51c2ce567216427d46"`);
        await queryRunner.query(`ALTER TABLE "user_role" DROP CONSTRAINT "FK_5d19ca4692b21d67f692bb837df"`);
        await queryRunner.query(`DROP INDEX "IDX_0d65428bf51c2ce567216427d4"`);
        await queryRunner.query(`DROP INDEX "IDX_5d19ca4692b21d67f692bb837d"`);
        await queryRunner.query(`DROP TABLE "user_role"`);
    }

}
