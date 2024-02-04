import mongoose from "mongoose";



const Connection = async (username,password) =>{

    const URL = `mongodb://${username}:${password}@ac-a0rjlns-shard-00-00.2enj1sw.mongodb.net:27017,ac-a0rjlns-shard-00-01.2enj1sw.mongodb.net:27017,ac-a0rjlns-shard-00-02.2enj1sw.mongodb.net:27017/?ssl=true&replicaSet=atlas-hkfyd7-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL);
        console.log("Database Connected Successfully");
    }
    catch(e){
        console.log(`Error connecting database`,e.message);
    }
} 

export default Connection;