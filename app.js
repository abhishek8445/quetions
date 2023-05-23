import express from "express"
import router from "./router/route.js";
const PORT = process.env.PORT|| 10001 ; 
const app = express();
app.use(express.json())

app.use(router)


app.listen(PORT , ( )=>{
    console.log(`http://localhost:${PORT}`);
})