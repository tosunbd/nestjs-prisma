import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Book } from './book.model';

@Injectable()
export class BookService {
    constructor(private prismaService: PrismaService) {}

    // Create a new book
    async createBook(bookData: { title: string; description?: string }): Promise<Book> {
        const book = await this.prismaService.book.create({
            data: bookData,
        });
        return book;
    }

    // Retrieve a single book by ID
    async getBookById(bookId: number): Promise<Book | null> {
        const book = await this.prismaService.book.findUnique({
            where: { id: bookId },
        });
        return book;
    }

    // Retrieve all books
    async getAllBooks(): Promise<Book[]> {
        const books = await this.prismaService.book.findMany();
        return books;
    }

    // Update a book
    async updateBook(bookId: number, bookData: { title?: string; description?: string }): Promise<Book> {
        const book = await this.prismaService.book.update({
            where: { id: bookId },
            data: bookData,
        });
        return book;
    }

    // Delete a book
    async deleteBook(bookId: number): Promise<Book> {
        const book = await this.prismaService.book.delete({
            where: { id: bookId },
        });
        return book;
    }
}
