const mongoose = require("mongoose");
const Event = mongoose.model("events");

const home = (req, res) => {
  res.render("pages/index");
};
const teams = (req, res) => {
  res.render("pages/teams");
};
const events = async (req, res) => {
  const allEvents = await Event.find({})
  res.render("pages/events",{
          Events:allEvents
  });
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

