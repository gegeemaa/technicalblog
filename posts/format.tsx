import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


async function main() {
    // create two dummy users
    const user1 = await prisma.user.upsert({
        where: { email: 'sabin@adams.com' },
        update: {},
        create: {
            email: 'sabin@adams.com',
            name: 'Sabin Adams',
        },
    });
    const user2 = await prisma.user.upsert({
        where: { email: 'alex@ruheni.com' },
        update: {},
        create: {
            email: 'alex@ruheni.com',
            name: 'Alex Ruheni',
        },
    });
    // create three dummy timeregister
    const timeregister1 = await prisma.timeregister.upsert({
        where: { id: 1 },
        update: {
            userId: user1.id,
        },
        create: {
            period: 3,
            date: '2019-01-01T00:00:00.000Z',
            description: 'Prisma Adds Support for MongoDB',
            userId: user1.id,
        },
    });
    const timeregister2 = await prisma.timeregister.upsert({
        where: { id: 2 },
        update: {
            userId: user2.id,
        },
        create: {
            period: 4,
            date: '2020-01-01T00:00:00.000Z',
            description: 'What new in Prisma? (Q1/22)',
            userId: user2.id,
        },
    });
    console.log({ user1, user2, timeregister1, timeregister2 });
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })