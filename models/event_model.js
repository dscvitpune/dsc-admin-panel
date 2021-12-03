const { model, Schema } = require("mongoose");

const eventSchema = new Schema({
  title: { type: String, required: true },
  venue: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  status: { type: String, required: true,default:"Upcoming" },
  registrationLink:{type:String, required:true},
  createdAt: { type: String, required: true, default: new Date() },
  updatedAt: { type: String, required: true },
  slots:{type:Schema.Types.Mixed},
  image: {
    data: Buffer,
    contentType: String,
  },
});

model("events", eventSchema);
