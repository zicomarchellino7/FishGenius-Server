const Hapi = require('@hapi/hapi');
const con =require('./connection');
const routes = require('./route');
const PORT = process.env.PORT || 4002;

const init = async () => {

    const server = Hapi.server({
        port: PORT,
        host: '0.0.0.0',
        routes: {
            cors: {
              origin: ['*'],
            },
          },
    });

    con.authenticate().then(()=>{
        console.log('connected db');
    }).catch(()=>{
        console.log('error connected db');
    });

    
    
    // const rotes = require('./route')(server,connection)
    server.route(routes);
    await server.start();


    console.log(`Server berjalan pada ${server.info.uri}`);
};
 
init();
