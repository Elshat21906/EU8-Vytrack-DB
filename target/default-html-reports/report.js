$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Contacts.feature");
formatter.feature({
  "name": "Contacts page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Contact test with email",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@db"
    },
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in as \"sales manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.ContactsStepDefs.the_user_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to \"Customers\" \"Contacts\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.vytrack.step_definitions.NavigationMenuStepDefs.the_user_navigates_to(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the \"jakop@gmail.com\" from contacts",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.ContactsStepDefs.the_user_clicks_the_from_contacts(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ctd class\u003d\"string-cell editable view-mode prevent-text-selection-on-dblclick grid-cell grid-body-cell grid-body-cell-email\" data-column-label\u003d\"Email\"\u003e...\u003c/td\u003e is not clickable at point (661, 649). Other element would receive the click: \u003cdiv class\u003d\"loader-mask shown\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d103.0.5060.134)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027elshatdeMacBook-Air.local\u0027, ip: \u0027fe80:0:0:0:18f7:4638:169e:5af%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002711.3\u0027, java.version: \u002711.0.12\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.134, chrome: {chromedriverVersion: 103.0.5060.134 (8ec6fce403b..., userDataDir: /var/folders/1j/_9_k2ntj1j1...}, goog:chromeOptions: {debuggerAddress: localhost:56668}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: cc8adccaaa8663dbc546a510652d79ab\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat com.vytrack.step_definitions.ContactsStepDefs.the_user_clicks_the_from_contacts(ContactsStepDefs.java:75)\n\tat ✽.the user clicks the \"jakop@gmail.com\" from contacts(file:///Users/elshata/IdeaProjects/EU8-Vytrack-DB/src/test/resources/features/Contacts.feature:75)\n",
  "status": "failed"
});
formatter.step({
  "name": "the information for \"jakop@gmail.com\" should be same with database",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.ContactsStepDefs.the_information_for_should_be_same_with_database(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
});