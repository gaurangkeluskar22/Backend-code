import 'reflect-metadata'
import express, {Request, Response} from 'express'
import dataSource from './Datasource/dataSource'
import { json } from 'stream/consumers'
import { User } from './entities/User.entity'
const UserRouter = require('./User/user.router')

const app = express()

app.use(express.json())
app.use('/api/user', UserRouter)

dataSource.initialize().then(()=>{
    console.log("Database connected successfully!")
}).catch((err)=>{
    console.log("DataBase error:", err)
})


app.get('/', async (req : Request, res : Response)=>{
    const userRepo = dataSource.getRepository(User)
    res.json(await userRepo.findOneBy({
            id : 4
    }))

})



app.listen(3000, ()=>{
    console.log("App is listening on Port: 3000")
})