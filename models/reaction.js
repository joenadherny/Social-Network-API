const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
  reactionID: { type: mongoose.Schema.Types.ObjectId, default:()=> new Schema.Types.ObjectId() },
  reactionbody: { type: String, required: true, maxlength:280 },
  username: { type: String, required: true },
  createdAt:{type: Date, default:Date.now},
  // Add other reaction properties as needed
},
{
    toJSON:{getters:true},
    id:false
});



module.exports = reactionSchema;
