import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BookingsModule } from './modules/bookings/bookings.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,        
      envFilePath: '.env',   
    }),
    BookingsModule,
  ],
})
export class AppModule {}