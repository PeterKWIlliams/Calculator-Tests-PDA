// // You should write tests to ensure the following requirements are met:
// // Do the number buttons update the display of the running total?
// // Do the arithmetical operations update the display with the result of the operation?
// // Can multiple operations be chained together?
// // Is the output as expected for a range of numbers (for example, positive,
//  negative, decimals and very large numbers)?
// // What does the code do in exceptional circumstances? Specifically, 
// if you divide by zero, what is the effect? Write a test to describe what you'd prefer to happen, 
// and then correct the code to make that test pass (you will need to modify 
// the Calculator model to meet this requirement).

describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('do artithmetical operators update display after running', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number5').click();
    cy.get('#operator-subtract').click();
    cy.get('#number3').click();
    cy.get('#operator-multiply').click();
    cy.get('#number4').click();
    cy.get('#operator-divide').click();
    cy.get('#number8').click();
    cy.get('#operator-equals').click();

    cy.get('.display').should('contain', '2')
  })
  
  
  it('can multiple operations be chained together', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number5').click();
    cy.get('#operator-subtract').click();
    cy.get('#number3').click();
    cy.get('#operator-multiply').click();
    cy.get('#number4').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();

    cy.get('.display').should('contain', '8')
  })

  it('should be able to work with negative numbers', () => {
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-3')
  })
  
  it('should be able to work with decimals', () => {
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();

    cy.get('.display').should('contain', '2.5')
  })
  
  
  it('should be able to work with values greater than 999999999', () => {
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator_add').click();
    cy.get('#number1').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '10000000000')

   
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Not a Number')
  })




})