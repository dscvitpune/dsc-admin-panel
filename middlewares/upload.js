const multer = require('multer')
const { MongoURI } = require("../config/keys");

const storage = multer.memoryStorage()

const upload = multer({storage: storage});
module.exports = upload;