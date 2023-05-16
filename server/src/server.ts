import fastify from 'fastify';

const app = fastify();

app.get('/hello', ()=>{
    return 'hello'

})

//Inicializando Server na porta 3333
app.listen({
    port: 3333,
}).then(() =>{
    console.log('Server rodando em localhost:3333 👌');

})