// ==UserScript==
// @name         sunling
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://suum.szsi.gov.cn/suum/goFindUserNameOneStep.do?method=goFindUserNameOneStep2
// @require     http://code.jquery.com/jquery-latest.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $("#name").val("孙灵");
    
    $("#idNo").val("340822198610231444");
    document.getElementById('userType').value="01";
    document.getElementById("idType").value="1";
    // Your code here...
})();