// Framework - It is a desing principle. Set of guidlines.

// POM - Page Object Model - It is a design pattern.

// It is a class which represents the page of the application. It contains the locators
// and methods of the specific page.

// Page Object Model is a design pattern used in software testing to represent a web page
// as an object. It is a way to organise and manage the interaction with a web page by
// creating the properties (variables - locators) and methods (Actions - loginIntoApplication(), launchURL(),...)
// of that particular page.


// This approach helps in reducing the code duplication, improve the test redability
// and maintainability by encapusalting the page specific properties and methods inside 
// a particular class.

// LoginPage.ts - Locators and methods related to login page ONLY


// POM framework from scratch:

// There are different layers that we have to create:

// 1. PAGE LAYER - Will create a package or folder (pages) - 
// Different class you will be creating it over here - 
// LoginPage.ts, DashboardPage.ts,... this class will consists of locators 
// and methods related to specific class.
// email, password. loginBtn, loginIntoApplication(), invalidLogin() - LoginPage.ts


// 2. TEST LAYER - Will create a package or folder (tests) - Pure test case and assertions.
// We will call the locators and methods from the page class to the test files.
// LoginPageTest.spec.ts, DashboardPageTest.spec.ts, ....


// 3. TEST DATA LAYER - JSON/Excel/.env - TestData.json, TestData.xlsx

// 4. CONFIGURATION LAYER - playwright.config.ts - Global Configuration file

// 5. UTILS LAYER - We will create a utils folder. Custom function - screenshot(), scrolldown(),
// getDataFromExcel(),....

// 6. REPORT LAYER - HTML/Allure - We do not have to create it separately.


