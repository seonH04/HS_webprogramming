const http=require("http");
const fs = requiew("fs");
const server = http.createServer();

server.on('request',(req,res)=>{
    const fielname="2w.html"
    getSelection.readfile(filename,(err,data)=> {
        res.writeHead(200,{'Conetent-Type': 'text/html'});
        res.write(data);
        res.end();

    });
});

server.listen(3000,()=>{
    console.log("server listen on port 3000 !");
});