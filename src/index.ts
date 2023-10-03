import express, { Request, Response } from "express";
import cors from "cors";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();


app.use(express.json());
app.use(cors());

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});

app.get('/', (req:Request, res:Response)=>{
    return res.status(200).send({
        ok:true, 
        message:"API- Rápido MS"
    })
})