const { model, Schema } = require("mongoose");

const projectSchema = new Schema({
    projectTitle: {type: String, required: true},
    domain: {type: String, required: true},
    description: {type: String, required: true},
    githubLink: {type: String, required: true},
    videoLink: {type: String},
    image: {
        data: Buffer,
        contentType: String
    }
})

model("projects", projectSchema);