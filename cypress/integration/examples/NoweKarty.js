
/// <reference types="Cypress" />




describe('addCards',function() {

    before(() => {
      
        // runs once before all tests in the block
        cy.fixture('example').then(function(data)
        {
            this.data=data
        })
    })
    
    it('addCards', function(){
    cy.visit('https://toda.center/asr-paperbacks/')
    cy.viewport(1920, 1080)
    this.data.cardName.forEach(function(element){
        cy.addCards(element)
        
    })
    
    cy.get('#acceptedResults > span:nth-child(1)').find('.lazyloaded').should('have.id',"6ea1ee60-5644-4f78-913d-32c36065957f")
    cy.get('#acceptedResults > span:nth-child(2)').find('.lazyloaded').should('have.id',"6ea1ee60-5644-4f78-913d-32c36065957f")
    cy.get('#acceptedResults > span:nth-child(3)').find('.lazyloaded').should('have.id',"1c68954c-4bab-4973-9819-ecd084438303")
    cy.get('#acceptedResults > span:nth-child(4)').find('.lazyloaded').should('have.id',"1c68954c-4bab-4973-9819-ecd084438303")
    cy.get('#acceptedResults > span:nth-child(5)').find('.lazyloaded').should('have.id',"87f7a3f3-517a-4f7a-bb28-94f11790b598")
    cy.get('#acceptedResults > span:nth-child(6)').find('.lazyloaded').should('have.id',"87f7a3f3-517a-4f7a-bb28-94f11790b598")
    cy.get('#acceptedResults > span:nth-child(7)').find('.lazyloaded').should('have.id',"87f7a3f3-517a-4f7a-bb28-94f11790b598")
    cy.get('#acceptedResults > span:nth-child(8)').find('.lazyloaded').should('have.id',"87f7a3f3-517a-4f7a-bb28-94f11790b598")
    
    cy.get('#acceptedResults > span:nth-child(9)').find('.lazyloaded').should('have.id',"11568cdf-6148-494c-8b98-f5ca5797d775")
    
    cy.get('#acceptedResults > span:nth-child(10)').find('.lazyloaded').should('have.id',"11568cdf-6148-494c-8b98-f5ca5797d775")
    cy.get('#acceptedResults > span:nth-child(11)').find('.lazyloaded').should('have.id',"11568cdf-6148-494c-8b98-f5ca5797d775")
    cy.get('#acceptedResults > span:nth-child(12)').find('.lazyloaded').should('have.id',"11568cdf-6148-494c-8b98-f5ca5797d775")
    cy.get('#acceptedResults > span:nth-child(13)').find('.lazyloaded').should('have.id',"ee834e27-595d-4d12-8e69-e94e84ef337a")
    cy.get('#acceptedResults > span:nth-child(14)').find('.lazyloaded').should('have.id',"ee834e27-595d-4d12-8e69-e94e84ef337a")
    cy.get('#acceptedResults > span:nth-child(15)').find('.lazyloaded').should('have.id',"ee834e27-595d-4d12-8e69-e94e84ef337a")
    cy.get('#acceptedResults > span:nth-child(16)').find('.lazyloaded').should('have.id',"ee834e27-595d-4d12-8e69-e94e84ef337a")
    cy.get('#acceptedResults > span:nth-child(17)').find('.lazyloaded').should('have.id',"b851c41b-ed73-4ee4-9063-544f97f35f67")
    cy.get('#acceptedResults > span:nth-child(18)').find('.lazyloaded').should('have.id',"b851c41b-ed73-4ee4-9063-544f97f35f67")
    cy.get('#acceptedResults > span:nth-child(19)').find('.lazyloaded').should('have.id',"b851c41b-ed73-4ee4-9063-544f97f35f67")
    cy.get('#acceptedResults > span:nth-child(20)').find('.lazyloaded').should('have.id',"b851c41b-ed73-4ee4-9063-544f97f35f67")
    cy.get('#acceptedResults > span:nth-child(21)').find('.lazyloaded').should('have.id',"f97a6d34-03ab-49f1-b02e-405b733f8843")
    cy.get('#acceptedResults > span:nth-child(22)').find('.lazyloaded').should('have.id',"f97a6d34-03ab-49f1-b02e-405b733f8843")
    cy.get('#acceptedResults > span:nth-child(23)').find('.lazyloaded').should('have.id',"f97a6d34-03ab-49f1-b02e-405b733f8843")
    cy.get('#acceptedResults > span:nth-child(24)').find('.lazyloaded').should('have.id',"f97a6d34-03ab-49f1-b02e-405b733f8843")
    
   
       
         

    })
    })
