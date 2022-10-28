import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import LoginPage from './LoginPage'

Given('que acesso o website', () => {
    LoginPage.visitarURL()
})

When('seleciono acessar o login', () => {
    LoginPage.acessarSignIn()
})

When('preencho o e-mail com {string}', email => {
    LoginPage.preencherEmail(email)
})

When('preencho a senha com {string}', senha => {
    LoginPage.preencherSenha(senha)
})

When('solicito realizar o login', () => {
    LoginPage.clicarRealizarLogin()
})

Then('o login é realizado com sucesso', () => {
    LoginPage.validarLoginComSucesso()
})