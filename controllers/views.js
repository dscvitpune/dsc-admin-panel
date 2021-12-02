const home = (req, res) => {
  res.render("pages/index");
};
const teams = (req, res) => {
  res.render("pages/teams");
};
const events = (req, res) => {
  res.render("pages/events");
};
const signIn = (req, res) => {
  res.render("pages/signin");
};
const projects = (req, res) => {
  res.render("pages/projects");
};

module.exports = {
  home,
  teams,
  events,
  signIn,
  projects
};

