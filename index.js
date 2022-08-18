 
const fs= require('fs')
 const process = require('process');
 var cmd=process.argv
  

if(cmd[2]=='create')
 fs.writeFile('test.txt','THis is test file creation',(err)=>{
    
    if(err)
    console.log(err)
 })

if(cmd[2]=='read'){
    console.log(cmd[2]=='read')
    fs.readFile('test.txt','utf-8',(e,d)=>{
        if(e)console.log(e)
        else console.log(d)
    })

}
if(cmd[2]=='delete'){
    // console.log(cmd[2]=='read')

    fs.unlink('test.txt',(e)=>{
        if(e)console.log(e)
        else console.log( 'file deleted')
        
    })

}

if(cmd[2]=='append'){
    // console.log(cmd[2]=='read')

    fs.appendFile('test.txt',"apeende content",(e)=>{
        if(e)console.log(e)
        else console.log( 'apend data')
        
    })

}

if(cmd[2]=='rename'){
    // console.log(cmd[2]=='read')

    fs.rename('test.txt',"renamed.txt",(e)=>{
        if(e)console.log(e)
        else console.log( 'file remaned succrlly')
        
    })

}
if(cmd[2]=='list'){
    // console.log(cmd[2]=='read')

console.log(cmd)

}

