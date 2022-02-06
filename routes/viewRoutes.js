const { home, teams, events,signIn,projects,editEvent,editTeam, editProject} = require("../controllers/views");
const {restrictUnauth,forwardAuth} = require("../middlewares/requireAuth")
module.exports = (app) => {
  app.get('*', function(req, res, next){
    if(req.url != '/signin'){
      restrictUnauth(req, res, next);
    }else{
       next();
    }
 });
  app.get("/" ,home);
  app.get("/teams",teams);
  app.get("/event",events);
  app.get("/signin", signIn);
  app.get("/project", projects);
  app.get("/editEvent/:id", editEvent);
  app.get("/editMember/:id", editTeam); 
  app.get("/editProject/:id", editProject);
};

