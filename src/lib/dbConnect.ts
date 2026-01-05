
import mongoose from "mongoose";

type ConnectionObject = {   //creating type to store connection status
    isConnected?: number 
}

const connection : ConnectionObject = {}  //global object remember connection status

async function dbConnect(): Promise<void> {

    if(connection.isConnected){
        console.log("Already connected to database");
        return
    }
    try{
       const db =  await mongoose.connect(process.env.MONGODB_URI || '' , {})

        connection.isConnected = db.connections[0].readyState  //bas ek number he ye jo batayega ki connection hua he ya nhi

        console.log("Database connected successfully");
        console.log(db.connections[0])
    }catch(error){
        console.log("Database not connected" , error);
        process.exit(1)
    }
    
}
export default dbConnect;