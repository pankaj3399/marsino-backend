import express  from "express"
import  dotenv  from "dotenv"
import connectDB from "./config/db.js"
dotenv.config();
const app=express()
import cookieParser from "cookie-parser"

//cookies and filemiddleware
app.use(cookieParser())

//cors
import cors from "cors"
app.use(cors())


// morgan middlewares
import morgan from "morgan"
app.use(morgan("tiny"))

// regular middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// import all routes here
import allRoutes from "./routes/index.js"

// router middleware
app.use("/",allRoutes);


export default app;