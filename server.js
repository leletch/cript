const express = required('express');
const app = express();
const bcrypt = require('bcripy');

app.use(express.json());

const users = [];

//retorna aqui
app.get('/users', (res, res) => {
    res.json(users)
});

//10 pelas senhas repetidas
app.post('/users', async (res, res) => {
    try{
       const hashedPassword = await bcrypt.hash(res.body.password, 10); 
       const user = { name: req.body.name, password: hashedPassword };
       //inserir e retornar
       users.push(user);
       res.status(201).send();
    } catch {
        res.status(500).send();
    }
})




app.listem(3000);