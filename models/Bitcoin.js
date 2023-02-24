const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bitcoinSchema = new Schema({
  
  deposit: { 
    type: String, 
    required: true 
  },
  
  amount: { 
    type: Number,
    require: true,
  },
  
  withdraw: {
    type: String,
    require: true,
  }
  
  network: {
    type: String,
    required: true,
  }

  address: { 
    type: String,
    required: true,
  },
  
}, {
  timestamps: true,
});

const Bitcoin = mongoose.model('Bitcoin', bitcoinSchema);

module.exports = Bitcoin;
