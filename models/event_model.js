const { model, Schema } = require("mongoose");

const eventSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, required: true },
    createdAt: { type: String, required: true, default: new Date() },
    updatedAt: { type: String, required: true },
    image: {
        type: Buffer,
        data: Buffer,
        contentType: String
    }
})

model("events", eventSchema);