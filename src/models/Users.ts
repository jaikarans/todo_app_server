import {Schema, model} from "mongoose";
import bcrypt from 'bcrypt'
import exp from "constants";
const saltRounds = 12;

type UserType  = {
  name: string;
  email: string;
  password: string;
}

const userSchema = new Schema<UserType>({
  name:{
    type: String,
    isrequired: true
  },
  email:{
    type: String,
    isrequired: true
  },
  password:{
    type: String,
    isrequired: true,
    min:8
  }
});

// hash user password before saving into database
userSchema.pre('save', async function(next:any){
  this.password = await bcrypt.hashSync(this.password, saltRounds);
  next();
})


const User = model<UserType>('User', userSchema);
export default User

