import { test } from '@playwright/test';
import { ParasoftContactPage } from '../pages/ParasoftContactPage'
import enData from '../locales/en.json';
import frData from '../locales/fr.json';
import deData from '../locales/de.json';

const multiLangMatrix = [
  { language: 'English', url: 'https://www.parasoft.com/contact/', data: enData },
  { language: 'French', url: 'https://fr.parasoft.com/contact/', data: frData },
  { language: 'German', url: 'https://de.parasoft.com/contact/', data: deData }
];

for (const suite of multiLangMatrix) {
  test(`@Verify Parasoft Contact Localization - ${suite.language}`, async ({ page }) => {
    const contactPage = new ParasoftContactPage(page, suite.data);

    // Act & Assert
    await contactPage.navigateTo(suite.url);
    await contactPage.verifyLanguageHeader();
    await contactPage.verifycontactHeaderMessage();
    await contactPage.enterEmailAddress("Sagar-Chaudhari-Automation@gmail.com");
  });
}
