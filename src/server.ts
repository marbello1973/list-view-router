import "dotenv/config";
import express from "express";
import server from "./router/router";
const { PORT } = process.env;
const app = express();

app.use(express.json());

app.use("/", server);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
