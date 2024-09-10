import express, {NextFunction, Request, Response} from "express"
import cors from "cors"
import morgan from "morgan"
import { apiRoutes } from "./routes/routeManager"

export const app = express()

app.use(express.json())

app.use(cors())
app.use(morgan("tiny"))
app.use(express.urlencoded({ extended: false }));


apiRoutes(app)

app.get("/",(req:Request,res:Response)=>{
    res.send("Me corri correctamente 🥵🥵🥵🥵")
})

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status || 500).json({ message: err.message });
  });