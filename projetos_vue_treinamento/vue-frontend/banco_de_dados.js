const sqlite3 = require('sqlite3').verbose()

const dbsource = 'db.sqlite'

let banco_de_dados = new sqlite3.Database(dbsource, (err) => {
    if(err){
        console.error('Falha na criação de um novo banco de dados!', err.message)
        throw err
    }else{
        console.log('Conectado ao banco de dados!')
        banco_de_dados.run(`CREATE TABLE tarefas (
            titulo text, 
            feito BOOLEAN,
            id INTEGER PRIMARY KEY AUTOINCREMENT
            )`,
        (err) => {
            if (err) {
                console.log('Tabela já está criada!')
                var insert = 'INSERT or REPLACE INTO tarefas (titulo, feito) VALUES (?,?)'
                banco_de_dados.run(insert, ["Primeira tarefa",1])
                banco_de_dados.run(insert, ["Segunda", 0])
            }
        });  
    }
});

module.exports = banco_de_dados //exportando o módulo