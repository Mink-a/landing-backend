import express from "express";
import cors from 'cors';
import { db } from "./config/db.config";
import { router } from "./routes/post.routes";

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.use("/api/v1/posts", router);

db.then(() => {
  app.listen(7070, () => console.log("Server is listening on port 7070"));
});

export default app;
