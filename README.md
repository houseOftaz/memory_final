# MEMORY CARDS game

![logo](https://github.com/houseOftaz/memory_final/assets/148223409/ec692db4-46c7-4284-b417-c9a5c0fbecda)

## Description

This project is a memory card game application to validate my web
developer diploma, where users have to turn over and match identical
cards.
The application is divided into 2 parts :
the fronted (client-side) and the backend (server-side). The backend
uses Node.js with Express and MySql, while the frontend is build with
React and Vite.

## Project Structure

```text
memory_final/
├── client-side/
│   ├── node_modules/
│   ├── public/
│   │   ├── colors/
│   │   ├── fonts/
│   │   ├── images/
│   │   ├── sounds/
│   │   ├── videos/
│   ├── src/
│   │   ├── components/
│   │   │   ├── buttons/
│   │   │   ├── popups/
│   │   ├── context/
│   │   ├── pages/
│   │   │   ├── admin/
│   │   │   ├── games/
│   │   │   ├── layout/
│   │   │   ├── users/
│   │   ├── sass/
│   │   │   ├── bases/
│   │   │   ├── components/
│   │   │   ├── layout/
│   │   │   ├── pages/
│   │   │   ├── utils/
│   ├── .env
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   └── vite.config.js
├── server-side/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── public/
│   ├── routes/
│   ├── views/
│   ├── ...files
└── eslintrc.cjs
└── .gitignore
└── README.md
```

## Prerequisites

**Node.js**
**MySQL**
**npm** (or Yarn)
**JavaScript**
**React**

## Set Up

- how to clone repo ?

```bash
git clone https://github.com/yourID/memory_final.git
```

- install dependencies for back and front:

```bash
npm i
```

- for others dependencies : npm i { look at package.json :wink: }

**npm run dev to launch server**

enjoy :grinning:

## futur udaptes

- verifier les doublons de rendu de requête
