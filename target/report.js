$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Adactin.feature");
formatter.feature({
  "name": "To validate the Adactin hotel",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify login functionality with valid username and valid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User has to launch Adactin url in chrome",
  "keyword": "Given "
});
formatter.step({
  "name": "User has to enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Click the login button",
  "keyword": "And "
});
formatter.step({
  "name": "User has to enter \"\u003clocation\u003e\", \"\u003chotels\u003e\", \"\u003croom type\u003e\", \"\u003cnoOfRooms\u003e\", \"\u003cdate in\u003e\", \"\u003cdate out\u003e\", \"\u003cadults\u003e\", \"\u003cchildren\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "click search and select hotel and continue",
  "keyword": "And "
});
formatter.step({
  "name": "User has to enter personal details \"\u003cfirstname\u003e\", \"\u003clastname\u003e\", \"\u003cbillingaddress\u003e\", \"\u003cccnumber\u003e\", \"\u003ccctype\u003e\", \"\u003cExpmonth\u003e\", \"\u003cExpdate\u003e\", \"\u003ccvv\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User has to book the hotel",
  "keyword": "And "
});
formatter.step({
  "name": "Print the order number",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "location",
        "hotels",
        "room type",
        "noOfRooms",
        "date in",
        "date out",
        "adults",
        "children",
        "firstname",
        "lastname",
        "billingaddress",
        "ccnumber",
        "cctype",
        "Expmonth",
        "Expdate",
        "cvv"
      ]
    },
    {
      "cells": [
        "priyasuresh221",
        "supriya16",
        "Melbourne",
        "Hotel Creek",
        "Double",
        "2 - Two",
        "09/02/2021",
        "10/02/2021",
        "3 - Three",
        "3 - Three",
        "Sara",
        "R",
        "ABC",
        "1234567789098765",
        "VISA",
        "May",
        "2022",
        "345"
      ]
    },
    {
      "cells": [
        "Ramcrazy18",
        "Ram@123a",
        "Sydney",
        "Hotel Creek",
        "Double",
        "2 - Two",
        "09/02/2021",
        "10/02/2021",
        "3 - Three",
        "3 - Three",
        "Bini",
        "R",
        "XXX",
        "4567890654321345",
        "Master Card",
        "June",
        "2021",
        "123"
      ]
    },
    {
      "cells": [
        "NatarajSettu",
        "TQB7W4",
        "Brisbane",
        "Hotel Sunshine",
        "Double",
        "2 - Two",
        "09/02/2021",
        "10/02/2021",
        "3 - Three",
        "3 - Three",
        "Addi",
        "S",
        "BNK",
        "1234567789098765",
        "VISA",
        "July",
        "2024",
        "456"
      ]
    },
    {
      "cells": [
        "gurumani",
        "guru123",
        "Brisbane",
        "Hotel Sunshine",
        "Double",
        "2 - Two",
        "09/02/2021",
        "10/02/2021",
        "3 - Three",
        "3 - Three",
        "Asi",
        "M",
        "YYY",
        "4567890654321345",
        "VISA",
        "May",
        "2029",
        "234"
      ]
    },
    {
      "cells": [
        "priyasuresh221",
        "supriya16",
        "Brisbane",
        "Hotel Sunshine",
        "Double",
        "2 - Two",
        "09/02/2021",
        "10/02/2021",
        "3 - Three",
        "3 - Three",
        "Usha",
        "R",
        "ZZZ",
        "9807658765890654",
        "VISA",
        "May",
        "2022",
        "567"
      ]
    },
    {
      "cells": [
        "Ramcrazy18",
        "Ram@123a",
        "Brisbane",
        "Hotel Sunshine",
        "Double",
        "2 - Two",
        "09/02/2021",
        "10/02/2021",
        "3 - Three",
        "3 - Three",
        "Kennedy",
        "N",
        "XXX",
        "4567890654321345",
        "Master Card",
        "July",
        "2024",
        "124"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify login functionality with valid username and valid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User has to launch Adactin url in chrome",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionAdactin.user_has_to_launch_Adactin_url_in_chrome()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: net::ERR_CONNECTION_RESET\n  (Session info: chrome\u003d88.0.4324.150)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LENOVO\u0027, ip: \u0027127.0.0.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_271\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.150, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\ADMINI~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:50944}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: a0d42d91f0947749036986f88af62612\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat org.base.BaseClass.launchUrl(BaseClass.java:35)\r\n\tat org.stepdefAdactin.StepDefinitionAdactin.user_has_to_launch_Adactin_url_in_chrome(StepDefinitionAdactin.java:17)\r\n\tat ✽.User has to launch Adactin url in chrome(file:src/test/resources/Adactin.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User has to enter \"priyasuresh221\" and \"supriya16\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionAdactin.user_has_to_enter_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionAdactin.click_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User has to enter \"Melbourne\", \"Hotel Creek\", \"Double\", \"2 - Two\", \"09/02/2021\", \"10/02/2021\", \"3 - Three\", \"3 - Three\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionAdactin.user_has_to_enter(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click search and select hotel and continue",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionAdactin.click_search_and_select_hotel_and_continue()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User has to enter personal details \"Sara\", \"R\", \"ABC\", \"1234567789098765\", \"VISA\", \"May\", \"2022\", \"345\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionAdactin.user_has_to_enter_personal_details(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User has to book the hotel",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionAdactin.user_has_to_book_the_hotel()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Print the order number",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionAdactin.print_the_order_number()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify login functionality with valid username and valid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User has to launch Adactin url in chrome",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionAdactin.user_has_to_launch_Adactin_url_in_chrome()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: net::ERR_INTERNET_DISCONNECTED\n  (Session info: chrome\u003d88.0.4324.150)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LENOVO\u0027, ip: \u0027127.0.0.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_271\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.150, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\ADMINI~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:51003}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 74a5e6134775f32f4ada86aec74959c8\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat org.base.BaseClass.launchUrl(BaseClass.java:35)\r\n\tat org.stepdefAdactin.StepDefinitionAdactin.user_has_to_launch_Adactin_url_in_chrome(StepDefinitionAdactin.java:17)\r\n\tat ✽.User has to launch Adactin url in chrome(file:src/test/resources/Adactin.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User has to enter \"Ramcrazy18\" and \"Ram@123a\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionAdactin.user_has_to_enter_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionAdactin.click_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User has to enter \"Sydney\", \"Hotel Creek\", \"Double\", \"2 - Two\", \"09/02/2021\", \"10/02/2021\", \"3 - Three\", \"3 - Three\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionAdactin.user_has_to_enter(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click search and select hotel and continue",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionAdactin.click_search_and_select_hotel_and_continue()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User has to enter personal details \"Bini\", \"R\", \"XXX\", \"4567890654321345\", \"Master Card\", \"June\", \"2021\", \"123\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionAdactin.user_has_to_enter_personal_details(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User has to book the hotel",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionAdactin.user_has_to_book_the_hotel()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Print the order number",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionAdactin.print_the_order_number()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify login functionality with valid username and valid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User has to launch Adactin url in chrome",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionAdactin.user_has_to_launch_Adactin_url_in_chrome()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: net::ERR_INTERNET_DISCONNECTED\n  (Session info: chrome\u003d88.0.4324.150)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LENOVO\u0027, ip: \u0027127.0.0.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_271\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.150, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\ADMINI~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:51013}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 935e53ad4c3b68bc6ab209ee5c4202cc\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat org.base.BaseClass.launchUrl(BaseClass.java:35)\r\n\tat org.stepdefAdactin.StepDefinitionAdactin.user_has_to_launch_Adactin_url_in_chrome(StepDefinitionAdactin.java:17)\r\n\tat ✽.User has to launch Adactin url in chrome(file:src/test/resources/Adactin.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User has to enter \"NatarajSettu\" and \"TQB7W4\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionAdactin.user_has_to_enter_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionAdactin.click_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User has to enter \"Brisbane\", \"Hotel Sunshine\", \"Double\", \"2 - Two\", \"09/02/2021\", \"10/02/2021\", \"3 - Three\", \"3 - Three\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionAdactin.user_has_to_enter(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click search and select hotel and continue",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionAdactin.click_search_and_select_hotel_and_continue()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User has to enter personal details \"Addi\", \"S\", \"BNK\", \"1234567789098765\", \"VISA\", \"July\", \"2024\", \"456\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionAdactin.user_has_to_enter_personal_details(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User has to book the hotel",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionAdactin.user_has_to_book_the_hotel()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Print the order number",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionAdactin.print_the_order_number()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify login functionality with valid username and valid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User has to launch Adactin url in chrome",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionAdactin.user_has_to_launch_Adactin_url_in_chrome()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: unable to send message to renderer\n  (Session info: chrome\u003d88.0.4324.150)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LENOVO\u0027, ip: \u0027127.0.0.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_271\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.150, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\ADMINI~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:51034}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: af70bbd8296d469177ba6ec042ace67c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat org.base.BaseClass.launchUrl(BaseClass.java:35)\r\n\tat org.stepdefAdactin.StepDefinitionAdactin.user_has_to_launch_Adactin_url_in_chrome(StepDefinitionAdactin.java:17)\r\n\tat ✽.User has to launch Adactin url in chrome(file:src/test/resources/Adactin.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User has to enter \"gurumani\" and \"guru123\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionAdactin.user_has_to_enter_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionAdactin.click_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User has to enter \"Brisbane\", \"Hotel Sunshine\", \"Double\", \"2 - Two\", \"09/02/2021\", \"10/02/2021\", \"3 - Three\", \"3 - Three\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionAdactin.user_has_to_enter(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click search and select hotel and continue",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionAdactin.click_search_and_select_hotel_and_continue()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User has to enter personal details \"Asi\", \"M\", \"YYY\", \"4567890654321345\", \"VISA\", \"May\", \"2029\", \"234\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionAdactin.user_has_to_enter_personal_details(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User has to book the hotel",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionAdactin.user_has_to_book_the_hotel()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Print the order number",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionAdactin.print_the_order_number()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify login functionality with valid username and valid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User has to launch Adactin url in chrome",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionAdactin.user_has_to_launch_Adactin_url_in_chrome()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to enter \"priyasuresh221\" and \"supriya16\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionAdactin.user_has_to_enter_and(String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d88.0.4324.150)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LENOVO\u0027, ip: \u0027127.0.0.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_271\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.150, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\ADMINI~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:51044}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f0ed388bd7beb45aed7cbb9fb4648150\n*** Element info: {Using\u003did, value\u003dusername}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy15.sendKeys(Unknown Source)\r\n\tat org.base.BaseClass.find(BaseClass.java:57)\r\n\tat org.stepdefAdactin.StepDefinitionAdactin.user_has_to_enter_and(StepDefinitionAdactin.java:23)\r\n\tat ✽.User has to enter \"priyasuresh221\" and \"supriya16\"(file:src/test/resources/Adactin.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionAdactin.click_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User has to enter \"Brisbane\", \"Hotel Sunshine\", \"Double\", \"2 - Two\", \"09/02/2021\", \"10/02/2021\", \"3 - Three\", \"3 - Three\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionAdactin.user_has_to_enter(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click search and select hotel and continue",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionAdactin.click_search_and_select_hotel_and_continue()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User has to enter personal details \"Usha\", \"R\", \"ZZZ\", \"9807658765890654\", \"VISA\", \"May\", \"2022\", \"567\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionAdactin.user_has_to_enter_personal_details(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User has to book the hotel",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionAdactin.user_has_to_book_the_hotel()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Print the order number",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionAdactin.print_the_order_number()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify login functionality with valid username and valid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User has to launch Adactin url in chrome",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionAdactin.user_has_to_launch_Adactin_url_in_chrome()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to enter \"Ramcrazy18\" and \"Ram@123a\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionAdactin.user_has_to_enter_and(String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d88.0.4324.150)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LENOVO\u0027, ip: \u0027127.0.0.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_271\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.150, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\ADMINI~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:51072}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f60fb8fb55ec46532027f98e233af5b7\n*** Element info: {Using\u003did, value\u003dusername}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy15.sendKeys(Unknown Source)\r\n\tat org.base.BaseClass.find(BaseClass.java:57)\r\n\tat org.stepdefAdactin.StepDefinitionAdactin.user_has_to_enter_and(StepDefinitionAdactin.java:23)\r\n\tat ✽.User has to enter \"Ramcrazy18\" and \"Ram@123a\"(file:src/test/resources/Adactin.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionAdactin.click_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User has to enter \"Brisbane\", \"Hotel Sunshine\", \"Double\", \"2 - Two\", \"09/02/2021\", \"10/02/2021\", \"3 - Three\", \"3 - Three\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionAdactin.user_has_to_enter(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click search and select hotel and continue",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionAdactin.click_search_and_select_hotel_and_continue()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User has to enter personal details \"Kennedy\", \"N\", \"XXX\", \"4567890654321345\", \"Master Card\", \"July\", \"2024\", \"124\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionAdactin.user_has_to_enter_personal_details(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User has to book the hotel",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionAdactin.user_has_to_book_the_hotel()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Print the order number",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionAdactin.print_the_order_number()"
});
formatter.result({
  "status": "skipped"
});
});