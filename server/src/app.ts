import cors from "cors"
import  Express  from "express";
import { router } from "./router";

const app = Express();

app.use(Express.json());

app.use(cors({origin: true}))

app.use(router)

app.listen(3001, () => {
    console.log("server on port 3001...")
})