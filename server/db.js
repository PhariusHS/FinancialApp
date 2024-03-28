import mongoose from 'mongoose'
import {dbConfig} from './config/database.config.js'


export const connectDB = async () =>{
    try{
        await mongoose.connect(dbConfig.url)
        console.log(">>>>>>> DB connected")
    } catch(error) {
        console.log("Error al conectar la base de datos", error)
    }
}
