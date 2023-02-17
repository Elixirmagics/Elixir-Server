const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bitcoinSchema = new Schema({
  coin: { 
    type: String, 
    required: true 
  },

  symbol: { 
    type: String,
  },
  
  receive_coin: {
    type: String,
    required: true,
  }
  
  network: {
    type: String,
    required: true,
  }

  amount: { 
    type: Number,
    require: true,
  },

  address: { 
    type: String,
    required: true,
  },
  
}, {
  timestamps: true,
});

const Bitcoin = mongoose.model('Bitcoin', bitcoinSchema);

module.exports = Bitcoin;
