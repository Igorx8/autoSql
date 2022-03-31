const mysql = require('mysql');

async function rodaQueries()
{
  const BANCOS = process.argv.splice(3);
  const CONFIG = require('./config.json');
  const CONEXAO = mysql.createConnection(CONFIG)
      CONEXAO.connect((erro) => {
      if(erro){
        console.log('Não foi possível conectar');
      }
      else{
        for(let banco of BANCOS){

          banco = `\`${banco}\``

          const sql = process.argv[2].replace(/{banco}/g, banco);
          
          //roda a consulta para cada banco digitado
          CONEXAO.query(sql, (erro, resultado) => {
            if(erro){
              console.log(banco + ': '+erro);
            }
            else{
              //checa se a consulta foi bem sucedida
              if(resultado.constructor.name == 'OkPacket')
                {
                  console.log(banco + ': sucesso, '+resultado.affectedRows + ' linhas afetadas');
                }
                else
                {
                  console.log(banco)
                  console.table(resultado);
                }
            }
            if(banco === `\`${BANCOS[BANCOS.length - 1]}\``){
              process.exit(0);
            }
          })

        }
      }
    })
  }

  rodaQueries();