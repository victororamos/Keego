const campoBusca = '#search_query_top'
const botaoBuscar = 'button[name="submit_search"]'
const labelResultadoBusca = 'span[class="lighter"]'
const nomeProdutoRetornado = 'a[class="product-name"]'

class ConsultaPage {
    static preencherBusca(produto) {
        cy.get(campoBusca).type(produto)
    }

    static clicarBuscar() {
        cy.get(botaoBuscar).click()
    }

    static validarBusca(produtoBusca) {
        cy.get(labelResultadoBusca).should('contain.text', produtoBusca)
        cy.get(nomeProdutoRetornado).should('contain.text', produtoBusca)
    }
}

export default ConsultaPage