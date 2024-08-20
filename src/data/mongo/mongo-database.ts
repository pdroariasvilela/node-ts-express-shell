import mongoose from "mongoose"

interface  Options { 
    dbName : string ,
    mongoUrl : string 
}

export class MongoDatabase { 

    static async connect ( options : Options ){

        const {mongoUrl, dbName} = options

        try {
            await mongoose.connect(mongoUrl , {
                dbName : dbName
            });
            console.log("connected")
            return true
        } catch (error) {
            console.log("Mongo connection error")
            throw  error 
        }
    }

}