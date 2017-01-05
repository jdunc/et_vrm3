'use strict';

/* eslint-disable camelcase */
/* eslint-disable max-len */

exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('adminlog').del()
        .then(() => knex.raw("ALTER SEQUENCE adminlog_id_seq RESTART WITH 1"))
        // .then(() => knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"))
        .then(() => knex('adminlog').insert({
            firstName: 'Shahzad',
            lastName: 'Khan',
            hashed_password: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',
            //khan123
            // created_at: new Date('2016-06-29 14:26:16 UTC'),
            // updated_at: new Date('2016-06-29 14:26:16 UTC')
        }));
};
