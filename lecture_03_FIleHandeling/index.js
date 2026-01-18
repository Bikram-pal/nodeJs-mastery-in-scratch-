import {readFile, writeFile, appendFile} from 'fs/promises'

// read file
const read_file = async(filename)=>{
  const data = await readFile(filename,'utf-8');
  console.log(data);  
}

read_file('read.txt');

// write file

const create_file = async(filename,content) =>{
  await writeFile(filename, content);
  console.log("Cerate file successfully...!!");
}

create_file('newfile.txt', 'new file create by index.js node ');

// append file 

const append_file = async(filename,content)=>{
  await appendFile(filename, content);
  console.log("added new line successfully...!!");
}

append_file('newfile2.txt', '2nd line added append module');