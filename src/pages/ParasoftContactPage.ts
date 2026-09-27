import { Page, Locator, expect } from '@playwright/test';

export class ParasoftContactPage {
  readonly page: Page;
  readonly locale: any;
  readonly headerMessage: Locator;
  readonly contactHeaderMessage:Locator;
  readonly emailTextBox:Locator;

  constructor(page: Page, locale: any) {
    this.page = page;
    this.locale = locale;

    // Locates the headline anywhere on the page matching the locale string
    this.headerMessage = page.locator('text="' + locale.contact_header + '"');

    this.contactHeaderMessage=page.locator('text="' + locale.contactform_header + '"');
    this.emailTextBox=page.getByRole("textbox",{name:locale.email_textboxname} );

  }

  async navigateTo(targetUrl: string) {
    await this.page.goto(targetUrl);
  }

  async verifyLanguageHeader() {
    // Generous timeout to allow the global localization CDN routes to load
  
    await expect(this.headerMessage).toBeVisible();
  }

  async verifycontactHeaderMessage(){
   
   await expect(this.contactHeaderMessage).toBeVisible();
  }
  async enterEmailAddress(emailaddress :string)
  {
    
    await this.emailTextBox.fill(emailaddress);
  }
}
