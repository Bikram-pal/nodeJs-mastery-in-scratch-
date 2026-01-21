import express from 'express'
import path from 'path'
const app = express();
app.use(express.static(path.join(path.resolve(),'./public')));

app.use(express.urlencoded({extended:true}));


app.get('/',(req,res)=>{
  res.render('index.ejs');
});
app.post('/submit',(req,res)=>{
  console.log(req.body);//very very impt  
  res.json({message:"your form is submitted",
    success:true,
  })
})
const port = 3000;
app.listen(port,()=>console.log(`server is running on ${port}`)
)