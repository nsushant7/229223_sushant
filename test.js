var express=require('express');
var session =require('express-session');
var parseurl=require('parseurl');
var path=require('path');
var bodyParser=require('body-parser');

const app=express();


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


var sessionOptions={
   secret:"secret",
   resave:true,
   saveUninitialized:false
};
app.use(session(sessionOptions));


app.use(function(req, res,next){

   if (!req.session.views) {
      req.session.views = {};
      req.session.views.profile=[];
   }

   var pathname=parseurl(req).pathname;

   req.session.views[pathname] = (req.session.views[pathname] || 0) + 1;
   next();
})

var routes=require("./router");
routes(app);

var staticFolder=express.static(path.join(__dirname,"public"));
app.use(staticFolder);

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname + '/index.html'));
});
// app.get("/", (req, res)=>{
//    res.sendFile(path.join(__dirname + '/profile.html'));
// });
app.listen(4000);
console.log("Profile port 4000");