const express=require("express")

const app=express()

app.listen(5000,()=>{
    console.log("displaying the content of the index.html file.")

})


app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/index.html")
})