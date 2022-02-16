const mongoose = require("mongoose");
const Project = mongoose.model("projects");

const newProject = async (req, res) => {
  const { title, domain, desc, github, video } = req.body;
  image = {
    data: req.file.buffer,
    contentType: req.file.mimetype,
  };
  try {
    const existingProject = await Project.findOne({ title });
    var message="something went wrong"
    if (existingProject) {
      message= "project with same title already exists";
      throw message
    }

    let newProject = await new Project({
      projectTitle: title,
      domain,
      description: desc,
      githubLink: github,
      videoLink: video,
      image: image,
    }).save();

    res.redirect("/project");
  } catch (e) {
    console.error(e);
    res.status(300).json({ message: e.toString() });
  }
};

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find({});
    if (!projects) throw "There are no projects";

    res.send(projects);
  } catch (e) {
    console.error(e);
    res.status(300).json({ message: e.toString() });
  }
};

const viewProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    res.send(project);
  } catch (e) {
    console.error(e);
    res.status(300).json({ message: e.toString() });
  }
};

const updateProject = async (req, res) => {
  const { title, desc, domain, github, video } = req.body;
  const projectId = req.params.id;
  let getImageData = await Project.findById(projectId);
  let image = {
    data: getImageData.image.data,
    contentType: getImageData.image.contentType,
  };
  if (req.file) {
    image = {
      data: req.file.buffer,
      contentType: req.file.mimetype,
    };
  }
  try {
    let existingProject = projectId ? await Project.findById(projectId) : "";
    if (!existingProject) throw "Project doesn't exist";
    let updatedProject = {
      projectTitle: title,
      description: desc,
      domain,
      githubLink: github,
      videoLink: video,
      image: image,
    };
    //to check if admin really has updated the project image or not, if did then only update the document
    if (req.file) {
      updatedProject.image = {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      };
    }

    updatedProject = await Project.findByIdAndUpdate(
      projectId,
      updatedProject,
      { new: true }
    );
    res.redirect("/project");
    // res.status(200).json(updatedProject);
  } catch (e) {
    console.error(e);
    res.status(300).json({ message: "something went wrong" });
  }
};

const deleteProject = async (req, res) => {
  const { id } = req.params;
  try {
    await Project.findByIdAndDelete(id);
    res.status(200).json({ message: "Project has been deleted" });
  } catch (e) {
    console.error(e);
    res.status(300).json({ message: "something went wrong" });
  }
};

exports.viewProject = viewProject;
exports.getProjects = getProjects;
exports.newProject = newProject;
exports.updateProject = updateProject;
exports.deleteProject = deleteProject;
