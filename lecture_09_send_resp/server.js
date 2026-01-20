import express from 'express'
import path from 'path'
const app = express();
const products = [
  {file:"iphone-15", price:75000},
  {file: "oneplus-12", price:45000},
  {file: "Google pixel", price:55000}
]

app.get('/',(req,res)=>{
  // res.json({
  //   messege: "fetched all products",
  //   jo_chahe : "dc skte hai",
  //   product: products, 
  // })

  res.sendFile(path.join(path.resolve(),'./index.html'))
});
const port = 3000;

app.listen(port,()=>console.log(`server is running on ${port}`));