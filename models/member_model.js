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
    fullname: {type: String, required: true},
    email: {type: String, required: true},
    githubProfile: {type: String, required: true},
    linkedInProfile: {type: String, required: true},
    mobileNumber : {type: Number, required: false},
    role: {type: String, required: true},
    position: {type: String, required: true},
    year:{type:Number,required: true},
    image: {
        data: Buffer,
        contentType: String,
    }
});


model("members", memberSchema);