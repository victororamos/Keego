/// <reference types="cypress" />
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import APIRequest from './APIRequests'

When('que realizo o request {string} para validar o name da list', metodo => {
    APIRequest.APITrelloRetorno(metodo).then((response) => {
        expect(response.body.data.list.name).is.eq('Professional')
    })
})

Then('o retorno do request {string} tem o retorno 200', metodo => {
    APIRequest.APITrelloRetorno(metodo).then((response) => {
        expect(response.status).to.eq(200)
    })
})