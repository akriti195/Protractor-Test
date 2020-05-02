var loginPage = require('../pages/LoginPage.js');
describe('ActiTIME login page functionality', function () {
    browser.manage().timeouts().implicitlyWait(21000);
    browser.manage().timeouts().pageLoadTimeout(21000);
    var login = new loginPage();
    // beforeEach(() => {
    //     login.get;
    // });

    it('Login functionality', function () {
        login.get();
        login.setUsername('admin');
        login.setPassword('manager');
        login.clickOnKeepmeloggedin();
        login.clickLogin();
    });
    //Test
});
