const {getEvents, newEvent, updateEvent, deleteEvent,getEvent} = require("../controllers/events");
const upload = require('../middlewares/upload');

module.exports = (app) => {
    app.get('/events', getEvents);
    app.post('/events/newEvent', upload.single('image'), newEvent);
    app.put('/events/updateEvent', updateEvent);
    app.delete('/events/deleteEvent', deleteEvent);
    app.get('/events/getEvent', getEvent);
}