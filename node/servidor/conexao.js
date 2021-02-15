const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const ejs = require('ejs');
const cors = require('cors');
const app = express();

let conexao = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'fullstack'
})
conexao.connect((error) => {
  if (error) {
    console.log('Normal.' + error);
  }
  else {
    console.log('Milagre.');
  }
})
let sql = 'SELECT * FROM PRODUTO;';
conexao.query(sql, (erro, resultado) => {
  console.log(resultado);
}

)
const porta = 8000;

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(cors());
app.use((res, req, next) => {
  res.header('Acess-Control-Allow-Origin', '*');
  next();
})
app.get('/produto', (req, res) => {
  conexao.query(sql, (erro, resultado) => {
    res.send(resultado);
  })
})
app.post('/compra', (req, res) => {
  let post = req.body;
  let cliente = post.cliente;
  let produto = post.nome_produto;
  let valor = post.valor_unitario;

  let sql = `INSERT INTO pedido (cliente,nome_produto,valor_unitario) VALUES('${cliente}','${produto}','${valor}');`
  conexao.query(sql);
})

app.get("/pegarMensagem", (req, res) => {
  let sql = "SELECT nome, msg FROM comentario JOIN contato ON contato.id_contato = comentario.id_contato limit 5;";
  conexao.query(sql, (erro, resultado) => {
    res.send(resultado);
  });
});

app.post("/enviarMensagem", (req, res) => {

  let post = req.body;
  let nome = post.nome;
  let email = post.email;
  let msg = post.msg;

  let comando1 = `INSERT INTO contato (nome,email) VALUES('${nome}','${email}');`
  let comando2 = `SELECT id_contato FROM contato WHERE email ='${email}';`


  conexao.query(comando1);
  conexao.query(comando2, (erro, resultado) => {
    let comando3 = `INSERT INTO comentario (id_contato,msg) VALUES ('${resultado[0].id_contato}','${msg}');`
    conexao.query(comando3);
  })
})

app.listen(porta);