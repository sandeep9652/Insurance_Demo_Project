import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import InsuranceProject from "@pages/InsuranceOroject";

const insuranceProject = new InsuranceProject()

var quotationNumber;

Given("A User will Launch the Application", function () {
    cy.visit("/");
})
When("Navigates to Insurance Project page", function () {
    cy.contains("Insurance Project").click()
    cy.url().should("include", "insurance/v1/index.php")
})
Then("Enters login credentials", function () {
    insuranceProject.getGmail().type(this.data.email)
    insuranceProject.getPassword().type(this.data.password)
})
When("Clicks on Login button", function () {
    insuranceProject.getLoginButton().click()
    cy.wait(500)
})
Then("User should logged into application will be on Insurance Project Home Page", function () {
    cy.contains("Broker Insurance WebPage").should("be.visible")

})

When("Navigates to Request Quotation page and Enters vechile details", function () {
    insuranceProject.getRequestQuotationLink().click()
    insuranceProject.getBreakDownCover().select(this.data.breakDownCover)
    insuranceProject.getWindScreenRepair().click()
    insuranceProject.getIncidents().type(this.data.incidents)
    insuranceProject.getVehicleRegistation().type(this.data.vehicleRegistation)
    insuranceProject.getVehicleMileage().type(this.data.vehicleMileage)
    insuranceProject.getVehicleValue().type(this.data.vehicleValue)
    insuranceProject.getVehicleParkingLocation().select(this.data.vehicleParkingLocation)
    insuranceProject.getVehiclePolicyYear().select(this.data.vehiclePolicyYear)
    insuranceProject.getVehiclePolicyMonth().select(this.data.vehiclePolicyMonth)
    insuranceProject.getVehiclePolicyDay().select(this.data.vehiclePolicyDay)
})

When("Clicks on Save Quotation button", function () {
    insuranceProject.getSaveButton().click()
})
Then("User sould get Identification number", function () {
    insuranceProject.getBody().then(($el) => {
        var text1 = $el.text()
        var text2 = text1.split(" : ")
        var text3 = text2[1].split("Please")
        quotationNumber = text3[0].trim()
        cy.log(quotationNumber)
    })
})
When("Clicks Retrieve Quotation link", function () {
    insuranceProject.getRetrieveQuotationLink().click()
})
Then("Enters Identification number and clicks on Retrieve button", function () {
    insuranceProject.getIndentificationNumber().type(quotationNumber)
    insuranceProject.getRetrieveButton().click()
})
Then("Navigates to Retrieve Quotation page and gets the details", function () {
    insuranceProject.getRetrieveQuotationpage().contains("Retrieve Quotation").should("be.visible")
})
When("Clicks Profile link", function(){
    insuranceProject.getProfileLink().click()
})
Then("Verifies profile the details", function(){
    cy.contains("Title:").should("be.visible")
    cy.contains("Firstname:").should("be.visible")
    cy.contains("Surname:").should("be.visible")
})
When("Clicks Edit Profile link", function(){
    insuranceProject.getEditProfilelink().click()
})
When("User edits the profile details", function () { 
    insuranceProject.getUtitle().select('Mr').should('be.visible')
    insuranceProject.getUserName().type('sandeep')
    insuranceProject.getUFirstName().type('mupidiwar')
    insuranceProject.getUPhone().type('987654321')
    insuranceProject.getUDateOfBirthYear().select('1940').should('be.visible')
    insuranceProject.getUDateOfBirthMonth().select('April')
    insuranceProject.getUDateOfBirthDay().select('22')
    insuranceProject.getULicenceTypeFull().should('be.visible').click()
    insuranceProject.getULicencePeriod().select('4')
    insuranceProject.getUOccupation().select('Doctor').should('be.visible')
    insuranceProject.getUAddresStreet().type('ahjhgfdrtyjfdrtyjftyjnbftyjnbvdhbvfghfghg')
    insuranceProject.getUAddressCity().type('sdfghj')
    insuranceProject.getUAddressCounty().type('india')
    insuranceProject.getUAddressPostcode().type('098765')
    insuranceProject.getUpdateUser().click()
})
Then("Verifies Edit Profile the details", function(){
    cy.contains("Editing user profile").should("be.visible")
}) 
When("Click on Logout link", function(){
    insuranceProject.getlogOut().click()
})   
Then("Verify Logout successful by navigating to Login page", function(){
    cy.contains("Log in").should("be.visible")
})
When("Enters wrong credentials as {string} and {string}", function(email, password){
    insuranceProject.getGmail().type(email)
    insuranceProject.getPassword().type(password)
    insuranceProject.getLoginButton().click()
    cy.wait(500)
})  
Then("Error message should be visible", function(){
    cy.contains("Enter your Email address and password correct").should("be.visible")
})
