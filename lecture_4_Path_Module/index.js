import path from 'path'
// join two or more file

const fullpath = path.join('/path','index.py')
// console.log("file join = ", fullpath);


// absulute path 

const absulutepath = path.resolve();
// console.log("we are currenly working on = ", absulutepath);

// extention name
const extName = path.extname('resume.pdf');
console.log(`extname = ${extName}`);

if(extName == '.pdf')
{
  console.log("match the extetion file name");
}
else
{
  console.log("not supported!!");
}


