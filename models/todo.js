const knex = require('./knex')

function getAllTodo(query){
  if (query) {
    console.log(query);
    return knex("todos").select('*').where('title', 'LIKE', `%${query}%`);
  } else {
    return knex("todos").select('*');
  } 
}

function createTodo(todo) {
  return knex("todos").insert(todo);
}

function updateTodo(id, todo){
  return knex("todos").where('id', id).update(todo);
}

function deleteTodo(id){
  return knex("todos").where('id', id).del();
}


module.exports = {
  getAllTodo,
  createTodo,
  updateTodo,
  deleteTodo
}