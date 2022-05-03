const upload = require("../middlewares/upload")
const {
    createMember,
    getAllMembers,
    dscLead,
    dscHeads,
    dscWebTeam,
    dscAndroidTeam,
    dscFlutterTeam,
    dscMultimediaTeam,
    dscManagers,
    dscManager,
    deleteMember,
    displayOne,
    updateMember,
    dscManagementTeam,
    dscContentTeam
} = require('../controllers/members');

module.exports = (app) => {
    app.post('/team/newMember',upload.single("image"), createMember);
    app.get('/team/allMembers', getAllMembers);
    app.get('/team/dscLead', dscLead);
    app.get('/team/dscHeads', dscHeads);
    app.get('/team/dscManager', dscManager);
    app.get('/team/dscManagers', dscManagers);
    app.get('/team/dscWebTeam', dscWebTeam);
    app.get('/team/dscAndroidTeam', dscAndroidTeam);
    app.get('/team/dscFlutterTeam', dscFlutterTeam);
    app.get('/team/dscMultimediaTeam', dscMultimediaTeam);
    app.get('/team/dscManagementTeam', dscManagementTeam);
    app.get('/team/dscContentTeam', dscContentTeam);
    // app.get('/team/projectManagers', dscManagers);
    app.get('/team/displayOne', upload.single("image"),displayOne);
    app.post('/team/deleteMember', deleteMember),
    app.post('/team/updateMember/:id', upload.single("image"), updateMember)
}