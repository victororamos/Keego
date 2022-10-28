import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import LoginPage from '../Login/LoginPage'
import ConsultaPage from '../consulta/ConsultaPage'

Given('que acesso o website', () => {
    LoginPage.visitarURL()
})

When('solicito buscar o produto {string}', produto => {
    ConsultaPage.preencherBusca(produto)
    ConsultaPage.clicarBuscar()
})

Then('o produto {string} é retornado com sucesso', produto => {
    ConsultaPage.validarBusca(produto)
})