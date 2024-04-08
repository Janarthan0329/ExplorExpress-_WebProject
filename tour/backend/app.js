
const express= require('express');
const app=express();
const cors=require('cors')
const mongoose= require('mongoose')
const port =8080;
const users=require("./routes/users")
const places= require("./routes/places")



app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/tour').then(()=>{
    console.log("mongoose connected ")
}).catch((err)=>{
console.log(err)
})

app.use("/api/users",users)
app.use("/api/places",places)

// app.get("/", (req, res) => {
//     res.json("hi");
//   });

console.log("users")

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})