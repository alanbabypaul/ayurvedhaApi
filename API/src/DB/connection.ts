import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const connection_string = process.env.DB_CONNECTION_STRING
if (!connection_string) {
  console.error('DB_CONNECTION_STRING not found in environment variables.');
  process.exit(1);
}

mongoose.connect(connection_string).then((res)=>{
  console.log("Mongo db connected successfully with API_server")
}).catch((err)=>{
  console.log(err)
})