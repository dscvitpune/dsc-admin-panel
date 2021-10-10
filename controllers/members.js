const {model} = require('mongoose');
const Member = model('members');

const createMember = async (req, res) => {
    const {firstName, lastName, linkedInProfile, role, specialRole} = req.body;
    try {
        let newMember = await new Member({
            firstName,
            lastName,
            linkedInProfile,
            role,
            specialRole: (specialRole)? specialRole : null
        }).save();

        console.log(newMember);
        res.status(200).json(newMember);

    } catch (e) {
        console.error(e);
        res.status(300).json({message: "something went wrong"});
    }
}

const getAllMembers = async (req, res) => {
    try {
        const allMembers = await Member.find();
        res.status(200).json(allMembers);
    } catch (e) {
        console.error(e);
        res.staus(300).json({message: "something went wrong"});
    }
}

const dscLead = async (req, res) => {
    try {
        const lead = await Member.findOne({specialRole: "head"});
        res.status(200).json(lead);
    } catch (e) {
        console.error(e);
        res.staus(300).json({message: "something went wrong"});
    }
}

const dscHeads = async (req, res) => {
    try {
        const heads = await Member.find({specialRole:"head"});
        res.status(200).json({heads: heads});
    } catch (e) {
        console.error(e);
        res.staus(300).json({message: "something went wrong"});
    }
}


const dscProjectManagers = async (req, res) => {
    try {
        const projectManagers = await Member.find({specialRole: "project manager"});
        console.log(projectManagers);
        res.status(200).json({projectManagers: projectManagers});
    } catch (e) {
        console.error(e);
        res.staus(300).json({message: "something went wrong"});
    }
}

const dscWebTeam = async (req, res) => {
    try {
        const webTeam = await Member.find({role: "web developer"})        
        res.status(200).json({webTeam: webTeam});
    } catch (e) {
        console.error(e);
        res.staus(300).json({message: "something went wrong"});
    }
}
const dscAndroidTeam = async (req, res) => {
    try {
        const androidTeam = await Member.find({role: "android developer"});
        res.status(200).json({androidTeam: androidTeam});
        
    } catch (e) {
        console.error(e);
        res.staus(300).json({message: "something went wrong"});
    }
}
const dscFlutterTeam = async (req, res) => {
    try {
        const flutterTeam = await Member.find({role: "flutter developer"});
        res.status(200).json({flutterTeam: flutterTeam});
    } catch (e) {
        console.error(e);
        res.staus(300).json({message: "something went wrong"});
    }
}
const dscMultimediaTeam = async (req, res) => {
    try {
        const multimediaTeam = await Member.find({role: "multi media"})        
        res.status(200).json({multimediaTeam: multimediaTeam});

    } catch (e) {
        console.error(e);
        res.staus(300).json({message: "something went wrong"});
    }
}
const dscManagement = async (req, res) => {
    try {
        const managementTeam = await Member.find({role: "manager"})        
        res.status(200).json({managementTeam: managementTeam});

    } catch (e) {
        console.error(e);
        res.staus(300).json({message: "something went wrong"});
    }
}

const deleteMember = async (req, res) => {
    const {id} = req.body;
    try {
        await Member.findByIdAndDelete(id);
        res.status(200).json({message: "member deleted"});

    } catch (e) {
        console.error(e);
        res.staus(300).json({message: "something went wrong"});
    }
}

const updateMember = async (req, res) => {
    const {id, firstName, lastName, linkedInProfile, role, specialRole} = req.body;
    try {
        let updatedMember = await Member.findByIdAndUpdate({
            firstName,
            lastName,
            linkedInProfile,
            role,
            specialRole: (specialRole)? specialRole : null
        }, {new: true});
        res.status(200).json({updatedMember});
    } catch (e) {
        console.error(e);
        res.status(300).json({message: "something went wrong"});
    }
}

// module.createMemeber = createMember;
// module.getAllMembers = getAllMembers;
// module.dscLead = dscLead;
// module.dscHeads = dscHeads;
// module.dscWebTeam = dscWebTeam;
// module.dscAndroidTeam = dscAndroidTeam;
// module.dscFLutterTeam = dscFlutterTeam;
// module.dscMultimediaTeam = dscMultimediaTeam;
// module.dscManagement = dscManagement;
// module.deleteMember = deleteMember;
// module.updateMember = updateMember;

module.exports = {
    createMember,
    getAllMembers,
    dscLead,
    dscHeads,
    dscWebTeam,
    dscAndroidTeam,
    dscFlutterTeam,
    dscManagement,
    dscMultimediaTeam,
    dscProjectManagers,
    deleteMember,
    updateMember
}