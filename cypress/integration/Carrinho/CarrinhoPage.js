/// <reference types="cypress" />

const botaoAdicionarCarrinho = 'Add to cart'
const mensagemItemAdicionado = 'Product successfully added to your shopping cart'
const botaoFecharItemAdicionado = 'span[title="Close window"]'
const areaCarrinho = 'Cart'
const logo = '.logo'
const produtoNoCarrinho = 'a[class="cart_block_product_name"]'
const botaoAvancarCheckout = 'a[title="Proceed to checkout"]'
const botaoAvancarEndereco = 'button[name="processAddress"]'
const botaoAvancarEntrega = 'button[name="processCarrier"]'
const checkboxTermos = '#cgv'
const produtosNoCheckout = 'tbody'

class CarrinhoPage {
    static selecionarProduto(produto) {
        cy.get(logo).click()
        cy.get('img[alt="' + produto + '"]').eq(0).click({ force: true })
    }

    static adicionarAoCarrinho() {
        cy.contains('span', botaoAdicionarCarrinho).click()
    }

    static validarMensagemItemAdicionado() {
        cy.contains(mensagemItemAdicionado).should('be.visible')
        cy.get(botaoFecharItemAdicionado).click()
    }

    static visualizarCarrinho() {
        cy.contains('b', areaCarrinho).trigger('mouseover')
    }

    static validarItemNoCarrinho(produtoAValidar) {
        cy.get(produtoNoCarrinho).should('have.text', produtoAValidar)
    }

    static avancarParaCarrinho() {
        cy.contains('b', areaCarrinho).click()
    }

    static avancarParaCheckout() {
        cy.get(botaoAvancarCheckout).eq(1).click()
        cy.get(botaoAvancarEndereco).click()
        cy.get(checkboxTermos).click()
        cy.get(botaoAvancarEntrega).click()
    }

    static validarProdutoCheckout(produto) {
        cy.get(produtosNoCheckout).should('contain.text', produto)
    }
}

export default CarrinhoPage

