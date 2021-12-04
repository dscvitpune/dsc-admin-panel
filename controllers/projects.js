const mongoose = require("mongoose");
const Project = mongoose.model("projects");


const newProject = async (req, res) => {
    const { title, domain, desc, github, video } = req.body;
    try
    {    
        let newProject = await new Project({
            projectTitle: title,
            domain,
            description: desc,
            githubLink: github,
            videoLink: video,
            image: req.file.buffer
        }).save();

        res.redirect('/project')
    } catch (e)
    {
        console.error(e);
        res.status(300).json({ message: e.toString() });
    }
}


const getProjects = async (req, res) => {
    try
    {
        const projects = await Project.find({});
        if (!projects) throw "There are no projects";

        res.send(projects);
    } catch (e)
    {
        console.error(e);
        res.status(300).json({ message: e.toString() });
    }
}

const viewProject = async (req, res) => {
    try{
        const project = await Project.findById(req.params.id);
        res.send(project);
    } catch (e)
    {
        console.error(e);
        res.status(300).json({ message: e.toString() });
    }
}

const updateProject = async (req, res) => {
    const { projectTitle, description, domain, githubLink, videoLink } = req.body;
    try
    {
        let existingProject = await Project.findOne({ projectTitle });
        if (!existingProject) throw "Project doesn't exist";

        let updatedProject = {
            projectTitle: (projectTitle !== req.body.projectTitle) ? req.body.projectTitle : projectTitle,
            description,
            domain,
            githubLink,
            videoLink
        }

        updatedProject = await Project.findOneAndUpdate({ projectTitle }, updatedProject, { new: true });
        res.status(200).json(updatedProject);

    } catch (e)
    {
        console.error(e);
        res.status(300).json({ message: "something went wrong" });
    }
}

const deleteProject = async (req, res) => {
    const { id } = req.params;
    try
    {
        await Project.findByIdAndDelete(id);
        res.status(200).json({ message: "Project has been deleted" })
    } catch (e)
    {
        console.error(e);
        res.status(300).json({ message: "something went wrong" });
    }
}



exports.viewProject = viewProject;
exports.getProjects = getProjects;
exports.newProject = newProject;
exports.updateProject = updateProject;
exports.deleteProject = deleteProject;
