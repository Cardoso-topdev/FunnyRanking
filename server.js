const fs = require('fs');

let data = fs.readFileSync('data.json');
let usersList = JSON.parse(data);

const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const server = app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get("/user-info", (req, res) => {
  res
    .status(200)
    .json({ name: "test", email: "test@gmail.com" });
});

/**
 * create a GET rank-list API
 * @param {Number} [order] - order type. 0 : desc, 1: asc
 */
app.get("/rank-list", (req, res) => {
  var orderType = req.query.order ?? 0;
  console.log(req.query.order, orderType, (orderType === "0"))
  let retData = usersList.map( (user, idx) => {
    let userFunnyCnt = 0
    user.conversations?.forEach(conversation => {
      conversation?.sentences?.forEach( sentence => {
        if ( sentence.funny)
          userFunnyCnt++
      });
    })
    return {...user, funnyCnt: userFunnyCnt}
  }).sort( (user1, user2) => (
    (orderType === "0") ? (user1.funnyCnt - user2.funnyCnt) : (user2.funnyCnt - user1.funnyCnt) 
  )).map( (user, idx) => (
    {...user, rank: (orderType !== "0") ? idx + 1 : usersList.length - idx}
  ))

  res
    .status(200)
    .json(retData);
});
// Add any routes you need
// ------ HERE -------

module.exports = server;
