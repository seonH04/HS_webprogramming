//모듈을 이용해서 서버
const http=require("http");

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Conetent-Type': 'text/html'});
    res.write("<h1>hi</h1>");
    res.end("Hello World");
});

server.listen(1000,()=>{
    console.log("server listen on port 1000 !");
});