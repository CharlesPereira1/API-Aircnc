const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-qs6ix.mongodb.net/semana09?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// GET, POST, PUT, DELETE

// re.query = Acessar query params (para filtros)
// req.params = Acessar route params (para editar)
// req.body = Acessar corpo da requisição (para criação, edição)

app.use(cors())
app.use(express.json());
app.use('/files',  express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);
