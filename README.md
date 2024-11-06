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
├── .vscode/
│   ├── extensions.json
│   └── settings.json
├── client-side/
│   ├── node_modules/
│   ├── public/
│   │   ├── colors/
│   │   │   └── colors.png
│   │   ├── fonts/
│   │   │   ├── bungee/
│   │   │   └── source_sans_3/
│   │   ├── images/
│   │   │   ├── animals/
│   │   │   ├── back-cards/
│   │   │   ├── heros/
│   │   │   ├── monuments/
│   │   │   └── svg/
│   │   └── sounds/
│   ├── src/
│   │   ├── components/
│   │   │   ├── buttons/
│   │   │   │   ├── LinkBtn.jsx
│   │   │   │   └── RestartBtn.jsx
│   │   │   ├── Confetti.jsx
│   │   │   ├── FormField.jsx
│   │   │   ├── PasswordChecklist.jsx
│   │   │   ├── ThemesBackgrdMusic.jsx
│   │   │   └── useChronoBackgdMusic.jsx
│   │   ├── context/
│   │   │   ├── Counter.jsx
│   │   │   ├── CounterContextProvider.jsx
│   │   │   ├── SessionContextProvider.jsx
│   │   │   └── useCounter.jsx
│   │   ├── pages/
│   │   │   ├── admin/
│   │   │   │   └── AdminPage.jsx
│   │   │   ├── games/
│   │   │   │   ├── challenge-mode/
│   │   │   │   │   ├── ChallengeModeGame.jsx
│   │   │   │   │   ├── ChallengeMsgPopup.jsx
│   │   │   │   │   └── ResponseChallengePopup.jsx
│   │   │   │   ├── chrono-mode/
│   │   │   │   │   ├── ChooseChronoForm.jsx
│   │   │   │   │   ├── Chrono.jsx
│   │   │   │   │   ├── ChronoCard.jsx
│   │   │   │   │   ├── ChronoDisplay.jsx
│   │   │   │   │   └── ChronoModeGame.jsx
│   │   │   │   ├── test-mode/
│   │   │   │   │   ├── Card.jsx
│   │   │   │   │   ├── ChooseNbrCardForm.jsx
│   │   │   │   │   ├── ChooseNbrDisplay.jsx
│   │   │   │   │   └── TestModeGame.jsx
│   │   │   │   ├── themes-mode/
│   │   │   │   │   ├── ChooseThemeForm.jsx
│   │   │   │   │   ├── ThemesCard.jsx
│   │   │   │   │   ├── ThemesDisplay.jsx
│   │   │   │   │   └── ThemeModeGame.jsx
│   │   │   │   └── EndGameAlert.jsx
│   │   │   ├── layout/
│   │   │   │   ├── Footer.jsx
│   │   │   │   ├── Layout.jsx
│   │   │   │   ├── LoadingAnim.jsx
│   │   │   │   └── ProfileCard.jsx
│   │   │   ├── users/
│   │   │   │   ├── HomePage.jsx
│   │   │   │   ├── LoginPage.jsx
│   │   │   │   ├── ProfilePage.jsx
│   │   │   │   ├── RankPage.jsx
│   │   │   │   └── RegisterPage.jsx
│   │   ├── sass/
│   │   │   ├── bases/
│   │   │   │   ├── _normalize.scss
│   │   │   │   └── _typography.scss
│   │   │   ├── components/
│   │   │   │   ├── _button.scss
│   │   │   │   ├── _cards.scss
│   │   │   │   ├── _chooseNbrCardForm.scss
│   │   │   │   └── _confetti.scss
│   │   │   ├── layout/
│   │   │   │   ├── _header.scss
│   │   │   │   ├── _loadingAnim.scss
│   │   │   │   └── _main.scss
│   │   │   ├── pages/
│   │   │   │   ├── _adminPage.scss
│   │   │   │   ├── _games.scss
│   │   │   │   ├── _homePage.scss
│   │   │   │   ├── _rankPage.scss
│   │   │   │   └── _registerPage.scss
│   │   │   ├── utils/
│   │   │   │   ├── _mixins.scss
│   │   │   │   └── _variables.scss
│   │   │   └── sass.md
│   ├── App.jsx
│   ├── index.scss
│   └── main.jsx
└── .env
└── .eslintrc.cjs
└── index.html
└── package-lock.json
└── package.json
└── README.md
└── vite.config.js
└── server-side/
│   ├── config/
│   │   ├── db.config.js
│   │   ├── images.config.js
│   │   └── session.config.js
│   ├── controllers/
│   │   ├── admin.controller.js
│   │   ├── game.controller.js
│   │   ├── home.controller.js
│   │   ├── seed.controller.js
│   │   ├── theme.controller.js
│   │   └── user.controller.js
│   ├── middlewares/
│   │   ├── admin.middleware.js
│   │   └── auth.middleware.js
│   ├── models/
│   │   ├── Admin.model.js
│   │   ├── Game.model.js
│   │   ├── project.sql
│   │   ├── Query.model.js
│   │   ├── Seed.model.js
│   │   ├── Theme.model.js
│   │   └── User.model.js
│   ├── node_modules/
│   ├── public/
│   │   └── images/
│   ├── router/
│   │   ├── admin.routes.js
│   │   ├── auth.routes.js
│   │   ├── game.routes.js
│   │   └── index.routes.js
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

## Connection Admin

- Admin page : http://localhost:3000/admin
  nom d'utilisateur : admin
  mot de passe : Admin1991!
