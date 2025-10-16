import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service'; // Путь зависит от вашей структуры
import { CreateBookingDto } from './dto/create-booking.dto';

@Injectable()
export class BookingsService {
  constructor(private prisma: PrismaService) {}

  async reserve(dto: CreateBookingDto) {
    const { event_id, user_id } = dto;

    // Проверка: существует ли событие?
    const event = await this.prisma.event.findUnique({
      where: { id: event_id },
    });

    if (!event) {
      throw new ConflictException(`Событие с ID ${event_id} не существует.`);
    }

    try {
      const booking = await this.prisma.booking.create({
        data: {
          event_id,
          user_id,
        },
      });

      return {
        success: true,
        message: 'Бронирование прошло успешно.',
        data: booking,
      };
    } catch (error) {
      if (error.code === 'P2002') { 
        throw new ConflictException(
          `Пользователь ${user_id} не может забронировать дважды на событие ${event_id}.`,
        );
      }
      throw error;
    }
  }
}