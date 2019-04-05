
exports.seed = function(knex, Promise) {
  return knex('recipes').insert([
    {recipe_name: 'mac and cheese', dish_id: 1}, 
    {recipe_name: 'spaghetti', dish_id: 1}, 
    {recipe_name: 'potato soup', dish_id: 2}, 
    {recipe_name: 'tomato soup', dish_id: 2}, 
    {recipe_name: 'Thai stirfry', dish_id: 3}, 
    {recipe_name: 'Sichuan stirfry', dish_id: 3}
  ])
};
