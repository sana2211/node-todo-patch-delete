
exports.up = async function (knex, Promise) {
    return knex.schema.createTable("todo", function (table) {
      table.increments('id')
      table.string("title")
      table.boolean("completed")
    });
  };

exports.down = function(knex) {
  
};
