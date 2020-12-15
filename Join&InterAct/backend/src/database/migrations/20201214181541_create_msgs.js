
exports.up = function(knex) {
  return knex.schema.createTable('msgs', function (table) {
    table.string('sender').notNullable();
    table.string('receiver').notNullable();
    table.string('content').notNullable();
    table.string('date').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('msgs');
};
