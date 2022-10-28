import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import LoginPage from '../Login/LoginPage'
import CarrinhoPage from '../carrinho/CarrinhoPage'

Given('que acesso o website', () => {
    LoginPage.visitarURL()
})

When('estou logado no website', ()  => {
    LoginPage.acessarSignIn()
    LoginPage.preencherEmail('teste2021@teste.com.br')
    LoginPage.preencherSenha('teste')
    LoginPage.clicarRealizarLogin()
    LoginPage.validarLoginComSucesso()
})

When('adiciono o produto {string} no carrinho', produto => {
    CarrinhoPage.selecionarProduto(produto)
    CarrinhoPage.adicionarAoCarrinho()
    CarrinhoPage.validarMensagemItemAdicionado()
})

When('solicito visualizar o carrinho', () => {
    CarrinhoPage.visualizarCarrinho()
})

Then('o item {string} é exibido no carrinho', produtoAValidar => {
    CarrinhoPage.validarItemNoCarrinho(produtoAValidar)
})

When('solicito avançar para o checkout', () => {
    CarrinhoPage.avancarParaCarrinho()
    CarrinhoPage.avancarParaCheckout()
})

Then('o item {string} é exibido no checkout', produto => {
    CarrinhoPage.validarProdutoCheckout(produto)
})