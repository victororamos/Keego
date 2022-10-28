/// <reference types="cypress" />

class APIRequest {
  static APITrelloRetorno(metodo) {
    return cy.request({
      method: metodo,
      url: 'https://api.trello.com/1/actions/592f11060f95a3d3d46a987a',
    })
  }
}

export default APIRequest;