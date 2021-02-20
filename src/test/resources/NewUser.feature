Feature: Validate the adactin page
 

  Background: 
  Given User has to launch Adactin URL
  
  Scenario: Validate valid username and valid password
    
    When User should enter username and password
    And click the login button
    When User has to enter location, hotels, roomtype, noOfRooms, date in, date out, adults, children
    And click search and select hotel and continue
    When User has to enter personal details firstName, lastName, billingAddress, credit card details ccNumber, ccType
     
 Scenario: Validate New User registration page
 And click