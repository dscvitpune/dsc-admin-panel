// Member
// --Special Role
// ----Lead
// ----Heads
// ----Project Managers
// --Role
// ----Web Developer
// ----Android Developer
// ----Flutter Developer
// ----Multimedia
// ----Management
const {model, Schema} = require('mongoose');

const memberSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    linkedInProfile: {type: String, required: true},
    githubProfile: {type: String, required: true},
    role: {type: String, required: true},
    mobileNumber : {type: Number, required: false},
    image: {
        data: Buffer,
        contentType: String
    }
});


model("members", memberSchema);