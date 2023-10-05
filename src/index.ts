import express, { Request, Response } from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { userRoutes } from "./routes/user.routes";
import { factoryRoutes } from "./routes/factory.routes";
import { batteryRoutes } from "./routes/battery.routes";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT;

app.use("/users", userRoutes());
app.use("/factory", factoryRoutes());
app.use("/battery", batteryRoutes());

app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});

app.get("/", (req: Request, res: Response) => {
  return res.status(200).send({
    ok: true,
    message: "API- Rápido MS",
  });
});