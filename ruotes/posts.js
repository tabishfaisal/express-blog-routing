const express = require('express');
const ruoter = express.Router();


ruoter.get('/', (req, res) => {
    res.send('Lista dei post');
});

ruoter.get('/:id', (req, res) => {
    const id= req.params.id;
    res.send(`Dettagli del post ${id}`);
});

ruoter.post('/', (req, res) => {
    res.send('Creazione di un nuovo post');
});

ruoter.put('/:id', (req, res) => {
    const id= req.params.id;
    res.send(`Aggiornamento completo del post ${id}`);
});

ruoter.patch('/:id', (req, res) => {
    const id= req.params.id;
    res.send(`Modifica parziale del post ${id}`);
});

ruoter.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Cancellazione del post ${id}`);
});

module.exports = ruoter;