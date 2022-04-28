const { model, Schema } = require("mongoose");

const eventSchema = new Schema({
  title: { type: String, required: true },
  venue: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  registrationLink:{type:String, required:true},
  createdAt: { type: String, required: true, default: new Date() },
  updatedAt: { type: String, required: true },
  image: {
    data: Buffer,
    contentType: String,
  },
  schedule:[
    {
      date:{
        type:String
      },
      slots:[
        {
          start:{
            type:String,
          },
          end:{
            type:String
          }
        }
      ]
    }
  ]
});

model("events", eventSchema);
