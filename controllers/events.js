const mongoose = require("mongoose");
const Event = mongoose.model("events");

const newEvent = async (req, res) => {
  const {
    title,
    venue,
    date,
    description,
    endDate,
    duration,
    registrationLink,
    slots,
    day,
    slot_start,
    slot_end,
  } = req.body;
  // try {
    const existingEvent = await Event.findOne({ title });
    var message = "something went wrong";
    if (existingEvent) {
      message = "event already exists";
      throw message;
    }

    const image = {
      data: req.file.buffer,
      contentType: req.file.mimetype,
    };
    let schedule = [];
    let days = []
    let slotsOfEvent = []
    let slotStart = []
    let slotEnd = []
    if(Array.isArray(day)) {
      days = day
    }else{
      days.push(day)
    }
    if(Array.isArray(slots)){
      slotsOfEvent = slots
    }else{
      slotsOfEvent.push(slots)
    }
    if(Array.isArray(slot_start)){
      slotStart = slot_start
      slotEnd = slot_end
    }else{
      slotStart.push(`${slot_start}`)
      slotEnd.push(`${slot_end}`)
    }
    var n = 0;
    for (var i = 0; i < days.length; i++) {
      let date = days[i];
      let slots1 = [];
      for (var k = 0; k < parseInt(slotsOfEvent[i]); k++) {
        slots1.push({
          start: slotStart[n],
          end: slotEnd[n],
        });
        n++;
      }
      schedule.push({
        date,
        slots: slots1,
      });
    }
    let newEvent = await new Event({
      title,
      venue,
      date,
      description,
      duration,
      registrationLink,
      endDate,
      updatedAt: new Date(),
      image,
      schedule,
    }).save();
    // res.status(200).json({ newEvent });
    res.redirect("/event");
  // } catch (e) {
  //   console.error(e);
  //   res.status(300).json({ message: message });
  // }
};

const getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    if (!events) throw "There are no events";

    const context = {
      events: events.map((event) => {
        return {
          title: event.title,
          description: event.description,
        };
      }),
    };
    res.render("events", { layout: "index", events: context.events });

    // res.status(200).json({events});
  } catch (e) {
    console.error(e);
    res.status(300).json({ message: "something went wrong" });
  }
};

const updateEvent = async (req, res) => {
  const {
    id,
    title,
    venue,
    date,
    description,
    duration,
    status,
    registrationLink,
    slots,
  } = req.body;
  try {
    let getImageData = await Event.findById(id);
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

    let updateEvent = {
      title,
      venue,
      date,
      description,
      duration,
      status,
      registrationLink,
      updatedAt: new Date(),
      slots,
      image,
    };
    let response = await Event.findByIdAndUpdate(id, updateEvent);
    res.redirect("/event");

    res.status(200);
    // .json({message:"Record Updated",response:response})
  } catch (error) {
    console.error(error);
    res.status(300).json({ message: "something went wrong" });
  }
};

const deleteEvent = async (req, res) => {
  const { id } = req.body;
  try {
    await Event.findByIdAndDelete(id);
    res.status(200).json({ message: "Event has been deleted" });
  } catch (e) {
    console.error(e);
    res.status(300).json({ message: "something went wrong" });
  }
};

const getEvent = async (req, res) => {
  const { id } = req.body;
  try {
    let response = await Event.findById(id);
    res.status(200).send(response);
  } catch (error) {
    console.log(error);
  }
};

exports.getEvents = getEvents;
exports.getEvent = getEvent;
exports.newEvent = newEvent;
exports.deleteEvent = deleteEvent;
exports.updateEvent = updateEvent;
