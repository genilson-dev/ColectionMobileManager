import {PrismaClient} from '@prisma/client';

export const prismaDB = new PrismaClient(
    // log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : []
);