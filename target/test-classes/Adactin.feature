Feature: To validate the Adactin hotel

Scenario Outline: Verify login functionality with valid username and valid password

Given User has to launch Adactin url in chrome

When User has to enter "<username>" and "<password>"

And Click the login button

When User has to enter "<location>", "<hotels>", "<room type>", "<noOfRooms>", "<date in>", "<date out>", "<adults>", "<children>"

And click search and select hotel and continue

When User has to enter personal details "<firstname>", "<lastname>", "<billingaddress>", "<ccnumber>", "<cctype>", "<Expmonth>", "<Expdate>", "<cvv>" 

And User has to book the hotel

Then Print the order number

Examples:

|username          |  password     |  location  | hotels         |  room type  |  noOfRooms  |  date in   |  date out  |  adults   |  children  | firstname   |  lastname  | billingaddress  |   ccnumber         |  cctype      |  Expmonth  |  Expdate  |  cvv  |              
|priyasuresh221    |  supriya16    |  Melbourne | Hotel Creek    |  Double     |  2 - Two    | 09/02/2021 | 10/02/2021 | 3 - Three |  3 - Three | Sara        |  R         | ABC             |  1234567789098765  |  VISA        |  May       |  2022     |  345  |
|Ramcrazy18        |  Ram@123a     |  Sydney    | Hotel Creek    |  Double     |  2 - Two    | 09/02/2021 | 10/02/2021 | 3 - Three |  3 - Three | Bini        |  R         | XXX             |  4567890654321345  |  Master Card |  June      |  2021     |  123  |
|NatarajSettu      |  TQB7W4       |  Brisbane  | Hotel Sunshine |  Double     |  2 - Two    | 09/02/2021 | 10/02/2021 | 3 - Three |  3 - Three | Addi        |  S         | BNK             |  1234567789098765  |  VISA        |  July      |  2024     |  456  |
|gurumani          |  guru123      |  Brisbane  | Hotel Sunshine |  Double     |  2 - Two    | 09/02/2021 | 10/02/2021 | 3 - Three |  3 - Three | Asi         |  M         | YYY             |  4567890654321345  |  VISA        |  May       |  2029     |  234  |
|priyasuresh221    |  supriya16    |  Brisbane  | Hotel Sunshine |  Double     |  2 - Two    | 09/02/2021 | 10/02/2021 | 3 - Three |  3 - Three | Usha        |  R         | ZZZ             |  9807658765890654  |  VISA        |  May       |  2022     |  567  |           
|Ramcrazy18        |  Ram@123a     |  Brisbane  | Hotel Sunshine |  Double     |  2 - Two    | 09/02/2021 | 10/02/2021 | 3 - Three |  3 - Three | Kennedy     |  N         | XXX             |  4567890654321345  |  Master Card |  July      |  2024     |  124  |
