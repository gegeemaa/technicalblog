---
title: Deploy NextJS in Firebase
date: '2023-07-26'
---

1. Firebase account uusgene.
2. Firebase deer shine project uusgene.
3. Firebase CLI tool-iig suulgana.
`npm install -g firebase-tools`
4. Firebase account-ruugaa login hiij orno.
`firebase login`
5. Projectruugaa ochood, firebase-ee ehluulne.
`firebase init`
6. Firebase hosting-iig songoh, build folder-iig zaaj ogno. Manai tohioldold **out**-iig build folder-oor songoj ogno.

<img src="/deployNextInFirebase/image1.jpg">

7. Package-uudaa `npm install` hiine.

8. package.json deer build script-ee doorhoor update hiigeed, `npm run build` (manai tohioldold: `npx next build`) command-iig ajilluulna.
    
    `“build”: “next build && next export”,` 

9. `run firebase deploy — only hosting`-iig ajilluulna.
