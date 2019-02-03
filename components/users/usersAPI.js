const express = require('express');

const router = express.Router();
const User = require('./user.js');

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

router.get('/',async(req, res) =>{
  // TODO: you need to get the data using database!
  // TODO: you need to send the response using express!
    let userList =  await User.User.select();
    res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.send(userList);
    
});

module.exports.usersAPI = router;
