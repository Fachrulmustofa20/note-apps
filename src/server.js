const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: process.env.NODE_ENV !== 'production' ? 'localhost' : '3.226.126.255',
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });

    server.route(routes);

    try {
        await server.start();
        console.log(`Server berjalan pada ${server.info.uri}`);
    } catch(error) {
        console.log(error);
    }
};

init();
