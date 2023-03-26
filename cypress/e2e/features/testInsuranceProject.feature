Feature: Insurance Project Test Suite

    Background: To Log into Application
         Given A User will Launch the Application
         When Navigates to Insurance Project page
         Then Enters login credentials  
         When Clicks on Login button

    Scenario: To Verify Login successful
         Then User should logged into application will be on Insurance Project Home Page

    Scenario: To verify Request Quotation submission 
        When Navigates to Request Quotation page and Enters vechile details
        When Clicks on Save Quotation button
        Then User sould get Identification number

     Scenario: To verify Retrieving Quotation details
        When Clicks Retrieve Quotation link
        Then Enters Identification number and clicks on Retrieve button
        Then Navigates to Retrieve Quotation page and gets the details

     Scenario: To verify Profile page
        When Clicks Profile link
        Then Verifies profile the details

     Scenario: To verify Edit Profile page
         When Clicks Edit Profile link
         When User edits the profile details
         Then Verifies Edit Profile the details 

     Scenario: To verify Logout
        When Click on Logout link   
        Then Verify Logout successful by navigating to Login page 

     Scenario: To verify Login failure   
        When Click on Logout link
        When Enters wrong credentials as "mupidawar@gmail.com" and "san1234"  
        Then Error message should be visible
            