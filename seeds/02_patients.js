'use strict';

/* eslint-disable camelcase */
/* eslint-disable max-len */

exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('userlog').del()
        .then(() => knex.raw("ALTER SEQUENCE userlog_id_seq RESTART WITH 1"))
        // .then(() => knex.raw("SELECT setval('uuserlogsers_id_seq', (SELECT MAX(id) FROM users));"))
        .then(() => knex('userlog').insert({
            firstName: 'Joanne',
            lastName: 'Rowling',
            // created_at: new Date('2016-06-29 14:26:16 UTC'),
            // updated_at: new Date('2016-06-29 14:26:16 UTC')
        }));
};
