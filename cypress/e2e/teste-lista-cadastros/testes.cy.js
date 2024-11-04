describe("Teste para a home", () => {
    beforeEach(() => {
        cy.visit("https://agenda-contatos-react.vercel.app/");
    });
    // -- TESTE DE INCLUSÃO
    it("Deve incluir informacoes no formulario", () => {
      cy.get('input[type="text"]').type("Fernando Bordin"); 
      cy.get('input[type="email"]').type("fernandobordin07@hotmail.com"); 
      cy.get('input[type="tel"]').type("11996772016"); 
      cy.contains("Adicionar").click(); 
      cy.screenshot("teste-incluir"); 
    });
    // -- TESTE DE EDIÇÃO
    it("Deve alterar a informacao da lista", () => {
      cy.get(":nth-child(2) > .sc-gueYoa > .edit").click(); 
      cy.get('input[type="text"]').clear().type("Paulo Bordin"); 
      cy.get('input[type="email"]').clear().type("paulo@ebac.com.br"); 
      cy.get('input[type="tel"]').clear().type("11956960189"); 
      cy.get(".alterar").click(); 
      cy.screenshot("teste-editar"); 
    });
    // -- TESTE DE REMOÇÃO
    it("Deve remover um contato da lista", () => {
      cy.get(":nth-child(3) > .sc-gueYoa > .delete").click(); 
      cy.screenshot("teste-remover"); 
    });
});