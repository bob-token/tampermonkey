// ==UserScript==
// @name         检测预约号
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://aux.szhr.com/pasr/reserv.action?r=0.9628721010304468
// @grant        none
// ==/UserScript==

//debugger;


(function() {

    setTimeout(myFunction, 3000);
})();


$( window ).load(function(){


});

var color=666;

function myFunction(){
    var i=0;

    var myindex=i;
    var content;

    var objs = $("#bd > div:nth-child(2) > table > tbody > tr > td > span").css( "background-color", "red" );
    var obj = $("#bd > div:nth-child(2) > table > tbody > tr > td > span.ap");

    if(obj.length ==1){
        obj.click();
    }


    debugger;
    color=222;
    for( i=3; i<10; i++){
        myindex=i;

        color+=i*10;
        $("#bd > div:nth-child(2) > table > tbody > tr:nth-child(1) > td:nth-child("+myindex+") > span").css('background-color',"#"+color);
        content = $('#bd > div:nth-child(2) > table > tbody > tr:nth-child(3) > td:nth-child('+myindex+') > span').html();

        if (!/满/i.test(content) && !/不/i.test(content) && !/等待/i.test(content) ){

            var save = window.confirm(content);

            if (save == true) 
            {
                return true;
            }

        }

    }

    color=333;
    for( i=2; i<9; i++){
        color+=i*10;
        myindex=i;
        $("#bd > div:nth-child(2) > table > tbody > tr:nth-child(2) > td:nth-child("+myindex+") > span").css('background-color',"#"+color);
        content = $('#bd > div:nth-child(2) > table > tbody > tr:nth-child(4) > td:nth-child('+myindex+') > span').html();
        if (!/满/i.test(content)&& !/不/i.test(content) && !/等待/i.test(content)){

            var save = window.confirm(content);

            if (save == true)
            {
                return true;
            }
        }
    }

    color=444;
    for( i=3; i<10; i++){
        myindex=i;

        color+=i*10;
        $("#bd > div:nth-child(2) > table > tbody > tr:nth-child(3) > td:nth-child("+myindex+") > span").css('background-color',"#"+color);
        content = $('#bd > div:nth-child(2) > table > tbody > tr:nth-child(3) > td:nth-child('+myindex+') > span').html();

        if (!/满/i.test(content) && !/不/i.test(content) && !/等待/i.test(content) ){

            var save = window.confirm(content);

            if (save == true) 
            {
                return true;
            }

        }

    }

    color=555;
    for( i=2; i<9; i++){
        color+=i*10;
        myindex=i;
        $("#bd > div:nth-child(2) > table > tbody > tr:nth-child(4) > td:nth-child("+myindex+") > span").css('background-color',"#"+color);
        content = $('#bd > div:nth-child(2) > table > tbody > tr:nth-child(4) > td:nth-child('+myindex+') > span').html();
        if (!/满/i.test(content)&& !/不/i.test(content) && !/等待/i.test(content)){

            var save = window.confirm(content);

            if (save == true)
            {
                return true;
            }
        }
    }
    location.reload();
    // setTimeout(myFunction, 3000);
    //  alert(color);
}


var myExtension = {
    init: function() {
        var appcontent = document.getElementById("appcontent");   // browser
        if(appcontent){
            appcontent.addEventListener("DOMContentLoaded", myExtension.onPageLoad, true);
        }
        var messagepane = document.getElementById("messagepane"); // mail
        if(messagepane){
            messagepane.addEventListener("load", function(event) { myExtension.onPageLoad(event); }, true);
        }
    },

    onPageLoad: function(aEvent) {
        var doc = aEvent.originalTarget; // doc is document that triggered "onload" event
        // do something with the loaded page.
        // doc.location is a Location object (see below for a link).
        // You can use it to make your code executed on certain pages only.
        if(doc.location.href.search("forum") > -1)
            alert("a forum page is loaded");
        alert($("#bd > div:nth-child(2) > table > tbody > tr:nth-child(3) > td:nth-child(6) > span").html);

        // add event listener for page unload 
        aEvent.originalTarget.defaultView.addEventListener("unload", function(event){ myExtension.onPageUnload(event); }, true);
    },

    onPageUnload: function(aEvent) {
        // do something
    }
};
