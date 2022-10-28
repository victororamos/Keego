#language: pt

Funcionalidade: Busca de Produtos

    Cenário: Busca de Produto com Sucesso
        Dado que acesso o website
        Quando solicito buscar o produto "Blouse"
        Então o produto "Blouse" é retornado com sucesso