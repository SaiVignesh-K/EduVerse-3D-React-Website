const mongoose = require('mongoose');
const {Schema } = mongoose;

const mapSchema = new Schema({
    title: String,
    keyword: String,
    subject: String,
    url: String,
});

const Map = mongoose.model('Map', mapSchema);
module.exports = Map;