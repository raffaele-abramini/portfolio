/*jshint nonew:true, curly:true, noarg:true, forin:true, noempty:true, eqeqeq:true, strict:true, undef:true, bitwise:true, browser:true */

var OI = OI || {};

OI.lazyLoad = (function () {
    'use strict';
    var $lazyImage = $('.js-lazy-load');

    $(window).load(function(){
        $lazyImage.each(function(){
            var $this = $(this);
            $this.attr('src', $this.data('lazy-src'));
        });
    });
})();