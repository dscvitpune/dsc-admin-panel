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
    dscProjectManagers,
    dscManagement,
    deleteMember,
    displayOne,
    updateMember
} = require('../controllers/members');

module.exports = (app) => {
    app.post('/team/newMember',upload.single("image"), createMember);
    app.get('/team/allMembers', getAllMembers);
    app.get('/team/dscLead', dscLead);
    app.get('/team/dscHeads', dscHeads);
    app.get('/team/dscWebTeam', dscWebTeam);
    app.get('/team/dscAndroidTeam', dscAndroidTeam);
    app.get('/team/dscFlutterTeam', dscFlutterTeam);
    app.get('/team/dscMultimediaTeam', dscMultimediaTeam);
    app.get('/team/dscManagement', dscManagement);
    app.get('/team/projectManagers', dscProjectManagers);
    app.get('/team/displayOne', upload.single("image"),displayOne);
    app.post('/team/deleteMember', deleteMember),
    app.post('/team/updateMember', updateMember)
}