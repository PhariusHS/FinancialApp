import mongoose from "mongoose";

const spentSchema = new mongoose.Schema(

    {
        name:{
            type: String,
            required: true,
            default: ''
        },
        price:{
            type: Number,
            required: true
        },
        type: {
            type: String,
            required: true,
            default: ''
        },
        description:{
            type: String,
            required: false,
            default: '-'
        },
        necessary:{
            type: Boolean,
            required: false,
            default: undefined
        },
        date:{
            type: Date,
            default: Date.now
        }
    }
)


export default mongoose.model("spent", spentSchema)