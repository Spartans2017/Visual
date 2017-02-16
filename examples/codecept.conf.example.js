console.log('Use JS config file');

console.log(process.profile);

exports.config = {
  "tests": "./*_test.js",
  "timeout": 10000,
  "output": "./output",
  "helpers": {
    "WebDriverIO": {
      "desiredCapabilities": {
        "platformName": "Android",
        "appPackage": "com.example.android.myApp",
        "appActivity": "MainActivity",
        "deviceName": "OnePlus3",
        "platformVersion": "6.0.1"
      },
      "port": 4723,
      "restart": false
    }
  },
  "mocha": {
    "reporterOptions": {
        "mochaFile": "./output/result.xml"
    }
  },
  "name": "tests",
  "bootstrap": "./bootstrap.js",
  "include": {
    "I": "./custom_steps.js",
    "Smth": "./pages/Smth.js",
    "loginPage": "./pages/Login.js",
    "signinFragment": "./fragments/Signin.js"
  }
}
