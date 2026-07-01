# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: DPDDTestUsingJson.spec.ts >> Search and view product details for ZARA COAT 3
- Location: tests\DPDDTestUsingJson.spec.ts:28:9

# Error details

```
Error: locator.fill: Test ended.
Call log:
  - waiting for getByPlaceholder('email@example.com')

```

```
Error: locator.fill: Test ended.
Call log:
  - waiting for getByPlaceholder('email@example.com')

```

# Test source

```ts
  1  | // Locators and methods related to Login Page
  2  | 
  3  | import { Locator, Page } from "@playwright/test";
  4  | 
  5  | export class LoginPage{
  6  | 
  7  |     // Locators  - Properties
  8  | 
  9  |     page: Page
  10 |     private email :Locator 
  11 |     private password: Locator
  12 |     private loginBtn: Locator
  13 |     errorMessage : Locator
  14 |     homePageIdentifer : Locator
  15 | 
  16 |     constructor(page:Page){
  17 |         this.page = page 
  18 |         this.email = this.page.getByPlaceholder("email@example.com") 
  19 |         this.password = this.page.getByPlaceholder("enter your passsword")
  20 |         this.loginBtn = this.page.locator("#login")
  21 |         this.errorMessage = this.page.locator("#toast-container")
  22 |         this.homePageIdentifer = this.page.locator("[routerlink='/dashboard/']")
  23 |     }
  24 | 
  25 |     // Methods
  26 | 
  27 |     async launchURL(url:string){
  28 |         await this.page.goto(url)
  29 |     }
  30 | 
  31 |     async loginIntoApplication(username:string, passsword: string){
> 32 |         await this.email.fill(username)
     |                          ^ Error: locator.fill: Test ended.
  33 |         await this.password.fill(passsword)
  34 |         await this.loginBtn.click()
  35 |     }
  36 | 
  37 | }
```