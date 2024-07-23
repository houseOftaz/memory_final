
import "dotenv/config";
import express from "express";
import cors from "cors";
 
import router from "./router/index.routes.js";
import { sessionConfig} from "./config/session.config.js";
import protectedRoutes from "./middlewares/auth.middleware.js";


const app = express();
const corsOptions = cors({
    origin: "http://localhost:5173",
    credentials: true,
});
 
app.use(corsOptions);
app.use(sessionConfig);
app.use(express.json());
app.use(express.static("public"));
app.use(protectedRoutes);

app.use(router);
app.listen(process.env.PORT, () => {
    console.log("Server is now running at http://localhost:" + process.env.PORT);
});

