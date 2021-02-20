package org.newuser;

import org.base.BaseClass;
import org.pojo.AdactinPojo;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class NewUser extends BaseClass{
	AdactinPojo adactin;
	@Given("User has to launch Adactin URL")
	public void userHasToLaunchAdactinURL() {
		chromeBrowser();
	    launchUrl("http://adactinhotelapp.com/SearchHotel.php");

	}

	@When("User should enter username and password")
	public void userShouldEnterUsernameAndPassword() {
		adactin = new AdactinPojo();
	    find(adactin.getUser(), "sara123");
	    find(adactin.getPass(), "12345");	}

	@When("click the login button")
	public void clickTheLoginButton() {
	   btnClick(adactin.getLogin());
	    }

	@When("User has to enter location, hotels, roomtype, noOfRooms, date in, date out, adults, children")
	public void userHasToEnterLocationHotelsRoomtypeNoOfRoomsDateInDateOutAdultsChildren() {
		find(adactin.getSelectLocation(), "Melbourne");
	     find(adactin.getSelectHotel(), "Hotel Creek");
	     find(adactin.getSelectRoom(), "Double");
	     find(adactin.getNoOfroom(), "2 - Two");
	     
	     find(adactin.getDateIn(), "20/02/2021");
	     find(adactin.getDateOut(), "21/02/2021");
	     find(adactin.getAdult(), "3 - Three");
	     find(adactin.getChildRoom(), "3 - Three");
	}

	@When("click search and select hotel and continue")
	public void clickSearchAndSelectHotelAndContinue() {
		btnClick(adactin.getClikSubmit());
	    btnClick(adactin.getClikselect());
	    btnClick(adactin.getClikContinue());
	}

	@When("User has to enter personal details firstName, lastName, billingAddress, credit card details ccNumber, ccType")
	public void userHasToEnterPersonalDetailsFirstNameLastNameBillingAddressCreditCardDetailsCcNumberCcType() {
		find(adactin.getName(), "sara");
	    find(adactin.getLastName(), "R");
	    find(adactin.getAddress(), "chennai");
	    find(adactin.getCcNumber(), "1234567890987654");
	    find(adactin.getCcType(), "Visa");
	    find(adactin.getExpMonth(), "May");
	    find(adactin.getExpYear(), "2021");
	    find(adactin.getCvvNumber(), "234");

	}

	@When("click")
	public void click()
	{
		btnClick(adactin.getUserNew());
	}
	
	
	@Then("user has to validate")
	public void userHasToValidate() {
	    System.out.println("hgjhgj");	}


	
	
}
