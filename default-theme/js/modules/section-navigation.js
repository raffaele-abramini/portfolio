// /*jshint nonew:true, curly:true, noarg:true, forin:true, noempty:true, eqeqeq:true, strict:true, undef:true, bitwise:true, browser:true */
//
// var OI = OI || {};
//
// OI.sectionNavigation = (function ($) {
//     'use strict';
//
//
//     var currentSection = '#intro',
//         sectionNav = false,
//         openedSkill = false;
//
//
//     $('body').on('click', '#prev-section', function(){
//         if(!$(this).hasClass('false') && !$(this).hasClass('disabled') && !$('body').hasClass('menu-opened')){
//             $('.section-nav').addClass('false');
//             $(currentSection).prev('.section').velocity("scroll", { duration: 700, easing: "easeOutCubic", complete: function(){$('.section-nav').removeClass('false');}});
//         }
//     });
//     $('body').on('click', '#next-section', function(){
//         if(!$(this).hasClass('false') && !$(this).hasClass('disabled') && !$('body').hasClass('menu-opened')){
//             $('.section-nav').addClass('false');
//             $(currentSection).next('.section').velocity("scroll", { duration: 700, easing: "easeOutCubic", complete: function(){$('.section-nav').removeClass('false');}});
//         }
//     });
//
//
//     var sectionReached = function(_this){
//         var t = _this.data('title');
//         var c = _this.data('color');
//         $('#nav-open').find('h3').remove();
//         $('#nav-open').prepend('<h3 class="'+c+'">'+t+'</h3>');
//         page.data.current = '#'+_this.attr('id');
//         if(page.data.sectionNav){
//             if(_this.hasClass('first')){$('#prev-section').addClass('disabled');}
//             else if(_this.hasClass('last')){$('#next-section').addClass('disabled');}
//             else {$('#prev-section,#next-section').removeClass('disabled');}
//         }
//     };
//
//     var homeWaypoint = function(){
//         // Waypoint
//         $('.section').waypoint(function(direction) {
//             var _this = $(this);
//             if(direction == 'down'){
//                 page.sectionReached(_this);
//             }
//             if(_this.hasClass('toAnimate')){
//                 if(_this.attr('id') == 'portfolio'){$.Velocity.RunSequence(page.animations.portfolio); }
//                 if(_this.attr('id') == 'about'){$.Velocity.RunSequence(page.animations.about); }
//                 if(_this.attr('id') == 'skills'){$.Velocity.RunSequence(page.animations.skills); }
//             }
//         }, {offset:'15%'});
//         $('.section').not('.fixed').waypoint(function(direction) {
//             if(direction == 'up'){
//                 page.sectionReached($(this));
//
//             }
//         }, {offset:'-90%'});
//     };
//
// })(jQuery);