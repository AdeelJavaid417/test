import mongoose from "mongoose";

const MenuSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
        required:true,
        enum:['sweet','spicy','sour']
    },
    is_drink:{
        required:true,
        type:Boolean,
        default:false
    },
    ingedients:{
        type:[String],
        default:[]
    }
})

const Menu=mongoose.model('Menu',MenuSchema)
export default Menu