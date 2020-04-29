const todos = require('./todos');
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3500;

app.use(cors());
app.use(express.json());

app.use(todos);
app.get('/', (req, res) => res.send('Test'));

app.listen(PORT, () => console.log('App listen at http://localhost:3500'));
