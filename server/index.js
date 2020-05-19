const express = require('express');
const app = express();
app.use(express.json())

const ctrl = require('./controller')

//get all the users in the users.json file
app.get('/api/users', ctrl.getAllUsers);

//get a specific user
app.get('/api/user/:id', ctrl.getUserById);




app.listen(3000, () => console.log('server is listening on port 3000'))