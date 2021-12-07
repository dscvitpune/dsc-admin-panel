const {model} = require("mongoose");

const Project = model("projects");
const Event = model("events");
const Member = model("members");

const home = (req, res) => {
  res.render("pages/index");
};

//Event view controllers
const editEvent = async (req, res) => {
  const response = await Event.findById(req.params.id)
  res.render("pages/EditEvent",{event:response});
};
const events = async (req, res) => {
  const allEvents = await Event.find({})
  res.render("pages/events",{
          Events:allEvents
  });
};

//Team view controllers
const editTeam = async (req, res) => {
  const response = await Member.findById(req.params.id)
  res.render("pages/EditTeams",{member:response});
};
const teams = async (req, res) => {
  try {
    const allMembers = await Member.find({});
    res.render("pages/teams", {allMembers: allMembers});
  } catch (e) {
    res.status(300).json({ message: e.toString() });
  }
};

//Auth view controllers
const signIn = (req, res) => {
  res.render("pages/signin");
};

//Project view controllers
const projects = async  (req, res) => {
  try {
    const allProjects = await Project.find({});
    res.render("pages/projects", {
      allProjects: allProjects
    });
  } catch (e) {
    res.status(300).json({ message: e.toString() });
  }
};

const editProject = async (req, res) => {
  const projectToEdit = await Project.findById(req.params.id)
  res.render("pages/EditProject", {project: projectToEdit});
}


module.exports = {
  home,
  teams,
  events,
  signIn,
  projects,
  editEvent,
  editTeam,
  editProject 
  };

