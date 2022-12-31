describe('next-blog', () => {

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file

    cy.visit('http://localhost:4200/');
    cy.get('input').click();
    cy.get('input').type('sunt aut facere');

  });
});
