/*const http=require('http');
const colors=require('colors');

const handleServer=function(req,res){
    res.writeHead(200,{'Content-type':'text/html'});
    res.write('<h1>Hola mundo</h1>');
    res.end();
}

const server=http.createServer(handleServer);

server.listen(3000,function(){
    console.log('Server on port 3000'.blue);
});
*/

const express=require('express');//Mando a llamar express, Framework
const color=require('colors');//Mando a llamar colors, modulo

const server=express(); //Defino un servdiro con al funcion express(), casi todo lo que tiene () al final son funciones, 
//las cuales pueden o no recibir parametros y pueden o no regresar algo, pero siempre hacen algo.
//rutas (end points)

//Middlewares
server.use(function(req,res,next){
    console.log('request url:'+req.url);
    next();
});
//RUTAS
server.get('/',(req,res)=>{ //mando a llamar la funcion .get() de mi server y le digo que cuando vayan a '/' me regrese lo que esta en send
    res.send('<h1>Hola mundo con express y Node</h1>'); //Le mando un Hola mundo como un Header1 (que es un titulo nomas)
    res.end;
});

server.get('/login',(req,res)=>{ //lo mismo de arriba funcion .get(), pero e digo que cuando vayan a '/login' les mando aqui va el login
res.end('Aqui va el login');
});

server.get('*',(req,res)=>{ //lo mismo .get(), pero ahora le digo * que significa todo, y asi que todo lo demas que no este
    //definido le mando 404, que en informtatica es lo universal para decir no se enconro.
    res.end('404');
    });

server.listen(3000,function(){//POngo a mi servidor a escuchar con la funcion .listen() en el puerto 3000 
console.log('server on port 3000'.red);//y este nomas es un mensaje que pongo en mi consola para ver que esta pasaando
})