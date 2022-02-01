const { home, teams, events,signIn,projects,editEvent,editTeam, editProject} = require("../controllers/views");
const {restrictUnauth,forwardAuth} = require("../middlewares/requireAuth")
module.exports = (app) => {
  app.get("/",restrictUnauth, home);
  app.get("/teams",restrictUnauth, teams);
  app.get("/event",restrictUnauth,events);
  app.get("/signin",restrictUnauth, signIn);
  app.get("/project", restrictUnauth,projects);
  app.get("/editEvent/:id", editEvent);
  app.get("/editMember/:id", editTeam); 
  app.get("/editProject/:id", editProject);
};

