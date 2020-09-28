const http = require('http');
const fs = require('fs');
const { brotliDecompressSync } = require('zlib');

const server = http.createServer((req,res)=>{
    const url = req.url;
    const method =req.method;
    if (url ==='/'){
        res.write('<html>');
        res.write('<head><title>Enter message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    //redirecting request
    if (url ==='/message' && method === 'POST'){
        //parsing request 
        const body =[];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);

        });
        //second argument
        req.on('end',()=>{
         const parsedBody =Buffer.concat(body).toString();
         console.log(parsedBody);         
        });
        fs.writeFileSync('message.txt','Dummy');
        res.statusCode = 302;
        res.setHeader("Content-Type", "text/html"); // Mistake line
        res.write("<html>");
        res.write("<head><title>Message page</title></head>");
        res.write("<body><h1>Redirected to message</h1></body>");
        res.write("</html>");
        return res.end();
      }
    

    
    
    res.write('<html>');
    res.write('<head><title>First message</title></head>');
    res.write('<body><h1>Hello from node.js server</h1></body>');
    res.write('</html>');
    res.end();

});

server.listen(3000);