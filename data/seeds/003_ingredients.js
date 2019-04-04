
exports.seed = function(knex, Promise) {
  return knex('ingredients') 
  .insert([
    {ing_name: 'noodles'}, 
    {ing_name: 'cheese'}, 
    {ing_name: 'broccoli'}, 
    {ing_name: 'thai chili'}, 
    {ing_name: 'potato'}, 
    {ing_name: 'tomato'}, 
    {ing_name: 'vegetable broth'}
  ]);
  
};
