import express from 'express'
import path from 'path'
import { fileURLToPath } from "url"
import { v4 as uuidv4 } from 'uuid';


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
    content : "I love coding",
    id: uuidv4() ,
  },
  {
    username : "Bikram Pal",
    content : "I love writing",
    id: uuidv4() ,
  },
  {
    username : "Sayan",
    content : "I love reading",
    id: uuidv4() ,
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
  const id = uuidv4();
  const { username, content } = req.body;
  posts.push({ username, content , id});
  res.redirect("/posts");
});
app.get("/posts/:id", (req, res) => {
  const { id } = req.params;

  const post = posts.find((p) => p.id === id);

  if (!post) {
    return res.status(404).send("Post not found");
  }

  res.render("show", { post });
});

const port = 3000;
app.listen(port,()=>console.log(`app is running on ${port}`));