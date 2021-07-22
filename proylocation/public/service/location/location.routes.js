const location = require('./location.controller');

module.exports = (router)=>{
    router.get('/findLocations', location.findLocations);
    router.put('/updateLocation', location.updateLocation);
    router.post('/createLocation', location.createLocation);
    router.delete('/deleteLocation/:id', location.deleteLocation);
    router.get('/findByIDLocation/:id', location.findByID);
}