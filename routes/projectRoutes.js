const {getProjects, newProject, viewProject, updateProject, deleteProject} = require("../controllers/projects");
const upload = require('../middlewares/upload');




module.exports = (app) => {
    app.get('/projects', getProjects);
    app.get('/projects/:id', viewProject);
    app.post('/projects/newProject',upload.single('image'), newProject);
    app.post('/projects/edit/:id', updateProject);
    app.post('/projects/delete/:id', deleteProject);
}