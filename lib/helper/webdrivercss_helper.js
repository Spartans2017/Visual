'use strict';
let Helper = codecept_helper;

// use any assertion library you like
let assert = require('assert');
let webdrivercss = require('webdrivercss');

class WebdriverCSS extends Helper {

  // before/after hooks
  _before() {
    // remove if not used
  }

  _after() {
    // remove if not used
  }


  checkLayout() {
    var options = {
      test: {
        title: 'login_page',
        name: 'body',
        selector: 'body'
      },
      webdrivercss: {
        screenshotRoot: 'examples/visual/reference',
        failedComparisonsRoot: 'examples/visual/failed',
        misMatchTolerance: 0.05
      }
    };

    let client = this.helpers['WebDriverIO'].browser;
    webdrivercss.init(client, options.webdrivercss);
     return client.webdrivercss(options.test.title, {
      name: options.test.name,
      elem: options.test.selector
    }, function(err,res) {
      console.log(err);
      console.log(res);
    })
  }
}

module.exports = WebdriverCSS;
