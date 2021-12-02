const { home, teams, events,signIn,projects } = require("../controllers/views");

module.exports = (app) => {
  app.get("/", home);
  app.get("/teams", teams);
  app.get("/event", events);
  app.get("/signin", signIn);
  app.get("/project", projects);
};
