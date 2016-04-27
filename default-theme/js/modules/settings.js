/*jshint nonew:true, curly:true, noarg:true, forin:true, noempty:true, eqeqeq:true, strict:true, undef:true, bitwise:true, browser:true */

var OI = OI || {};

OI.settings = (function () {
    'use strict';


    var current = '#intro',
        sectionNav = false,
        openedSkill = false;

    function getCurrent(newValue) {
        if(typeof newValue !== 'undefined') {
            current = newValue;
        }
        return current;
    }
    function getSectionNav(newValue) {
        if(typeof newValue !== 'undefined') {
            sectionNav = newValue;
        }
        return sectionNav;
    }
    function getOpenedSkill(newValue) {
        if(typeof newCurrent !== 'undefined') {
            openedSkill = newCurrent;
        }
        return openedSkill;
    }

    return {
        current : getCurrent(),
        sectionNav : getSectionNav(),
        openedSkill : getOpenedSkill()
    }

})();