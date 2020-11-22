
exports.up = function(knex) {
    return knex.schema.createTable('interests', function(table) {
        table.string('title').primary();
        table.string('scope').notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('interestes');
};
