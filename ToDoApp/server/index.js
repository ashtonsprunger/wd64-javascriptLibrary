const { request, response } = require('express');
const Express = require('express');

const applicationControllers = require('./controllers/index');

const expressApplicationObject = new Express();

expressApplicationObject.use('/test', applicationControllers.test)

expressApplicationObject.use(Express.json());

expressApplicationObject.get('/', (request, response) => {
    console.log('[server]: Root GET request recieved');
    console.log('TYPE:', request.method);
    console.log('URL:', request.url);
    console.log('[server]: Response being dispatched ->');
    response.send('Root Route Hit, hello from the todo server');
});

expressApplicationObject.post('/challenge', (request, response) => {
    let name = request.body.name;
    let age = request.body.age;
    console.log(`${name}, you ${age >= 18 ? 'are an adult!' : 'will be an adult soon!'}`);
    response.send('done');
})

expressApplicationObject.listen(9001, () => {
    console.log('[server]: App is listening on port 9001')
});