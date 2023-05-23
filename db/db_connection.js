import {  MongoClient } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017/userdata");
client.connect()
.then(()=> console.log('connection succefully'))
.catch((err)=> console.log("connection Failed" ,err))


export default client ;