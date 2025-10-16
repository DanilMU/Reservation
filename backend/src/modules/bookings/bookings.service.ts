import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateBookingDto } from './dto/create-booking.dto';

@Injectable()
export class BookingsService {
  constructor(private prisma: PrismaService) {}

  async reserve(dto: CreateBookingDto) {
    const { event_id, user_id } = dto;

    return this.prisma.$transaction(async (tx) => {
      // 1. Найти событие
      const event = await tx.event.findUnique({
        where: { id: event_id },
      });

      if (!event) {
        throw new NotFoundException(`Событие с ID ${event_id} не найдено.`);
      }

      // 2. Проверить наличие свободных мест
      if (event.booked_seats >= event.total_seats) {
        throw new ConflictException('Свободных мест на это событие больше нет.');
      }

      // 3. Проверить, не бронировал ли пользователь это событие ранее
      const existingBooking = await tx.booking.findUnique({
        where: {
          event_id_user_id: {
            event_id,
            user_id,
          },
        },
      });

      if (existingBooking) {
        throw new ConflictException(
          `Вы уже забронировали место на это событие.`,
        );
      }

      // 4. Создать бронирование и обновить счетчик мест
      await tx.event.update({
        where: { id: event_id },
        data: { booked_seats: { increment: 1 } },
      });

      const newBooking = await tx.booking.create({
        data: {
          event_id,
          user_id,
        },
      });

      return {
        success: true,
        message: 'Бронирование прошло успешно.',
        data: newBooking,
      };
    });
  }
}