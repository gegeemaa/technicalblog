---
title: NextJS-iin erhonhii oilgoltuud
date: '2023-07-25'
---

### NextJS gej yu ve?

NextJS ni ondor hurdtai web application buteeh bolomjtoi React framework yum.

**Davuu taluud ni gevel:**
* Pre-rendering ashigladag bolohoor webb-iig achaalah ued agshin zuur garch irne.
* Meta data (`<Link>`, `<meta>`)-gaar SEO-iig shiidej ogson
* Front-end bolon Back-end hesgiig NextJS-eer bichih bolojtoi
* Vercel deer hogjuulsen web site-aa deploy hiih bolomjtoi
* Tohirgoo baga hiideg. 

### Pre-rendering and Data Fetching

Next.js ni javacsript-guigeer HTML-ee ehleed ussgechdeg. Eniig pre-rendering gej baigaa.
Browser deeree JS-ee disable bolgood page-ee refresh hiihed page ajillana. Harin tsever react deer bichsen page bol ajillahgi.

<img src="/nextjs/image1.jpg"/>

Next.js deer 2 torliin pre-render process baidag.


<img src="/nextjs/image2.jpg"/>

Request bolgon deer ih data ni oorchlogddog huudas deer **Server-side rendering**-iig ashiglaval zugeer. Ihenh tohioldold **Static generation**-iig ashiglaval site hurdan bolno.

### Local markdown file-iig unshih project-iin note-uud

Markdown gedg ni text-iig todorhoi formatiin daguu HTML deer haruuldag language yum.
MDX gedeg ni Markdown dotor JSX bichih bolomj olgodog.

`@next/mdx``  package ni local bolon remote mdx file-iig udirdah bolmj olgodog.
Suulgah zaavar ni doorh link deer baigaa.

Ene daguu suulgah neg aldaa garah ba en aldaag zasahad daraah code-iig MDX component-oo oruulj baigaa heseg deeree bichne.

`'use client'`

Remote MDX deer ajillah bol oor neg package ashigladag ba datagaa fetch-eer avna.

<img src="/nextjs/image3.jpg"/>

### Database-aas data haruulah

https://app.supabase.com/ deer **Postgres DB** uusgene.

Uusgesen DB-teigee ajilahdaa Prisma Node.js bolon TypeScript ORM-iig ashiglana.

`npm install prisma@4.8.1`

geed prisma-aa suulgana.

`npx prisma init`

geheer prisma  project-oo ehelluulne.

.env deer DB connection-oo taaruulna

Schema.prisma deer migration hiih table-uudee bichne. Doorh commandaar migration hiine.


`npx prisma db push`


Next js iin huvid data ni Server component deeree baidag yum shig bna.

app directory dotor baigaa buh component ni server component yum bna.

`const prisma = new PrismaClient();`

deerh prisma client instant ni DB-aas Data avah bolomjoor hangadag.


### Seeding our DB

schema.prisma deer DB-ruu hiih datagaa beldeed
seed.ts deer migration hiine.

DB-aas data-gaa avahdaa:

async gedeg ni DB-gees async baidlaar avch baigaa bolohoor ingej bichij bna

```
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

const fetchRestaurants = async () => {
 const restaurants = await prisma.restaurant.findMany()
 return restaurants
}


export default async function Home() {


 const restaurants = await fetchRestaurants();
 console.log({ restaurants })

```
 
end console deer hevlesen restaurants browser deer log ni garahgui orond ni command line deer garch bna uchir ni fetchRestaurants() ni server side component bolohoor.

### NextJS-iig ehluuleh:

`npm run dev`

