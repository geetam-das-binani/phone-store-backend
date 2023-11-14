import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { connect } from "./connection/database.mjs";
import { router } from "./routes/routes.mjs";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
app.use(cors());
app.use(express.json());

dotenv.config({ path: path.join(__dirname, "./config/config.env") });
const PORT=process.env.PORT || 3001
connect(process.env.NAME, process.env.PASSWORD);
app.use("/", router);

app.listen(PORT, () =>
  console.log(`Server started on port ${process.env.PORT}`)
);
