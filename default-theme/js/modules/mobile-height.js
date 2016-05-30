/*jshint nonew:true, curly:true, noarg:true, forin:true, noempty:true, eqeqeq:true, strict:true, undef:true, bitwise:true, browser:true */

var OI = OI || {};

OI.mobileHeight = (function () {
    'use strict';
    var $targets = $('.section, .nav'),
        windowwidth = window.innerWidth;

    $targets.css({ 'min-height' : window.innerHeight});


    $(window).resize(function(){
        if(windowwidth != window.innerWidth && windowwidth < 768){
            windowwidth = window.innerWidth;
            $targets.css({ 'min-height' : window.innerHeight});
        }
    })

})();