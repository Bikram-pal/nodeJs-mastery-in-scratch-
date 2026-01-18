import http from 'http'
const surver = http.createServer((req,res)=>{
  if(req.url==='/home')
  res.end("<h1>hello home page</h1>")
  else
  {
    res.end("<h1>surver not reach</h1>") 
  }
});

const port = 3000;
surver.listen(port,()=>{
console.log(`surver running on ${port}`);

})