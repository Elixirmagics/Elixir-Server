const router = require('express').Router();
let Bitcoin = require('../models/Bitcoin');

router.route('/').get((req, res) => {
  Bitcoin.find()
    .then(bitcoin => res.json(bitcoin))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const coin = req.body.coin;
  const symbol = req.body.symbol;
  const amount = Number(req.body.amount);
  const address = (req.body.address);

  const newBitcoin = new Bitcoin({
    coin,
    symbol,
    amount,
    address,
  });

  newBitcoin.save()
  .then(() => res.json('Bitcoin added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Bitcoin.findById(req.params.id)
    .then(bitcoin => {
      bitcoin.coin = req.body.coin;
      bitcoin.symbol = req.body.symbol;
      bitcoin.amount = Number(req.body.amount);
      bitcoin.address = req.body.address;

      bitcoin.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
