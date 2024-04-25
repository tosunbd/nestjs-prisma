import { Controller, Get, Post, Body, Param, Delete, Put, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { BookService } from './book.service';

@Controller('books')
export class BookController {
    constructor(private bookService: BookService) {}

    @Post()
    async create(@Req() req: Request, @Res() res: Response, @Body() bookData: { title: string; description?: string }) {
        const result = await this.bookService.createBook(bookData);
        return res.status(201).json({
            status: "ok",
            message: "Successfully created the book",
            result: result
        });
    }

    @Get(':id')
    async findOne(@Req() req: Request, @Res() res: Response, @Param('id') id: number) {
        const result = await this.bookService.getBookById(id);
        if (result) {
            return res.status(200).json({
                status: "ok",
                message: "Successfully fetched the book",
                result: result
            });
        } else {
            return res.status(404).json({
                status: "error",
                message: "Book not found"
            });
        }
    }

    @Get()
    async findAll(@Req() req: Request, @Res() res: Response) {
        const result = await this.bookService.getAllBooks();
        return res.status(200).json({
            status: "ok",
            message: "Successfully fetched all books",
            result: result
        });
    }

    @Put(':id')
    async update(@Req() req: Request, @Res() res: Response, @Param('id') id: number, @Body() bookData: { title?: string; description?: string }) {
        const result = await this.bookService.updateBook(id, bookData);
        return res.status(200).json({
            status: "ok",
            message: "Successfully updated the book",
            result: result
        });
    }

    @Delete(':id')
    async remove(@Req() req: Request, @Res() res: Response, @Param('id') id: number) {
        const result = await this.bookService.deleteBook(id);
        return res.status(200).json({
            status: "ok",
            message: "Successfully deleted the book",
            result: result
        });
    }
}
