var loginPage = require('../pages/LoginPage.js');
describe('ActiTIME login functionality', function () {
    browser.manage().timeouts().implicitlyWait(21000);
    browser.manage().timeouts().pageLoadTimeout(21000);
    var login = new loginPage();
    // beforeEach(() => {
    //     login.get;
    // });


    it('1. Check invalid username and password', function () {
        login.get();
        login.setUsername('admins');
        login.setPassword('managers');
        login.clickOnKeepmeloggedin();
        login.clickLogin();
        console.log('1. Check Invalid email & password');
    });
    it('2. Check valid user and invalid password', function () {
        login.get();
        login.setUsername('admin');
        login.setPassword('managers');
        login.clickOnKeepmeloggedin();
        login.clickLogin();
        console.log('2. Check valid user and invalid password');
    });
    it('3. Check valid user and password', function () {
        login.get();
        login.setUsername('admin');
        login.setPassword('manager');
        login.clickOnKeepmeloggedin();
        login.clickLogin();
        console.log('3. Check valid user and password');
});
});