'use strict';

exports.up = function(knex) {
    return knex.schema.createTable('adminlog', (table) => {
        table.increments();
        table.string('firstName').notNullable().defaultTo('');
        table.string('lastName').notNullable().defaultTo('');
        table.specificType('hashed_password', 'char(60)').notNullable();
        // table.time('check-in-time');
        table.boolean('admin').notNullable().defaultTo(false);
        table.timestamps(true, true);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('adminlog');
};
