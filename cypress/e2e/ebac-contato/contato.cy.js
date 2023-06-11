/// <reference types="cypress" />

describe("deve renderizar corretamente ", ()=>{
    beforeEach(()=>{
        cy.visit("https://agenda-contatos-react.vercel.app/")
    })

    it("deve verificar se há 3 items", ()=>{
        cy.get(".contato").should("have.length", 3)
    })

    it("deve verificar se o item esta sendo incluido corretamente", ()=>{
        cy.get('[type="text"]').type("Emily Caroline")
        cy.get('[type="email"]').type("emilycaroline@teste.com")
        cy.get('[type="tel"]').type("876039849")
        cy.get('.adicionar').click()
        cy.get(".contato").should("have.length", 4)
    })
    
    it("deve verificar se o item esta sendo editado corretamente", ()=>{
        cy.get(".edit").first().click()
          cy.get('[type="text"]').clear().type("Emily")
           cy.get('.alterar').click()
        cy.get("ul > li").should('contain.text', 'Emily')
    })

    it("deve verificar se o item esta sendo excluido corretamente", ()=>{
         cy.get(".delete").last().click()
          cy.get(".contato").should("have.length", 3)
    })
})