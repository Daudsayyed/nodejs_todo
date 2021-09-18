const express = require('express');
const port = 9000;
const app = express();
const Todo = require('./models/todo');

app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.get('/api/v1/todo/index', async (request, response) => {
  try {
    const search = request.query.search ? request.query.search : null;
    const results = await Todo.getAllTodo(search);
    response.status(200).json({'code':200, 'message': '', 'data':results});
  } catch (e) {
    console.log(e);
    response.status(500).json({'code':500, 'message':'Oops something went wrong'});
  }
});

app.post('/api/v1/todo', async (request, response) => {
  try {
    var data = request.body;
    const title = data.title ? data.title.trim() : null;
    if (!title) {
      response.status(400).json({'code':400, 'message': 'Invalid Input'});
    }
    const result = await Todo.createTodo(data)
    if(!result) {
      response.status(500).json({'code':500, 'message': 'Failed to create task'});
    } else {
      response.status(200).json({'code':200, 'message': 'Successfully created', 'data':{'id':result[0], 'title':title}});
    }
    
  }catch (e) {
    console.log(e);
    response.status(500).json({'code':500, 'message':'Oops something went wrong'});
  } 
});

app.put('/api/v1/todo/:id', async (request, response) => {
  try {
    var data = request.body;
    var id = request.params.id;
    const title = data.title ? data.title.trim() : null;
    if (!title) {
      response.status(400).json({'code':400, 'message': 'Invalid Input'});
    }
    const result = await Todo.updateTodo(id, data)
    if(!result) {
      response.status(500).json({'code':500, 'message': 'Failed to update task'});
    } else {
      response.status(200).json({'code':200, 'message': 'Successfully updated', 'data':{'id':id, 'title':title}});
    }
  }catch (e) {
    console.log(e);
    response.status(500).json({'code':500, 'message':'Oops something went wrong'});
  }
});

app.delete('/api/v1/todo/:id', async (request, response) => {
  try {
    var id = parseInt(request.params.id);
    await Todo.deleteTodo(id)
    response.status(200).json({'code':200, 'message': 'Successfully deleted'});
  }catch (e) {
    console.log(e);
    response.status(500).json({'code':500, 'message':'Oops something went wrong'});
  }
});

app.get('*', function(req, res){
  res.status(404).json({'code':400, 'message':'Not Found'});
});

app.listen(port);
