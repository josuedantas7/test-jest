describe('Testando dispositivos móveis', () => {
    it('deve existir um botão menu burguer', { viewportWidth: 375, viewportHeight: 667 }, () => {
        cy.visit('/');

        cy.getByData('botao-login').click();
        cy.getByData('email-input').type('josue@gmail.com');
        cy.getByData('senha-input').type('josue');
        cy.getByData('botao-enviar').click();

        cy.location('pathname').should('eq', '/home');

        cy.getByData('menu-burguer').click();


        cy.getByData('menu-lateral').find('a').eq(3).click();

        cy.location('pathname').should('eq', '/home/investimentos');
    })
})