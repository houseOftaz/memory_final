import { createRequire } from "module";
import session from "express-session";
import connection from "../config/db.config.js";

const require = createRequire(import.meta.url);
const MySQLStore = require("express-mysql-session")(session);

export const sessionConfig = session({
  name: "session_id",
  secret: "process.env.APP_SECRET",
  resave: false,
  saveUninitialized: false,
  store: new MySQLStore(
    {
      clearExpired: true,
      checkExpirationInterval: 900000, // 15 minutes
      expiration: 1000 * 60 * 60 * 24 * 7,
    },
    connection
  ),
  cookie: {
    secure: false,
    httpOnly: true,
    sameSite: "lax",
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
  rolling: true,
});
