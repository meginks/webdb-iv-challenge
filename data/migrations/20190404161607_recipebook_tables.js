
exports.up = function(knex, Promise) {
    return knex.schema 
    .createTable('dishes', table => {
        table.increments();
        table.string('dish_name', 128)
        .notNullable()
        .unique();
    }) // above creates dishes table 
    .createTable('recipes', table => {
        table.increments(); 
        table
        .string('recipe_name', 128)
        .notNullable()
        .unique(); 

        table
        .integer('dish_id') 
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('dishes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE'); 
    })
    .createTable('ingredients', table => {
        table.increments(); 
        table.string('ing_name', 128)
        .notNullable(); 
    }) 
    .createTable('recipe_ingredients', table => {
        table.increments(); 

        table
        .integer('recipe_id'); 
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE'); 

        table 
        .integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE'); 
    });
    


};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('recipe_ingredients') 
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
    .dropTableIfExists('dishes'); 
};
