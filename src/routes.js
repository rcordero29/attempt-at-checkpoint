let express = require('express');
// const { route } = require('express/lib/application');

let router = express.Router();
let controller = require('./controllers');

//get
router.get('/todos', controller.getItems);

// list todo if finished

router.get('/todos/:done', controller.ShowFinishedTodos);

//delete
router.delete('/remove/:id', controller.remove);

//update
router.put('/update', controller.updateTodo);

//insert
router.post('/NewTodo', controller.newTodoItem);

module.exports = router;
