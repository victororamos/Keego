/// <reference types="cypress" />

const url = 'http://automationpractice.com/index.php'
const menuSignIn = 'a[class="login"]'
const campoEmail = '#email'
const campoSenha = '#passwd'
const botaoSignIn = '#SubmitLogin'
const areaUsuario = 'a[title="View my customer account"]'

class LoginPage {
    static visitarURL() {
        cy.visit(url)
    }

    static acessarSignIn() {
        cy.get(menuSignIn).click()
    }

    static preencherEmail(email) {
        cy.get(campoEmail).type(email)
    }

    static preencherSenha(senha) {
        cy.get(campoSenha).type(senha)
    }

    static clicarRealizarLogin() {
        cy.get(botaoSignIn).click()
    }

    static validarLoginComSucesso() {
        cy.get(areaUsuario).should('be.visible')
    }
}

export default LoginPage