import http from 'http'
const surver = http.createServer((req,res)=>{
  res.end("you requested for something")
});
const port = 3000;

surver.listen(port,()=>{
  `surver running on ${port}`
})