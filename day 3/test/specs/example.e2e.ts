import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
        //await browser.pause(2000);
        await LoginPage.open1();
        //await browser.pause(3000);
        await LoginPage.openentryadd();
        //await browser.pause(2000);
        await LoginPage.close();
        //await browser.pause(2000);
        await browser.saveScreenshot('./test.png');
        //await browser.pause(2000);
    });
});


