#language: pt

Funcionalidade: API Trello

    Cenário: API Trello - Campo Name da List
        Dado que realizo o request "GET" para validar o name da list
        Então o retorno do request "GET" tem o retorno 200