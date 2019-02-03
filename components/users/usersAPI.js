const express = require('express');

const router = express.Router();

router.post('/',async (req, res) => {
  // TODO: you need to store the data using database!
  const SOMETHING = 'DATABASE ACCESS IS NECESSARY HERE';
  let name = req.body.name;
  let address = req.body.address;
  console.log(req.body.name);
 
   if(name.length === 0&&address.length === 0) {
        return res.send({
            error: "empty value"
        });
    }else{
    await User.User.insert(req.body);
    res.send({result: "OK"})
  }
});

router.get('/', (req, res) => {
  // TODO: you need to get the data using database!
  // TODO: you need to send the response using express!
});

module.exports.usersAPI = router;
