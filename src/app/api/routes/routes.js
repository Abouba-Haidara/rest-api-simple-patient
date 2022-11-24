module.exports = app => {

    const router = require('express').Router() ;
    const patients = require('../controllers/patient.controller');

    router.post('/patients', patients.create);
    router.get('/patients', patients.findAll);
    router.get('/patients/:id', patients.findOne);
    router.delete('/patients', patients.deleteAll);
    router.delete('/patients/:id', patients.delete);
    router.put('/patients/:id', patients.update);
   
    app.use('/api/', router);
}