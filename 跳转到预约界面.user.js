// ==UserScript==
// @name         跳转到预约界面
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://aux.szhr.com/pasr/home.action
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
     window.location="http://aux.szhr.com/pasr/reserv.action?r=0.9628721010304468";
    // Your code here...
})();

$( document ).ready(function() {
    //alert( "ready!" );
});