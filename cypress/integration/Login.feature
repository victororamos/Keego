#language: pt

Funcionalidade: Login

    Cenário: Realizar Login com Sucesso
        Dado que acesso o website
        E seleciono acessar o login
        E preencho o e-mail com "teste2021@teste.com.br"
        E preencho a senha com "teste"
        Quando solicito realizar o login
        Então o login é realizado com sucesso