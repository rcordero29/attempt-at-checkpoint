const connection = require('./db');

let getItems = function (req, res) {
  console.log('Inside GET /todos');
  let sql = 'select * from Todos';
  connection.query(sql, function (err, rows) {
    if (err) {
      res.status(500).json('no connection');
    } else {
      res.json(rows);
    }
  });
};
function remove(req, res) {
  console.log('Inside DELETE /remove');
  let sql = 'DELETE FROM Todos WHERE (idTodos = ?);';
  connection.query(sql, [req.params.id], function (err, rows) {
    if (err) {
      res.status(500).json('cannot remove');
    } else {
      console.log(rows);
      res.json('Todos Deleted');
    }
  });
}
let ShowFinishedTodos = function (req, res) {
  console.log('inside GET Todos/done');
  let sql = 'select * from done_todos '
  connection.query(sql, function (err, rows){
    if (err){
      res.status(500).json('cannot show finished todos')
    } else { 
      res.json(rows)

    }
  })
  res.json('Sort by todos that are finished');
};
let updateTodo = function (req, res) {
  console.log('inside PUT /update');
  let sql = 'INSERT INTO todos VALUES (?)'
  connection.query(sql, function (err, rows) {
    if (err) {
      res.status(500).json('cannot update ')
    } else {
      res.json(rows)
    }
  })
  res.json('Update status on Todo Item');
};

function newTodoItem(req, res) {
  console.log('Inside POST /NewTodo');
  console.log(req.body);
  let { todo, done_todos } = req.body;
  let sql = 'INSERT INTO Todos (TODO, DONE_TODOS) VALUES (?,?);';
  connection.query(sql, [todo, done_todos], function (err, rows) {
    if (err) {
      res.status(500).json('Cannot Add');
    } else {
      console.log(rows);
      res.json('Todo Added');
    }
  });
}

module.exports = {
  getItems,
  remove,
  ShowFinishedTodos,
  updateTodo,
  newTodoItem,
};
