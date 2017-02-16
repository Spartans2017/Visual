
'use strict';

let I, newLookPopupFragment;

module.exports = {

  _init() {
    I = actor();
    newLookPopupFragment = require('../fragments/newLookPopup.js');
    newLookPopupFragment._init();
  },

  // locators
  login: '[class="barbottomleft arrow "][onclick="go(\'login\')"]',
  myAccount: '[class="barmiddleright arrow "][onclick="go(\'account\')"]',
  
  // methods
  dismissNewLookDialog() {
    newLookPopupFragment.confirm();
  },
  goToLogin(){
    I.click(this.login);
  },
  goToMyAccount(){
    I.click(this.myAccount);
  },
  verifyUser(){
    I.waitForText('Asd Asd (product_live_de', 5);
  }
};
