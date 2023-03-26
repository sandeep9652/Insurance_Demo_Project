export default class InsuranceProject {
  constructor() {
    this.gmail = "#email"
    this.password = "#password"
    this.loginButton = ":nth-child(3) > .btn"
    this.homeLink = "#ui-id-1"
    this.requestQuotationLink = "#ui-id-2"
    this.retrieveQuotationLink = "#ui-id-3"
    this.profileLink = "#ui-id-4"
    this.editProfilelink = "#ui-id-5"
    this.breakDownCover = "#quotation_breakdowncover"
    this.windScreenRepair = "#quotation_windscreenrepair_t"
    this.incidents = "#quotation_incidents"
    this.vehicleRegistation = "#quotation_vehicle_attributes_registration"
    this.vehicleMileage = "#quotation_vehicle_attributes_mileage"
    this.vehicleValue = "#quotation_vehicle_attributes_value"
    this.vehicleParkingLocation = "#quotation_vehicle_attributes_parkinglocation"
    this.vehiclePolicyYear = "#quotation_vehicle_attributes_policystart_1i"
    this.vehiclePolicyMonth = "#quotation_vehicle_attributes_policystart_2i"
    this.vehiclePolicyDay = "#quotation_vehicle_attributes_policystart_3i"
    this.saveButton = "#new_quotation > .actions > .btn-success"
    this.body = "body"
    this.indentificationNumber = "form > [type='text']"
    this.retrieveButton = "#getquote"
    this.logOut = "[value='Log out']"
    this.retrieveQuotationPage = "font"
    this.utitle = '#user_title'
    this.userName = '#user_surname'
    this.ufirstname = '#user_firstname'
    this.uphone = '#user_phone'
    this.udateofbirth_1i = '#user_dateofbirth_1i'
    this.udateofbirth_2i = '#user_dateofbirth_2i'
    this.udateofbirth_3i = '#user_dateofbirth_3i'
    this.ulicencetype_t = '[for="user_licencetype_t"]'
    this.ulicencetype_f = '#user_licencetype_f'
    this.ulicenceperiod = '#user_licenceperiod'
    this.uoccupation_id = '#user_occupation_id'
    this.uAddresStreet = '#user_address_attributes_street'
    this.uAddressCity = '#user_address_attributes_city'
    this.uAddressCounty = '#user_address_attributes_county'
    this.uAddressPostcode = '#user_address_attributes_postcode'
    this.updateUser = '#edit_user_ > div.actions > input '
  }


  getGmail() {
    return cy.get(this.gmail)
  }
  getPassword() {
    return cy.get(this.password)
  }
  getLoginButton() {
    return cy.get(this.loginButton)
  }
  getHomeLink() {
    return cy.get(this.homeLink)
  }
  getRequestQuotationLink() {
    return cy.get(this.requestQuotationLink)
  }
  getRetrieveQuotationLink() {
    return cy.get(this.retrieveQuotationLink)
  }
  getProfileLink() {
    return cy.get(this.profileLink)
  }
  getBreakDownCover() {
    return cy.get(this.breakDownCover)
  }
  getEditProfilelink() {
    return cy.get(this.editProfilelink)
  }
  getWindScreenRepair() {
    return cy.get(this.windScreenRepair)
  }
  getIncidents() {
    return cy.get(this.incidents)
  }
  getVehicleRegistation() {
    return cy.get(this.vehicleRegistation)
  }
  getVehicleMileage() {
    return cy.get(this.vehicleMileage)
  }
  getVehicleValue() {
    return cy.get(this.vehicleValue)
  }
  getVehicleParkingLocation() {
    return cy.get(this.vehicleParkingLocation)
  }
  getVehiclePolicyYear() {
    return cy.get(this.vehiclePolicyYear)
  }
  getVehiclePolicyMonth() {
    return cy.get(this.vehiclePolicyMonth)
  }
  getVehiclePolicyDay() {
    return cy.get(this.vehiclePolicyDay)
  }
  getSaveButton() {
    return cy.get(this.saveButton)
  }
  getIndentificationNumber() {
    return cy.get(this.indentificationNumber)
  }
  getBody() {
    return cy.get(this.body)
  }
  getRetrieveButton() {
    return cy.get(this.retrieveButton)
  }
  getlogOut() {
    return cy.get(this.logOut)
  }
  getRetrieveQuotationpage() {
    return cy.get(this.retrieveQuotationPage)
  }
  getUtitle() {
    return cy.get(this.utitle)
  }
  getUserName() {
    return cy.get(this.userName)
  }
  getUFirstName() {
    return cy.get(this.ufirstname)
  }
  getUPhone() {
    return cy.get(this.uphone)
  }
  getUDateOfBirthYear() {
    return cy.get(this.udateofbirth_1i)
  }
  getUDateOfBirthMonth() {
    return cy.get(this.udateofbirth_2i)
  }
  getUDateOfBirthDay() {
    return cy.get(this.udateofbirth_3i)
  }
  getULicenceTypeFull() {
    return cy.get(this.ulicencetype_t)
  }
  getULicenceTypeProvisal() {
    return cy.get(this.ulicencetype_f)
  }
  getULicencePeriod() {
    return cy.get(this.ulicenceperiod)
  }
  getUOccupation() {
    return cy.get(this.uoccupation_id)
  }
  getUAddresStreet() {
    return cy.get(this.uAddresStreet)
  }
  getUAddressCity() {
    return cy.get(this.uAddressCity)
  }
  getUAddressCounty() {
    return cy.get(this.uAddressCounty)
  }
  getUAddressPostcode() {
    return cy.get(this.uAddressPostcode)
  }
  getUpdateUser() {
    return cy.get(this.updateUser)
  }


}









