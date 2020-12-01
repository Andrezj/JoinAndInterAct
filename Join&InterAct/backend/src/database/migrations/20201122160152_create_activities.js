
exports.up = function(knex) {
    return knex.schema.createTable('activities', function(table) {
        table.string('title').primary();
        table.string('scope').notNullable();
        table.string('location').notNullable();
    });

};

exports.down = function(knex) {
    return knex.schema.dropTable('activities');
};
