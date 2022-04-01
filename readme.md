
Projeto para rodar consultas em vários bancos simultâneamente (inserir, deletar, selecionar ou atualizar)

Para usar é necessário instalar a dependência do MySql

```
npm i
```

Após instalar é necessário configurar os dados de acesso no arquivo config.json no diretório do autoSql

Para usar são necessários 3 parametros:

1 - npm run query

2 - "insert into {banco}.tabela (campos) values (valores)"

3 - nomes dos bancos a inserir separados por espaço

A estrutura fica dessa forma:
``` 
  npm run query "insert into {banco}.tabela (campos) values (valores)" banco1 banco2 banco3
```
