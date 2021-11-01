const {getProjects, newProject, viewProject, updateProject, deleteProject,  uploadImg} = require("../controllers/projects");
const upload = require('../middlewares/upload');




module.exports = (app) => {
    app.get('/projects', getProjects);
    app.get('/projects/:id', viewProject);
    app.post('/projects/newProject', uploadImg, newProject);
    app.put('/projects/:id/edit', updateProject);
    app.delete('/projects/:id', deleteProject);
}