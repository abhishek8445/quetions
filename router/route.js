import express from "express";
import client from "../db/db_connection.js";
import md5 from "md5";


const router = express.Router();

router.post('/register', async (req, res) => {
  const {firstname, lastName, email, password} = req.body;
 const hashpas = md5(password)
  const getData1 = {
    firstname: firstname,
    lastName: lastName,
    mail:email,
    pwd:hashpas
  };
  try {
    const data = await client.db("students").collection("users").insertOne(getData1);
    console.log(data)
    res.json({ message: "data sent successfully", user_id: data.insertedId });
  }
  catch (err) {
    res.json({ status: false, error: err, message: "data send successfully" })
  }
})

router.post('/userDetails', async (req, res) => {
  const userDetails = {
    user_id: req.body.user_id,
    mobile_no: req.body.mob,
    dob: req.body.dob
  }
  try {
    const data = await client.db("students").collection("users_profile").insertOne(userDetails)
    res.json({
      status: true,
      message: "data send successfully"
    })
  }
  catch (err) {
    res.json({ status: false, error: err, message: "get data failed ===>" })
  }




})

export default router