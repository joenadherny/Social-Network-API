

const mongoose = require('mongoose');
const reaction= require('./reaction')
const thoughtSchema = new mongoose.Schema({
  thoughtText: { type: String, required: true },
  createdAt:{type: Date, default:Date.now},
  username: { type: String, required: true },
  reactions:[reaction],

  // Add other thought properties as needed
}, {
    toJSON:{virtuals:true},
    id:false
});
thoughtSchema.virtual('reactioncount').get(function(){
    return this.reactions.length
})

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
