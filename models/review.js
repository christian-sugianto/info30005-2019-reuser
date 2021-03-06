const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    // user the review describes
    userId:String,
    // user who left this review
    leftById:String,

    datePosted:{type: Date, default: Date.now},

    title:String,
    content:String,
    starRating:{type:Number, min:1, max:5},

    // url of the images posted
    imageURLs:[String]
  }
);

mongoose.model('review',reviewSchema);
