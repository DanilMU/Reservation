import { Controller, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';

@Controller('api/bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Post('reserve')
  @UsePipes(new ValidationPipe({ transform: true }))
  async reserve(@Body() dto: CreateBookingDto) {
    return this.bookingsService.reserve(dto);
  }
}