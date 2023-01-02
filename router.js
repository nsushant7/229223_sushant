
var landingController=require('./controllers/landingController');
var profileController=require('./controllers/profileController');
module.exports=function(app){

 
   app.route('/')
   .get(profileController.get)
   .post(profileController.post);
    app.route('/profile')
       .get(landingController.getAll)
       .post(landingController.insert);

};
