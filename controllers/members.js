const { model } = require("mongoose");
const Member = model("members");

const createMember = async (req, res) => {
  const {
    fullname,
    email,
    linkedInProfile,
    role,
    position,
    githubProfile,
    mobileNumber,
    year
  } = req.body;
  let image = {
    data: req.file.buffer,
    contentType: req.file.mimetype,
  };
  try {
    let newMember = await new Member({
      fullname,
      email,
      linkedInProfile,
      githubProfile,
      role,
      position,
      mobileNumber,
      image: image,
      year
    }).save();

    res.redirect("/teams");
  } catch (e) {
    console.error(e);
    res.status(300).json({ message: "something went wrong" });
  }
};

const getAllMembers = async (req, res) => {
  try {
    const allMembers = await Member.find();
    res.status(200).json(allMembers);
  } catch (e) {
    console.error(e);
    res.staus(300).json({ message: "something went wrong" });
  }
};

const dscLead = async (req, res) => {
  try {
    const lead = await Member.find({role:"Lead"});
    res.status(200).json(lead);
  } catch (e) {
    console.error(e);
    res.staus(300).json({ message: "something went wrong" });
  }
};

const dscHeads = async (req, res) => {
  try {
    const heads = []
    const allMembers = await Member.find();
    allMembers.forEach((element)=>{
      if(element.role.includes("Head")) heads.push(element)
    })
    res.status(200).json({ heads });
  } catch (e) {
    console.error(e);
    res.staus(300).json({ message: "something went wrong" });
  }
};

const dscManager = async(req,res)=>{
  try {
    const manager = []
    const allMembers = await Member.find();
    allMembers.forEach((element)=>{
      if(element.role.includes("DSC Manager")) manager.push(element)
    })
    res.status(200).json({ manager });
  } catch (e) {
    console.error(e);
    res.staus(300).json({ message: "something went wrong" });
  }
}

const dscManagers = async (req, res) => {
  try {
    const managers = []
    const allMembers = await Member.find();
    allMembers.forEach((element)=>{
      if(element.role.includes("Manager") && !element.role.includes("DSC Manager")) managers.push(element)
    })
    res.status(200).json({ managers });
  } catch (e) {
    console.error(e);
    res.staus(300).json({ message: "something went wrong" });
  }
};

const dscWebTeam = async (req, res) => {
  try {
    const webTeam = await Member.find({ role: "Web Developer" });
    res.status(200).json({  webTeam });
  } catch (e) {
    console.error(e);
    res.staus(300).json({ message: "something went wrong" });
  }
};
const dscAndroidTeam = async (req, res) => {
  try {
    const androidTeam = await Member.find({ role: "Android Developer" });
    res.status(200).json({ androidTeam: androidTeam });
  } catch (e) {
    console.error(e);
    res.staus(300).json({ message: "something went wrong" });
  }
};
const dscFlutterTeam = async (req, res) => {
  try {
    const flutterTeam = await Member.find({ role: "Flutter Developer" });
    res.status(200).json({ flutterTeam: flutterTeam });
  } catch (e) {
    console.error(e);
    res.staus(300).json({ message: "something went wrong" });
  }
};
const dscMultimediaTeam = async (req, res) => {
  try {
    const multimediaTeam = await Member.find({ role: "Multimedia Coordinator" });
    res.status(200).json({ multimediaTeam: multimediaTeam });
  } catch (e) {
    console.error(e);
    res.staus(300).json({ message: "something went wrong" });
  }
};
const dscManagementTeam = async (req, res) => {
  try {
    const multimediaTeam = await Member.find({ role: "Event Manager" });
    res.status(200).json({ multimediaTeam: multimediaTeam });
  } catch (e) {
    console.error(e);
    res.staus(300).json({ message: "something went wrong" });
  }
};
const dscContentTeam = async (req, res) => {
  try {
    const multimediaTeam = await Member.find({ role: "Content Writer" });
    res.status(200).json({ multimediaTeam: multimediaTeam });
  } catch (e) {
    console.error(e);
    res.staus(300).json({ message: "something went wrong" });
  }
};


const deleteMember = async (req, res) => {
  const { id } = req.body;
  try {
    await Member.findByIdAndDelete(id);
    res.status(200).json({ message: "member deleted" });
  } catch (e) {
    console.error(e);
    res.staus(300).json({ message: "something went wrong" });
  }
};

const displayOne = async (req, res) => {
  // console.log(req.body)
  const { id } = req.body;

  try {
    let member = await Member.findById(id);
    console.log(id);
    console.log(member);
    res.status(200).json(member);
    // res.status(200).json({message: "member found"});
  } catch (e) {
    console.error(e);
    res.staus(300).json({ message: "something went wrong" });
  }
};
const updateMember = async (req, res) => {
  const {
    firstName,
    lastName,
    linkedInProfile,
    githubProfile,
    mobileNumber,
    role,
    email,
  } = req.body;
  const memberId = req.params.id;
  let getImageData = await Member.findById(memberId);
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
    let updatedMember = await Member.findByIdAndUpdate(
      memberId,
      {
        firstName,
        lastName,
        linkedInProfile,
        githubProfile,
        role,
        email,
        mobileNumber,
        image:image
      },
      { new: true }
    );
    res.redirect("/teams");

    // res.status(200).json({updatedMember});
  } catch (e) {
    console.error(e);
    res.status(300).json({ message: "something went wrong" });
  }
};



module.exports = {
  createMember,
  getAllMembers,
  dscLead,
  dscHeads,
  dscWebTeam,
  dscAndroidTeam,
  dscFlutterTeam,
  dscMultimediaTeam,
  dscManagers,
  deleteMember,
  displayOne,
  updateMember,
  dscManager,
  dscManagementTeam,
  dscContentTeam
};
