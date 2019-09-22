const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
//função que ajuda a gerar nome aleatório
const min = 1;
const max = 100;
const numero = Math.floor(Math.random() * (+max - +min)) + +min; 
const numero2 = Math.floor(Math.random() * (+max - +min)) + +min;

chai.use(chaiHttp);

describe('Usuários da api', () => {
    describe('/GET usuarios', () =>{
        it('Testando o método GET nos usuários', (done) => {
            chai.request('http://localhost:8000')
                .get('/api/usuarios')//testando o endpoint
                .end((err, res) => {
                    res.should.have.status(200);//testa se retorna status code 200
                    res.body.should.be.a('Object');//testa se o retorno é do tipo json
                done();
                }); 
        });
    });

    describe('/POST usuarios', () => {
        it('Testa o método POST nos usuários', (done) => {
            let novousuario = {
                name: "Usuario" + numero,
                email: "usuario" + numero + "@email",
                password: "minhasenhasecreta"
            }
            chai.request('http://localhost:8000')
            .post('/api/usuarios')
            .send(novousuario)
            .end((err, res) => {
                res.should.have.status(200);
            done();
            });
        });
    });
//pensar em como resolver esse teste, dado que ele tá pegando o primeiro elemnto dentro do array, o qual 
//é a mensagem
/*
    describe('/GET/:id usuario', () => {
        it('GET em um usuario especifico pelo id', (done) => {
            let id_ = numero2;
                chai.request('http://localhost:8000')
                .get('/api/usuarios/' + id_)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('id_').eql(id_);
                    res.body.should.have.property('nome');
                    res.body.should.have.property('email');
                    res.body.should.have.property('password');
                done();
                });
        });
    });
    */
})

