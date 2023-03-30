class LoginPage {

    get emailInputField() {
        return cy.get('input[type="email"]')
    }
      
    get passwordInputField(){
        return cy.get('input[type="password"]')
    }

    get Submitbutton(){
        return cy.get('button[type="submit"]')
    }

    



    login(userEmail, password) {
        this.emailInputField.type(userEmail)
        this.passwordInputField.type(password)
        this.Submitbutton.click()
    }

}

export const loginPage = new LoginPage();