let express = require('express');
let router = express.Router();
let sequelize = require('../db');
let TestModel = sequelize.import('../models/test');

router.get('/', function(req, res){
    res.send('Hey!!! This is a test route!');
});

router.get('/about', function(req, res){
    res.send('This is an about route');
});

router.post('/one', function(req, res){
    res.send('Got a post request.')
});

router.post('/two', function(req, res){
    let testData = 'Test data for endpoint two';

    TestModel
        .create({
            testdata: testData
        }).then(dataFromDatabase => {
            res.send('Test two went through!')
        })
});

router.post('/three', function(req, res){
    let testData = req.body.testdata.item;

    TestModel
        .create({
            testdata: testData
        })
    res.send('Test three went through!')
    console.log('Test three went through!')
});

router.post('/four', function(req, res){
    let testData = req.body.testdata.item;
    TestModel
        .create({
            testdata: testData
        })
        .then(
            function message(){
                res.send('Test 4 went through! YAYYY');
            }
        );
});

router.post('/five', function(req, res){
    let testData = req.body.testdata.item;
    TestModel
        .create({
            testdata: testData
        })
        .then(
            function message(data){
                res.send(data);
            }
        );
});

router.post('/six', function(req, res){
    let testData = req.body.testdata.item;
    TestModel
        .create({
            testdata: testData
        })
        .then(
            function message(testdata){
                res.json({
                    testdata: testdata
                });
            }
        );
});

router.post('/seven', function(req, res){
    let testData = req.body.testdata.item;

    TestModel
        .create({
            testdata: testData
        })
        .then(
            function createSuccess(testdata){
                res.json({
                    testdata: testdata
                });
            },
            function createError(err){
                res.send(500, err.message);
            }
        );
});

router.get('/helloclient', function(req, res){
    res.send('This is a message from the server to the client.')
})

router.get('/one', function(req, res){
    TestModel
        .findAll({
            attributes: ['id', 'testdata']
        })
        .then(
            function findAllSuccess(data){
                console.log('Controller data:', data);
                res.json(data);
            },
            function findAllError(err){
                res.send(500, err.message);
            }
        );
});

module.exports = router;