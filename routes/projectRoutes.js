const {getProjects, newProject, viewProject, updateProject, deleteProject} = require("../controllers/projects");
const upload = require('../middlewares/upload');




module.exports = (app) => {
    app.get('/projects', upload.single("image"),getProjects);
    app.get('/projects/:id', viewProject);
    app.post('/projects/newProject',upload.single('image'), newProject);
    app.post('/projects/edit/:id', upload.single('image'), updateProject);
    app.post('/projects/delete/:id', deleteProject);
}