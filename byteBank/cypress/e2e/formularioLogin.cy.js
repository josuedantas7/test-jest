describe('Formulário de login', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Não deve permitir um email inválido' , () => {
        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('josue@com')
        cy.getByData('senha-input').type('123456')
        cy.getByData('botao-enviar').click()

        cy.getByData('mensagem-erro').should('exist').and('have.text', 'O email digitado é inválido')
    })

    it ('Não deve permitir um campo em branco', () => {
        cy.getByData('botao-login').click()
        cy.getByData('senha-input').type('123456')
        cy.getByData('botao-enviar').click()

        cy.getByData('mensagem-erro').should('exist').and('have.text', 'O campo email é obrigatório')

    })
});