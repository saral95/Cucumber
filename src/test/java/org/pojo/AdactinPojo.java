package org.pojo;

import org.base.BaseClass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AdactinPojo extends BaseClass{
	
	public AdactinPojo() {
        PageFactory.initElements(driver,  this);
	}
	
	@FindBy(id="username")
	private WebElement user;
	
	@FindBy(id="password")
	private WebElement pass;
	
	@FindBy(id="login")
	private WebElement login;
	
	@FindBy(id="location")
	private WebElement selectLocation;
	
	@FindBy(id="hotels")
	private WebElement selectHotel;
	
	@FindBy(id="room_type")
	private WebElement selectRoom;
	
	@FindBy(id="room_nos")
	private WebElement noOfroom;
	
	@FindBy(id="datepick_in")
	private WebElement dateIn;
	
	@FindBy(id="datepick_out")
	private WebElement dateOut;
	
	@FindBy(id="adult_room")
	private WebElement adult;
	
	@FindBy(id="child_room")
	private WebElement childRoom;
	
	@FindBy(id="Submit")
	private WebElement clikSubmit;
	
	@FindBy(id="radiobutton_0")
	private WebElement clikselect;
	
	@FindBy(id="continue")
	private WebElement clikContinue;
	
	@FindBy(id="first_name")
	private WebElement name;
	
	@FindBy(id="last_name")
	private WebElement lastName;
	
	@FindBy(id="address")
	private WebElement address;
	
	@FindBy(id="cc_num")
	private WebElement ccNumber;
	
	@FindBy(id="cc_type")
	private WebElement ccType;
	
	@FindBy(id="cc_exp_month")
	private WebElement expMonth;
	
	@FindBy(id="cc_exp_year")
	private WebElement expYear;
	
	@FindBy(id="cc_cvv")
	private WebElement cvvNumber;
	
	@FindBy(id="book_now")
	private WebElement ClikBookNow;
	
	@FindBy(xpath="//input[@id='order_no']")
	private WebElement orderNumber;
	
	@FindBy(xpath="//a[text()='New User Register Here']")
	private WebElement userNew;
	


	
	public WebElement getUser() {
		return user;
	}

	public WebElement getPass() {
		return pass;
	}

	public WebElement getLogin() {
		return login;
	}
	
	public WebElement getSelectLocation() {
		return selectLocation;
	}

	public WebElement getSelectHotel() {
		return selectHotel;
	}

	public WebElement getSelectRoom() {
		return selectRoom;
	}

	public WebElement getNoOfroom() {
		return noOfroom;
	}

	public WebElement getDateIn() {
		return dateIn;
	}

	public WebElement getDateOut() {
		return dateOut;
	}

	public WebElement getAdult() {
		return adult;
	}

	public WebElement getChildRoom() {
		return childRoom;
	}

	public WebElement getClikSubmit() {
		return clikSubmit;
	}
	
	public WebElement getClikselect() {
		return clikselect;
	}

	public WebElement getClikContinue() {
		return clikContinue;
	}
		
		public WebElement getName() {
			return name;
		}

		public WebElement getLastName() {
			return lastName;
		}

		public WebElement getAddress() {
			return address;
		}

		public WebElement getCcNumber() {
			return ccNumber;
		}

		public WebElement getCcType() {
			return ccType;
		}

		public WebElement getExpMonth() {
			return expMonth;
		}

		public WebElement getExpYear() {
			return expYear;
		}

		public WebElement getCvvNumber() {
			return cvvNumber;
		}

		public WebElement getClikBookNow() {
			return ClikBookNow;
		}
		
		public WebElement getOrderNumber() {
			return orderNumber;
		}
 
		public WebElement getUserNew() {
			return userNew;
		}

	

	
}

	
	

