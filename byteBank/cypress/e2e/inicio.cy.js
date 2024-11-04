
describe('Página inicial', () => {
  beforeEach(() => {
    cy.visit('/');
  })
  it('deve renderizar o h1', () => {
    cy.getByData('titulo-principal').contains(
      'Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!'
    );
  });
});
