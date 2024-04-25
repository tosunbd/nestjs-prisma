import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class Book {
    id: number;
    title: string;
    description?: string;

    constructor(id: number, title: string, description?: string) {
        this.id = id;
        this.title = title;
        this.description = description;
    }

    // Example method to save the book using Prisma
    async save(): Promise<void> {
        await prisma.book.create({
            data: {
                id: this.id,
                title: this.title,
                description: this.description,
            },
        });
    }
}
