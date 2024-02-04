const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    content: {
        type: String,
        required: true
    },
    comments: [
        {
            commentText: {
                commentText: {
                    type: String,
                    required: true,
                    minlength: 1,
                    maxlength: 280,
                  },
                  commentAuthor: {
                    type: String,
                    required: true,
                  },
                  createdAt: {
                    type: Date,
                    default: Date.now,
                    get: (timestamp) => dateFormat(timestamp),
                  },
                },
        }
    ]
});

const Blog = model('Blog', blogSchema);

module.exports = Blog;