
exports.up = function(knex) {
  return knex.schema.createTable('users', function(table) {
      table.string('id').primary().notNullable();
      table.string('name').notNullable();
      table.specificType('friends_ids', 'string[]').references('id').inTable('users');
      table.specificType('blocked_ids', 'string[]').references('id').inTable('users');
      table.specificType('interests', 'string[]').references('title').inTable('interests');
      table.specificType('activities', 'string[]').references('title').inTable('activities');
      table.string('location');
      table.string('contact');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
