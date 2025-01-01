import express from "express";
import userController from "./userController/userController";
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));
app.use("/user", userController);

export default app;
