
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl=>{
      tbl.increments();
      tbl.string('user', 128).notNullable().unique();
      tbl.string('password', 128).notNullable();
      tbl.string('dept', 128).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
