package org.stepdefAdactin;

import org.base.BaseClass;
import org.openqa.selenium.WebElement;
import org.pojo.AdactinPojo;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class StepDefinitionAdactin extends BaseClass{
	
	AdactinPojo adactin;
	@Given("User has to launch Adactin url in chrome")
	public void user_has_to_launch_Adactin_url_in_chrome() {
	    chromeBrowser();
	    launchUrl("http://adactinhotelapp.com/SearchHotel.php");
	    }

	@When("User has to enter {string} and {string}")
	public void user_has_to_enter_and(String name, String pass) {
	    adactin = new AdactinPojo();
	    find(adactin.getUser(), name);
	    find(adactin.getPass(), pass);
	}

	@When("Click the login button")
	public void click_the_login_button() {
	    btnClick(adactin.getLogin());
	    }

	@When("User has to enter {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}")
	public void user_has_to_enter(String loc, String hotel, String room, String noofrooms, String datein, String dateout, String adult, String child) {
	     find(adactin.getSelectLocation(), loc);
	     find(adactin.getSelectHotel(), hotel);
	     find(adactin.getSelectRoom(), room);
	     find(adactin.getNoOfroom(), noofrooms);
	     
	     find(adactin.getDateIn(), datein);
	     find(adactin.getDateOut(), dateout);
	     find(adactin.getAdult(), adult);
	     find(adactin.getChildRoom(), child);
	     
	}

	@When("click search and select hotel and continue")
	public void click_search_and_select_hotel_and_continue() {
	    btnClick(adactin.getClikSubmit());
	    btnClick(adactin.getClikselect());
	    btnClick(adactin.getClikContinue());
	}
	

@When("User has to enter personal details {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}")
public void user_has_to_enter_personal_details(String string, String string2, String string3, String string4, String string5, String string6, String string7, String string8) {
    find(adactin.getName(), string);
    find(adactin.getLastName(), string2);
    find(adactin.getAddress(), string3);
    find(adactin.getCcNumber(), string4);
    find(adactin.getCcType(), string5);
    find(adactin.getExpMonth(), string6);
    find(adactin.getExpYear(), string7);
    find(adactin.getCvvNumber(), string8);
    
}

@When("User has to book the hotel")
public void user_has_to_book_the_hotel() {
    btnClick(adactin.getClikBookNow());
}


	@Then("Print the order number")
	public void print_the_order_number() throws InterruptedException {
		Thread.sleep(5000);
	    String att = Attribute(adactin.getOrderNumber());
		System.out.println(att);
	}


}
