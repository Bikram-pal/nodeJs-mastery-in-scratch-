import express from 'express'
const app = express()

app.get('/',(req,res)=>{
  res.send("home page");
})

const port = 3000;
app.listen(port,()=>{console.log(`server is running in ${port}`);
})