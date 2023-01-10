import "dotenv/config";
import express from "express";
const app: express.Application = express();

app.use(express.text());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", require("./app/route"));

app.listen(process.env.APP_PORT, () => {
  console.log("server running http://localhost:" + process.env.APP_PORT);
});
