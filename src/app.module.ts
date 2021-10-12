import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'motty.db.elephantsql.com',
      password: 'oTYpXXi_4NERIzW3Io2maWvKWmMdfsvd',
      username: 'mvnpimxw',
      database: 'mvnpimxw',
      port: 5432,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false,
      retryDelay: 5000,
      retryAttempts: 10,
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
