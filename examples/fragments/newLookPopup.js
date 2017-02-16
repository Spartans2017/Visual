
'use strict';

let I;

module.exports = {

  _init() {
    I = actor();
  },
  
  // locators
  root: '[class="dialog-container"] [class="window fadein"]',
  okButton: '[class="w100 dialog-button"]',
  loader: '[id="loading"]',
  
  // methods
  confirm() {
      I.click(this.okButton);
      I.waitForInvisible(this.root, 5);
      I.waitForInvisible(this.loader, 5);
  }
};
