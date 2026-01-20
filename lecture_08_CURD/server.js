import express from 'express'

const app = express();
// C – Create 
// U – Update
// R – Read
// D – Delete
app.get('/',(req,res)=>{
  res.send(`
    <h1>hello</h1>
    `)
})
const port = 3000;

app.listen(port,()=>console.log(`server is running on ${port}`));