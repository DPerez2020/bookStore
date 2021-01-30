import { UserRepository } from './user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
    imports:[TypeOrmModule.forFeature([UserRepository])]
})
export class UserModule {}
