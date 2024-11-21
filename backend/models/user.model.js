import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please add a name"],
        trim:true
    },
    email:{ 
        type:String,
        required:[true,"Please add a email"],
        unique:true,
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please add a valid email"
        ],
        trim:true,
        lowercase:true
    },
    password:{ 
        type:String,
        required:[true,"Please add a password"],
        minLength:[6,"Password must be up to 6 characters"],
        
    },
    cartitems:[
        {
            product:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Product",
                 
            },
            total:{
                type:Number,
                default:1
            }
        }
    ],
    role:{
        type:String,
        enum:["customer","admin"],
        default:"customer"
    }
},
{
    timestamps:true
})


userSchema.pre("save",async function(next){

    if(!this.isModified("password")) return next();
    try {
        const salt = await bcrypt.genSalt(10);

        this.password= await bcrypt.hash(this.password,salt);
        next()
    } catch (error) {
        next(error)
    }
   
})


userSchema.methods.comparePassword = async function(passowrd){
    return await bcrypt.compare(passowrd,this.password);
}
const User = mongoose.model("User",userSchema);

export default User;