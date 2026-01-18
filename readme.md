# lecture one: intro
* for initilize the file so we use package.json - npm init
---

# lecture 2: module

- manage multiple file using improt and requre to manage it 
1. **require**
```
module.exports = {div}
<!-- whitch one you export -->

<!-- for require that part  -->
const {div} = require('./utils')
```

2. **import**
<br>
first change the type `package.json` and `"type": "module",`
<br>
in the function witch one you export just write `export` previously ex: 
```
export const div = (a,b) => {
  return a+b;
  }
```
and for import the part 
you just import the file and use the module as many as you can

ex:

```
import {div} from './utils.js'
```

write at the top of the file and then use the function witch you write in different file





