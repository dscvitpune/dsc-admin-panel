const mongoose = require("mongoose");
const Event = mongoose.model("events");

const newEvent = async (req, res) => {
    const { title, description, status } = req.body;
    try
    {
        const existingEvent = await Event.findOne({ title });
        if (existingEvent) throw "event already exists";

        // const image = {
        //     data: req.file.buffer,
        //     contentType: req.file.mimetype
        // }
        let newEvent = await new Event({
            title,
            description,
            status,
            updatedAt: new Date(),
            image: req.file.buffer
        }).save();

        console.log(newEvent);
        res.status(200).json({ newEvent });
    } catch (e)
    {
        console.error(e);
        res.status(300).json({ message: "something went wrong" });
    }
}

const getEvents = async (req, res) => {
    try
    {
        const events = await Event.find();
        if (!events) throw "There are no events";

        const context = {
            events: events.map(event => {
                return {
                    title: event.title,
                    description: event.description
                }
            })
        }
        res.render("events", { layout: "index", events: context.events });

        // res.status(200).json({events});
    } catch (e)
    {
        console.error(e);
        res.status(300).json({ message: "something went wrong" });
    }
}

const updateEvent = async (req, res) => {
    const { title } = req.params;
    const { description, status } = req.body;
    try
    {
        let existingEvent = await Event.findOne({ title });
        if (!existingEvent) throw "Event doesn't exist";

        let updatedEvent = {
            title: (title !== req.body.title) ? req.body.title : title,
            description,
            status,
            updatedAt: new Date()
        }

        updatedEvent = await Event.findOneAndUpdate({ title }, updatedEvent, { new: true });
        res.status(200).json(updatedEvent);

    } catch (e)
    {
        console.error(e);
        res.status(300).json({ message: "something went wrong" });
    }
}

const deleteEvent = async (req, res) => {
    const { id } = req.body;
    try
    {
        await Event.findByIdAndDelete(id);
        res.status(200).json({ message: "Event has been deleted" })
    } catch (e)
    {
        console.error(e);
        res.status(300).json({ message: "something went wrong" });
    }
}


exports.getEvents = getEvents;
exports.newEvent = newEvent;
exports.deleteEvent = deleteEvent;
exports.updateEvent = updateEvent;