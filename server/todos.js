const express = require('express');
const router = express.Router();
const pool = require('./db');

router.post('/todos', async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      'INSERT INTO todo (description) VALUES($1) RETURNING *',
      [description]
    );

    res.json(newTodo.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

router.get('/todos', async (req, res) => {
  try {
    const todos = await pool.query('SELECT * FROM todo');
    res.json(todos.rows);
  } catch (error) {
    console.error(error.message);
  }
});

router.get('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query('SELECT * FROM todo WHERE todo_id = $1', [
      id,
    ]);

    console.log(todo.rows);
    res.json(todo.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

router.put('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updatedTodo = await pool.query(
      'UPDATE todo SET description = $1 WHERE todo_id = $2 RETURNING *',
      [description, id]
    );

    res.json(updatedTodo.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

router.delete('/todos/:id', async (res, req) => {
  console.log('DELETE', res.params);

  try {
    const { id } = res.params;
    const deletedTodo = await pool.query(
      'DELETE FROM todo WHERE todo_id = $1 RETURNING *',
      [id]
    );

    req.json(deletedTodo.rows[0]);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
