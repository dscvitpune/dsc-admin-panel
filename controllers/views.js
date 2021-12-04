const {model} = require("mongoose");

const Project = model("projects");

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
const projects = async  (req, res) => {
  try {
    const allProjects = await Project.find({});
    allProjects.forEach((project) => {
      console.log(project.projectTitle);
    })
    res.render("pages/projects", {
      allProjects: allProjects
    });
  } catch (e) {
    res.status(300).json({ message: e.toString() });
  }
};

module.exports = {
  home,
  teams,
  events,
  signIn,
  projects
};

