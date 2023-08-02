---
title: Create NestJS with Prisma
date: '2023-08-02'
---

1. Create your NestJS project: End NestJS CLI-iig hamt suulgaj baina.

`$npm install -g @nestjs/cli`

`$nest new hello-prisma` 

2. Setup Prisma:
    Start by installing the Prisma CLI as a development dependency in your project:

`$cd hello-prisma`
`$npm install prisma --save-dev`

In the following steps, we'll be utilizing the Prisma CLI. As a best practice, it's recommended to invoke the CLI locally by prefixing it with npx (Doorh command ni Prisma CLI-iig ehluulj bna.):

`$npx prisma`
Now create your initial Prisma setup using the init command of the Prisma CLI:

`$npx prisma init`

This command creates a new prisma directory with the following contents:
* schema.prisma: Specifies your database connection and contains the database schema
* .env: A dotenv file, typically used to store your database credentials in a group of environment variables

3. Install and generate Prisma Client
Prisma Client is a type-safe database client that's generated from your Prisma model definition. Because of this approach, Prisma Client can expose CRUD operations that are tailored specifically to your models.
To install Prisma Client in your project, run the following command in your terminal:

`$ npm install @prisma/client`

Note that during installation, Prisma automatically invokes the prisma generate command for you. In the future, you need to run this command after every change to your Prisma models to update your generated Prisma Client.


4. Use Prisma Client in your NestJS services

prisma.service.ts deer PrismaClient-aasaa PrismaService-iig db-tei holbogdohiin tuld uusgej bna.


Next, you can write services that you can use to make database calls for the User and Post models from your Prisma schema.


Service gedeg bol application-iin business logic-uud.

Your UserService and PostService currently wrap the CRUD queries that are available in Prisma Client. In a real world application, the service would also be the place to add business logic to your application. For example, you could have a method called updatePassword inside the UserService that would be responsible for updating the password of a user.


5. Implement your REST API routes in the main app controller

DB-ruu Dummy ogogdol hiih:

package.json deer daraah code-iig nemne.

```"prisma": {
"seed": "ts-node prisma/seed.ts"
},```

Daraah 3 dependicy baih estoi.

`npm install -D typescript ts-node @types/node``


seed.ts deer daraah code baina.



```import { PrismaClient } from '@prisma/client'
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
date:'2019-01-01T00:00:00.000Z',
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
date:'2020-01-01T00:00:00.000Z',
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
})```

Deerh datag DB-ruu hiih command:
`npx prisma db seed`








	






