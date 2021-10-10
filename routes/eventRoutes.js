const {getEvents, newEvent, updateEvent, deleteEvent} = require("../controllers/events");
const upload = require('../middlewares/upload');

module.exports = (app) => {
    app.get('/events', getEvents);
    app.post('/events/newEvent', upload.single('image'), newEvent);
    app.put('/events/:title', updateEvent);
    app.delete('/events/deleteEvent', deleteEvent);
}