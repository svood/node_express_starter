## Simple node server starter template

**Use dependencies:** 
`babel,
 express,
 dotenv,
 jest
 `
 
 **Scripts:**

     "build": "babel ./server.js  --out-dir build && babel ./src --out-dir build/src",
     "test": "jest",
     "dev-start": "babel-watch server.js",
     "start": "node ./build/server.js"
 
  
  _for start - need rename example.env_
  
  
 