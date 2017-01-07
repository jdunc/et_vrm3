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

router.get('/children', (req, res, next) =>{
  res.render('FrontEnd/child')
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

module.exports = router;
