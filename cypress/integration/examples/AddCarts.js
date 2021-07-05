/// <reference types="Cypress" />
describe('Click on card', function()
{
    const cards =[
        [
            "furysliver",
            "0000579f-7b35-4ed3-b44c-db2a538066fe",
            "front/0/0/"
          ],
          [
            "koroutfitter",
            "00006596-1166-4a79-8443-ca9f82e6db4e",
            "front/0/0/"
          ],
          [
            "koroutfitter",
            "00006596-1166-4a79-8443-ca9f82e6db4e",
            "front/0/0/"
          ], 
          [
            "koroutfitter",
            "00006596-1166-4a79-8443-ca9f82e6db4e",
            "front/0/0/"
          ], 
          [
            "koroutfitter",
            "00006596-1166-4a79-8443-ca9f82e6db4e",
            "front/0/0/"
          ],
          
    ]



    const assert = require('assert');
    const forEach = require('mocha-each');
    const trochekart= cards.slice(0,5)
    
    describe('clickoncard', () => {
      
      forEach(trochekart)
          .it('clickoncard', (cardname, cardId) => {
          cy.visit('https://toda.center/asr-paperbacks/');
          
          const cardselector = "#" + cardId;
          
          cy.get('[type=text]').clear()
          
          cy.get('.search').clear().type(cardname)
          cy.wait(2000)
          // cy.get('[alt="furysliver"]').click()
          cy.get('#detectorResults').find('span:nth-child(1)').click().should('have.length', '1')
          cy.wait(2000)
          
          
           
         
  
          
      
      });
     
     });
})