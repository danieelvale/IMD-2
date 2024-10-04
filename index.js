const express = require('express')
const { v4: uuidv4 } = require('uuid');
const app = express()
app.use(express.json())

const produtos = {}


app.get('/', (req, res) => {
res.send('Hello world')
})

app.get('/produtos', (req, res) => {
res.json({produtos : Object.values(produtos)})
})

app.post('/produtos', (req, res) => {
idProduto = uuidv4()
const produto = req.body
produto.id = idProduto
produtos[idProduto] = produto
res.json({msg : "Produto adcionado com sucesso!"})
})

app.delete('/produtos/:id', (req, res) => {
const id = req.params.id
if ( id && produtos[id]){
delete produtos[id]
res.json({msg: "Produto deletado com sucesso!"})

}else{
res.status(400).json({msg: "Produto não encontrado!"})
}
})

app.put('/produtos/:id', (req, res) => {
const id = req.params.id
if (id && produtos[id]){
produto = req.body
produto.id = id
produtos[id] = produto
res.json({msg : "Produto atualizado com sucesso!"})

}else{
res.status(400).json({msg : "Produto não encontrado"})
}
})

const server = app.listen(8080, () => {
console.log("Servidor pronto na porta 8080");
});

module.exports = server;
