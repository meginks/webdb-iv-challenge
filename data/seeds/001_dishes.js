
exports.seed = function(knex, Promise) {
  
  return knex('dishes').insert([
    {dish_name: 'pasta'}, 
    {dish_name: 'soup'}, 
    {dish_name: 'stirfry'}
  ])
};
