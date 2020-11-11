const {Router} = require('express');

const testControllerRouter = Router();

testControllerRouter.get('/', (request, response)=>{
    let message = 'Hello from the test controller!';
    response.send(message);
});

module.exports = testControllerRouter;