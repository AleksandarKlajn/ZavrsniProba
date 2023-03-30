/// <reference types ="Cypress"/>

import { loginPage } from "../pageObject/loginPagePOM"

const userData = require('../fixtures/user.json')



describe('Login page', () => {

xit('Visit login page', () => {
    cy.visit('https://cypress.vivifyscrum-stage.com/login')

    cy.get ('input[type="email"]').type(userData.userEmail)
    cy.get('input[type="password"]').type(userData.password)
    cy.get('button[type="submit"]').click()
    cy.url().should('contain', '/my-organizations')
    cy.get('button[type="submit"]').should("not.exist")

})

it.only('create new organization', ()=> {
    cy.visit('https://cypress.vivifyscrum-stage.com/login')
    loginPage.login(userData.userEmail, userData.password)
    cy.contains('Add New').click();
    cy.contains('Add Organization').click()
    cy.get('input[type="text"]').type('Ime Organizacije')
    cy.get('button[name="next_btn"]').click()
    cy.get('button[name="next_btn"]').click()
    cy.get('i[class="el-icon-close"]').should('be.visible').last().click({force: true})
})

})
