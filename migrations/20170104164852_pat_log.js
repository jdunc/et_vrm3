'use strict';

exports.up = function(knex) {
    return knex.schema.createTable('userlog', (table) => {
        table.increments();
        table.string('firstName').notNullable().defaultTo('');
        table.string('lastName').notNullable().defaultTo('');
        table.time('appointment-time');
        table.string('paid').defaultTo(false);
        // table.integer('adminlog_id').unsigned().index().references('id').inTable('adminlog').onDelete('CASCADE');
        table.timestamps(true, true);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('userlog');
};
