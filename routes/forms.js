'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.post('/adult', (req, res, next) =>{
  console.log('post to adult');
  if(req.body.pay === 'now'){ // if they are paying now, include paid option in database submission
    console.log(req.body);
    res.send(req.body);
  }else{
    console.log('pay later',req.body);
    knex('userlog').insert({ //submit database information for dashboard
      'firstName' : req.body['first-name'],
      'lastName' : req.body['last-name'],
      'appointment-time' : req.body['appointment-time'],
      'paid' : 'Not Paid'
    })
    .returning('*').then((info) => {
      let response = {};
      console.log(info);
      res.status(200);
      res.send(info);
    });
  }
});

router.post('/child', (req, res, next) =>{
  console.log('post to child');
  if(req.body.pay === 'now'){ // if they are paying now, include paid option in database submission
    console.log(req.body);
    res.send(req.body);
  }else{
    console.log('pay later',req.body);
    knex('userlog').insert({ //submit database information for dashboard
      'firstName' : req.body['child-first-name'],
      'lastName' : req.body['child-last-name'],
      'appointment-time' : req.body['appointment-time'],
      'paid' : 'Not Paid'
    })
    .returning('*').then((info) => {
      let response = {};
      console.log(info);
      res.status(200);
      res.send(info);
    });
  }
});

router.get('/dashboard', (req, res, next) =>{
  knex('userlog')
  .then((userInfo) => {
    console.log('u',userInfo);
    let sendInfo = [];
    for (var i = 0; i < userInfo.length; i++) {
      var appointmentTime = tConvert(userInfo[i]['appointment-time']);
      var parsedInfo = {};
      parsedInfo['firstName'] = userInfo[i].firstName ;
      parsedInfo['lastName'] = userInfo[i].lastName;
      parsedInfo['appointment-time'] = appointmentTime;
      parsedInfo['created_at'] = userInfo[i]['created_at'].toLocaleTimeString();
      parsedInfo['paid'] = userInfo[i].paid;
      sendInfo.push(parsedInfo);
    }
    console.log('p',sendInfo);
    res.render('FrontEnd/index', {
      data: sendInfo,
    });
  })
});
// router.post('/items', (req, res) => {
//   console.log('HEADERS', req.headers);
//   console.log('getting this!', req.body);
//   knex('items').insert(req.body)
//   .returning('*').then((items) => {
//     res.send(items[0]);
//   });
// });

// router.patch('/items/:id', (req, res) => {
//   knex('items').where('id', req.params.id).update(req.body)
//   .returning('*').then((items) => {
//     res.send(items[0]);
//   });
// });
//
// router.delete('/items/:id', (req, res) => {
//   knex('items').where('id', req.params.id).first().then((item) => {
//     knex('items').where('id', req.params.id).del().then(() => {
//       delete item.id;
//       res.send(item);
//     });
//   });
// });

function tConvert (time) {
  // Check correct time format and split into components
  time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

  if (time.length > 1) { // If time format correct
    time = time.slice (1);  // Remove full string match value
    time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }
  return time.join (''); // return adjusted time or original string
}

module.exports = router;
