const mongoose = require('mongoose');
const { nanoid } = require('nanoid');

const shortUrlSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    shortUrlId: {
        type: String,
        required: true,
        default: nanoid(6)
    },
    clicks: {
        type: Number,
        required: true,
        default: 0
    }
});

module.exports = mongoose.model('ShortUrl', shortUrlSchema);
