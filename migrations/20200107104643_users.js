
exports.up = function(knex) {
  return knex.schema.createTable('users', (user) => {
      user.increments('id')
      user.string('username').notNullable().defaultsTo('')
      user.string('password_digest').notNullable().defaultsTo('')
      user.string('avatar').notNullable().defaultsTo('')
      user.integer('zipcode').notNullable().defaultsTo(0)
      user.integer('points').defaultsTo(0)
      user.integer('level').defaultsTo(1)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableifExists('users')
};
