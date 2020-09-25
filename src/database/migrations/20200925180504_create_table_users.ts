exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id')
    table.string('email').unique().notNullable()
    table.string('image')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
