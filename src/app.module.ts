import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { DomainModule } from './domain/domain.module';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { JWTConfig } from './shared/config/jwt.config';
import { DBConfig } from './shared/config/db.config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ApiModule,
    DomainModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [JWTConfig, DBConfig]
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [DBConfig.KEY],
      useFactory: (mongoConfig: ConfigType<typeof DBConfig>) => ({
        uri: mongoConfig.mongoUrl
      })
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
