'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');
const bcrypt = require('bcrypt-as-promised');

router.post('/adult', (req, res, next) => {
    console.log('post to adult');
    if (req.body.pay === 'now') { // if they are paying now, include paid option in database submission
        console.log(req.body);
        res.send(req.body);
    } else {
        console.log('pay later', req.body);
        knex('userlog').insert({ //submit database information for dashboard
                'firstName': req.body['first-name'],
                'lastName': req.body['last-name'],
                'appointment-time': req.body['appointment-time'],
                'paid': 'Not Paid'
            })
            .returning('*').then((info) => {
                let response = {};
                console.log(info);
                res.status(200);
                res.send(info);
            });
    }
});

router.post('/child', (req, res, next) => {
    console.log('post to child');
    if (req.body.pay === 'now') { // if they are paying now, include paid option in database submission
        console.log(req.body);
        res.send(req.body);
    } else {
        console.log('pay later', req.body);
        knex('userlog').insert({ //submit database information for dashboard
                'firstName': req.body['child-first-name'],
                'lastName': req.body['child-last-name'],
                'appointment-time': req.body['appointment-time'],
                'paid': 'Not Paid'
            })
            .returning('*').then((info) => {
                let response = {};
                console.log(info);
                res.status(200);
                res.send(info);
            });
    }
});

router.post('/dashboard', (req, res, next) => {
  const {
      user_name,
      password
  } = req.body;
  if (!user_name || user_name.trim() === '') {
      const err = new Error('user_name must not be blank');
      err.status = 400;
      return next(err);
  }
  if (!password || password.trim() === '') {
      const err = new Error('Password must not be blank');
      err.status = 400;
      return next(err);
  }
  let user;
  knex('users')
      .where('user_name', user_name)
      .first()
      .then((row) => {
          if (!row) {
              const err = new Error('Unauthorized');
              err.status = 401;

              throw err;
          }
          user = row;
          return bcrypt.compare(password, row.hashed_password);
      })
      .then(() => {
        //render the dashboard page
          knex('userlog').orderBy('created_at', 'desc')
              .then((userInfo) => {
                  console.log('u', userInfo);
                  let sendInfo = [];
                  for (var i = 0; i < userInfo.length; i++) {
                      var today = new Date();
                      today = today.toDateString();
                      var checkInTime = userInfo[i]['created_at'].toDateString();
                      if (today === checkInTime) {
                          var appointmentTime = tConvert(userInfo[i]['appointment-time']);
                          var parsedInfo = {};
                          parsedInfo['firstName'] = userInfo[i].firstName;
                          parsedInfo['lastName'] = userInfo[i].lastName;
                          parsedInfo['appointment-time'] = appointmentTime;
                          parsedInfo['created_at'] = userInfo[i]['created_at'].toLocaleTimeString();
                          parsedInfo['paid'] = userInfo[i].paid;
                          sendInfo.push(parsedInfo);
                      }
                  }
                  console.log('p', sendInfo);
                  res.render('FrontEnd/index', {
                      data: sendInfo,
                  });
              }) //end of registering the dashboard page
      })
      .catch(bcrypt.MISMATCH_ERROR, () => {
          const err = new Error('Unauthorized');
          err.status = 401;
          throw err;
      })
      .catch((err) => {
          next(err);
      });


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

function tConvert(time) {
    // Check correct time format and split into components
    time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) { // If time format correct
        time = time.slice(1); // Remove full string match value
        time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
        time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(''); // return adjusted time or original string
}

module.exports = router;
