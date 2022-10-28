#language: pt

Funcionalidade: Carrinho de Compras

    Cenário: Incluir Produtos no Carrinho
        Dado que acesso o website
        E estou logado no website
        Quando adiciono o produto "Blouse" no carrinho
        E solicito visualizar o carrinho
        Então o item "Blouse" é exibido no carrinho

      Cenário: Validar Produtos no Pagamento
        Dado que acesso o website
        E estou logado no website
        E adiciono o produto "Blouse" no carrinho
        E adiciono o produto "Printed Dress" no carrinho
        Quando solicito avançar para o checkout
        Então o item "Blouse" é exibido no checkout
        E o item "Printed Dress" é exibido no checkout