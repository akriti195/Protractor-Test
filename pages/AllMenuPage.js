var user_name=element(by.id('username'));
var password=element(by.name('pwd'));
var login=element(by.xpath("//div[text()='Login ']"));
var keep_me_logged_in=element(by.id('keepLoggedInCheckBox'));
var domain="http://localhost:8080/login.do";

var LoginPage= function(){

   this.get= function(){
    browser.driver.get(`${domain}`);
    browser.driver.sleep(5000);
    };
    this.setUsername=function(username){
        user_name.sendKeys(username);
    }
    this.setPassword=function(passwords){
        password.sendKeys(passwords);
    }
    this.clickOnKeepmeloggedin=function(keepmecheckbox){
        keep_me_logged_in.click();
    }
        
    this.clickLogin=function(){
        login.click();
    }



}
module.exports=AllMenuPage