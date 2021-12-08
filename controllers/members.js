const {model} = require('mongoose');
const Member = model('members');


const createMember = async (req, res) => {
    // console.log(req.file)
    console.log(req.body)
    console.log(req.file)
    const {firstName, lastName, email, linkedInProfile, role, githubProfile,mobileNumber} = req.body;
    const image=req.file.buffer;
    
    try {
        let newMember = await new Member({
            firstName,
    lastName,
    email,
    linkedInProfile,
    githubProfile,
    role,
    mobileNumber,
    image
        }).save();

    console.log(newMember);
    res.redirect("/teams");

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
        const lead = await Member.findOne({role: "head"});
        res.status(200).json(lead);
    } catch (e) {
        console.error(e);
        res.staus(300).json({message: "something went wrong"});
    }
}

const dscHeads = async (req, res) => {
    try {
        const heads = await Member.find({role:"head"});
        res.status(200).json({heads: heads});
    } catch (e) {
        console.error(e);
        res.staus(300).json({message: "something went wrong"});
    }
}


const dscProjectManagers = async (req, res) => {
    try {
        const projectManagers = await Member.find({role: "project manager"});
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

const displayOne = async (req, res) => {
    // console.log(req.body)
    const {id} = req.body;
    
    try {
        let member = await Member.findById(id);
        console.log(id)
        console.log(member)
        res.status(200).json(member);
        // res.status(200).json({message: "member found"});

    } catch (e) {
        console.error(e);
        res.staus(300).json({message: "something went wrong"});
    }
}
const updateMember = async (req, res) => {
    const {firstName, lastName, linkedInProfile, githubProfile, mobileNumber, role, email} = req.body;
    const memberId = req.params.id;
    console.log(req.body)
    try {
        let updatedMember = await Member.findByIdAndUpdate(memberId,{
            firstName,
            lastName,
            linkedInProfile,
            githubProfile,
            role,
            email,
            mobileNumber,
            image: req.file.buffer
        }, {new: true});
            res.redirect("/teams");

        // res.status(200).json({updatedMember});
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
    displayOne,
    updateMember
}
