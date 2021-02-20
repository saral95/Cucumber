package org.base;

import java.io.File;
import java.io.IOException;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import io.github.bonigarcia.wdm.WebDriverManager;

public class BaseClass {
	public static WebDriver driver;
	public static Actions a;
	public static ChromeOptions options;
	public static JavascriptExecutor js;
	public static File f;
	public static Select s1;

	
	public static WebDriver chromeBrowser() {
		//System.setProperty("webdriver.chrome.driver", "C:\\Users\\Administrator\\eclipse-workspace\\ProjectMaven\\driver\\chromedriver.exe");
		WebDriverManager.chromedriver().setup();
		driver=new ChromeDriver();
        return driver;
	}
	
	public static void launchUrl(String Url) {
		driver.get(Url);
	}
	
	public static void pageUrl() {
		String url = driver.getCurrentUrl();
		System.out.println(url);
	}
	
	public static String pageTitle() {
		String title = driver.getTitle();
		return title;
	}
	
	public static void closeBrowser() {
		driver.close();
	}
	
	public static void quitBrowser() {
		driver.quit();
	}
	
	public static void find(WebElement element, String value) {
		element.sendKeys(value);
	}
	
	public static void btnClick(WebElement element) {
		element.click();
	}
	
	public static void dragDrop(WebElement src, WebElement dest) {
		a.dragAndDrop(src,dest).perform();
	}
	
	public static void mouseRightClick(WebElement element) {
		a.contextClick(element).click();
	}
	
	public static void maximizeWindow() {
		driver.manage().window().maximize();
	}
	
	public static void navigateUrl(String url) {
		driver.navigate().to(url);
	}
	
	public static void refreshPage() {
		driver.navigate().refresh();
	}
	
	public static void pageForward() {
		driver.navigate().forward();
	}
	
	public static void pageBack() {
		driver.navigate().back();
	}
	
	public static void removePopup() {
		options=new ChromeOptions();
	    options.addArguments("--disable-notifications");
	}
	
	public static void deleteCookies() {
		driver.manage().deleteAllCookies();
	}
	
	public static void scrollUp(WebElement element) {

		js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].scrollIntoView(false)", element);

	}
	
	public static void upAndDown(WebElement element) {

		js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].scrollIntoView()", element);

	}
	
	public static String text(WebElement element) {
         String txt = element.getText();
         return txt;

	}
	
	public static String Attribute(WebElement element) {

		String attr = element.getAttribute("value");

		return attr;

	}
	
	public static void implicit() {

		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);

	}

	
    public static void mousehover(WebElement element) {
		
		a = new Actions(driver);
		a.moveToElement(element).perform();

	}
    
    public static void switchToFrame(String e) {
    	driver.switchTo().frame(e);
    }



	public static Set<String> window( ) {
		Set<String> win = driver.getWindowHandles();
		return win;
	}
	
	public static void selectText(WebElement element, String txt) {
		s1 = new Select(element);
		s1.selectByVisibleText(txt);
		
	}
	public static void selectIndex(WebElement element, int ind) {
		s1 = new Select(element);
		s1.selectByIndex(ind);
		
	}
	
	public static void selectValue(WebElement element, String value) {
		s1 = new Select(element);
		s1.selectByValue(value);
	}




}