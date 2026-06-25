// Locators and methods related to Login Page

import { Locator, Page } from "@playwright/test";

export class LoginPage{

    // Locators  - Properties

    page: Page
    private email :Locator 
    private password: Locator
    private loginBtn: Locator
    errorMessage : Locator
    homePageIdentifer : Locator

    constructor(page:Page){
        this.page = page 
        this.email = this.page.getByPlaceholder("email@example.com") 
        this.password = this.page.getByPlaceholder("enter your passsword")
        this.loginBtn = this.page.locator("#login")
        this.errorMessage = this.page.locator("#toast-container")
        this.homePageIdentifer = this.page.locator("[routerlink='/dashboard/']")
    }

    // Methods

    async launchURL(url:string){
        await this.page.goto(url)
    }

    async loginIntoApplication(username:string, passsword: string){
        await this.email.fill(username)
        await this.password.fill(passsword)
        await this.loginBtn.click()
    }

}