// /*jshint nonew:true, curly:true, noarg:true, forin:true, noempty:true, eqeqeq:true, strict:true, undef:true, bitwise:true, browser:true */
//
// var OI = OI || {};
//
// OI.settings = function () {
//     'use strict';
//
//     page.data.h = $(window).height();
//     page.data.w = $(window).width();
//     page.data.skillNumber = 5;
//     if(page.data.w >= 1200){
//         page.data.portfolioNumber = 5;
//     } else if(page.data.w >= 980) {
//         page.data.portfolioNumber = 4;
//     } else if(page.data.w >= 768) {
//         page.data.portfolioNumber = 3;
//     } else if(page.data.w >= 480) {
//         page.data.portfolioNumber = 2;
//     } else {
//         page.data.portfolioNumber = 1;
//     }
//     if(page.data.w < 768){
//         page.data.skillNumber = 4;
//     }
//
//     page.setSectionH(page.data.h);
//     page.centerElements(page.data.h);
// };