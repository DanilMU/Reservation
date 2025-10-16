import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module'; // Путь зависит от вашей структуры
import { BookingsController } from './bookings.controller';
import { BookingsService } from './bookings.service';

@Module({
  imports: [PrismaModule],
  controllers: [BookingsController],
  providers: [BookingsService],
})
export class BookingsModule {}