import { ConfigService } from './../config/config.service';
import { ConfigModule } from './../config/config.module';
import { TypeOrmModule } from "@nestjs/typeorm";
// import { ConnectionOptions } from 'TypeOrm';
import { Configuration } from '../config/config.keys';

export const databaseProviders=[
    TypeOrmModule.forRootAsync({
        imports:[ConfigModule],
        inject:[ConfigService],
        async useFactory(config:ConfigService) {
            return {
                ssl:false,
                port:parseInt(config.get(Configuration.DBPORT)),
                type:'postgres' as 'postgres',
                host:config.get(Configuration.HOST),
                username:config.get(Configuration.USERNAME),
                password:config.get(Configuration.PASSWORD),
                entities:[__dirname+'/../**/*.entity{.ts,.js}'],
                migrations:[__dirname+'/migrations/*{.ts,.js}'],
                database:config.get(Configuration.DATABASE)
            }
            //  as ConnectionOptions
        }
    })
]