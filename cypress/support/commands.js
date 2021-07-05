// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

const { should } = require("chai")

//
Cypress.Commands.add('selectProduct', (productName) => { 
    
    cy.get('h4.card-title').each(($el, index, $list) => {
        
        if($el.text().includes(productName))
        {
            cy.get('button.btn.btn-info').eq(index).click()
        }
        
        
        })


 })
 
 Cypress.Commands.add('addCards', (cardName) => { 
    
    cy.get('.search').clear().type(cardName).each(($el, index, $list) => {
        cy.get('[data-cy=detector-results] > :nth-child(1)').click()
        
       
         })


 })
 Cypress.Commands.add('checkId', (cardId) => { 
    
    cy.get('#acceptedResults > span:nth-child(1)').each(($el, index, $list) => {
        cy.find('.lazyloaded').should('have.id',"#6ea1ee60-5644-4f78-913d-32c36065957f")
        
       
         })
        })
 
//  .find('.lazyloaded').should('have.id',"6ea1ee60-5644-4f78-913d-32c36065957f")
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
