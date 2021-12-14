import express from 'express'
import dotenv from 'dotenv'
import connectDB from './services/mongodb/connectDB'
dotenv.config()
import cors from 'cors'
import authRoutes from './routes/authRoutes'
import categoryRoutes from './routes/categoryRoutes'
import productRoutes from './routes/productRoutes'

const app = express()
const port = process.env.PORT || 3003

connectDB()

app.use(cors())
app.use(express.json())
//route to handle auth requests
app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/category", categoryRoutes)
app.use("/api/v1/product", productRoutes)

console.log("hi")
app.get('/',(req,res)=>{
    res.send(`Server listening at PORT ${port} (Deployed from workflow with secret) 13dec`)
})

app.listen(port, (req, res) => {
    console.log(`Server listening at PORT ${port}`)
})