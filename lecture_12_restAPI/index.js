import express from 'express'
import path from 'path'
import { fileURLToPath } from "url"

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine", "ejs");

app.set("views" ,path.join(__dirname,"views"));

let posts = [
  {
    username : "apnaCollege",
    content : "I love coding"
  },
  {
    username : "Bikram Pal",
    content : "I love writing"
  },
  {
    username : "Sayan",
    content : "I love reading"
  },
]
app.get("/posts",(req,res)=>{
  res.render("index",{posts});
})
app.get('/',(req,res)=>{
  res.send("hello");
})
app.get("/posts/new",(req,res)=>{

  res.render("new");
})

app.post("/posts", (req, res) => {
  const { username, content } = req.body;
  posts.push({ username, content });
  res.redirect("/posts");
});


const port = 3000;
app.listen(port,()=>console.log(`app is running on ${port}`));