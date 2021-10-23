import { Module } from '@nestjs/common';
import { UsersModule } from './app/users/users.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { RoomsModule } from './app/rooms/rooms.module';
import { CategoryRoomsModule } from './app/category-rooms/category-rooms.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.TYPEORM_CONNECTION,
      host: process.env.TYPEORM_HOST,
      port: process.env.TYPEORM_PORT,
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false,
      retryDelay: 5000,
      retryAttempts: 10,
      autoLoadEntities: true,
    } as TypeOrmModuleOptions),
    UsersModule,
    AuthModule,
    RoomsModule,
    CategoryRoomsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
