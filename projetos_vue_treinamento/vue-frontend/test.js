const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const min = 1;
const max = 100;
const min2 = 0;
const max2 = 1;
const numero = Math.floor(Math.random() * (+max - +min)) + +min; 
const numero2 = Math.floor(Math.random() * (+max2 - +min2)) + +min2;

chai.use(chaiHttp);

describe('Tarefas da api', () => {
    describe('/GET tarefas', () =>{
        it('Testando o método GET nas tarefas', (done) => {
            chai.request('http://localhost:3000')
                .get('/tarefas')//testando o endpoint
                .end((err, res) => {
                    res.should.have.status(200);//testa se retorna status code 200
                    res.body.should.be.a('Object');//testa se o retorno é do tipo json
                done();
                }); 
        });
    });
    describe('/POST tarefas', () => {
        it('Testa o método POST nas tarefas', (done) => {
            let novatarefa = {
                titulo: "Tarefa" + numero,
                feito: 1
            }
            chai.request('http://localhost:3000')
            .post('/tarefas')
            .send(novatarefa)
            .end((err, res) => {
                res.should.have.status(200);
            done();
            });
        });
    });
})

