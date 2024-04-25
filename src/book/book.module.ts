import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service'; // Importing PrismaService
import { BookService } from './book.service';
import { BookController } from './book.controller';

@Module({
  imports: [],
  controllers: [BookController], // Register BookController if it exists
  providers: [BookService, PrismaService], // Register BookService and PrismaService
})
export class BookModule {}
