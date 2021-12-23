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
    const { title, desc, domain, github, video } = req.body;
    console.log(req.body);
    try
    {
        const projectId = req.params.id;
        let existingProject = projectId?  await Project.findById(projectId) : "";
        if (!existingProject) throw "Project doesn't exist";
        let updatedProject = {
            projectTitle: title,
            description: desc,
            domain,
            githubLink: github,
            videoLink: video,
            image: req.file.buffer
        }

        updatedProject = await Project.findByIdAndUpdate(projectId, updatedProject, {new: true});
        res.redirect("/project");
        // res.status(200).json(updatedProject);

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
