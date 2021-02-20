package org.stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class LoginPageSteps {

	WebDriver driver;

	@Given("user has to launch the chrome and hit the fb url")
	public void user_has_to_launch_the_chrome_and_hit_the_fb_url() {
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\Administrator\\eclipse-workspace\\CucumberProject\\driver\\dri\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://www.facebook.com/");
	}

	@When("user has to enter the username and password")
	public void user_has_to_enter_the_user_name_and_password() {
		driver.findElement(By.id("email")).sendKeys("sarakennedy0611@gmail.com");
		driver.findElement(By.id("pass")).sendKeys("12345678");
	}
	
	@When("user has to enter the {string} and {string}")
	public void user_has_to_enter_the_and(String emailId, String pass) {
	    driver.findElement(By.id("email")).sendKeys(emailId);
	    driver.findElement(By.id("pass")).sendKeys(pass);
	}


	@When("click the login button")
	public void click_the_login_button() {
		driver.findElement(By.id("u_0_b")).click();
	}

	@Then("user unable to enter the home page")
	public void user_unable_to_enter_the_home_page() {
		System.out.println("User uanble to enter the home page");
	}

}
