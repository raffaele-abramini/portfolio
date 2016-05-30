'use strict';

var page = {

    data : {
        current : '#intro',
        openedSkill : false
    },
    init : function(){
        var $body = $('body');
        $(window).scrollTop(0);

        // Section navigation
        $body.on('click', '#prev-section', function(){
            if(!$(this).hasClass('false') && !$(this).hasClass('disabled') && !$body.hasClass('js-menu-opened')){
                $('.section-nav').addClass('false');
                $(page.data.current).prev('.section').velocity("scroll", { duration: 700, easing: "easeOutCubic", complete: function(){$('.section-nav').removeClass('false');}});
            }
        });
        $body.on('click', '#next-section', function(){
            if(!$(this).hasClass('false') && !$(this).hasClass('disabled') && !$body.hasClass('js-menu-opened')){
                $('.section-nav').addClass('false');
                $(page.data.current).next('.section').velocity("scroll", { duration: 700, easing: "easeOutCubic", complete: function(){$('.section-nav').removeClass('false');}});
            }
        });

        // Menu Control
        $('.nav-toggle--open').click(function(a){
            a.preventDefault();
            if($(this).hasClass('menu-opened')){
                page.menu.close();
            } else {
                page.menu.open();
            }
        });
        $('.nav-toggle--close').click(function(){
            page.menu.close();
        });
        $('.nav-main').on('click', 'li a', function(e){
            e.preventDefault();
            page.scrollTo($(this));
        });

        // Click listeners
        $body.on('click', '.js-portfolio__show-more', function(){
            page.increasePortfolioHeight($(this));
        });

        $body.on('click', '.skills-group__title', function(){
            page.openSkills($(this));
        });


    },

    menu : {
        open : function(){
            $('body').addClass('js-menu-opened');
            $('.nav-toggle--close, .nav-main ul li').velocity('transition.slideRightIn', {duration:200, stagger:80});                       setTimeout(function(){$('.nav-toggle--open').addClass('js-menu-opened');}, 320);
        },
        close : function(complete){
            $('body').removeClass('js-menu-opened');
            $('.nav-toggle--open').removeClass('js-menu-opened');


            setTimeout(function(){
                if(complete){complete();}
            }, 320);
        }
    },
    scrollTo : function(t){
        page.menu.close(function(){
            $(t.attr('href')).velocity("scroll", { duration: 700, easing: "easeOutCubic" });
        });
    },
    
    increasePortfolioHeight : function(t){
        var $portfolio = $('.portfolio');

        $portfolio.velocity({height:$portfolio.get(0).scrollHeight}, {complete:function(){
            t.remove();
            page.homeWaypoint();
        }});
    },

    setSkills :  function(){
        $('.skill-group .skills-container').each(function(){
            var t = $(this);
            var n = t.children().length;
            if((n/page.data.skillNumber) > Math.floor(n/page.data.skillNumber)){
                n = Math.floor(n/page.data.skillNumber) + 1;
            } else {
                n = n/page.data.skillNumber;
            }
            var oh = t.children().first().height();
            t.attr({'data-n' : n, 'data-oh' : oh});
        });
    },

    closeSkills : function(t, complete){
        t.siblings().children('.skills-group__wrap').velocity({height:0}, {delay:0, complete: function(){complete();}});
        page.openedSkill.find('.skill').css({opacity:0});
    },

    openedSkill : null,

    openSkills : function(t){
        var $skillGroup = t.parent(),
            $skillWrap = t.siblings('.skills-group__wrap');
        page.openedSkill = $skillGroup;

        $skillWrap.velocity({height:$skillWrap.get(0).scrollHeight},{duration: 50, easing:"spring", complete:function(){
            $skillWrap.find('.skill').velocity('transition.bounceIn', {delay:200,stagger:100});
        }});
        page.closeSkills($skillGroup);
    },

    sectionReached : function(_this){
        var t = _this.data('title'),
            c = _this.data('color'),
            $toggleOpen = $('.nav-toggle--open');
        $toggleOpen.find('h3').remove();
        $toggleOpen.prepend('<h3 class="'+c+'">'+t+'</h3>');
        page.data.current = '#'+_this.attr('id');

        if(_this.hasClass('section--first')){$('#prev-section').addClass('nav-actions__item--disabled');}
        else if(_this.hasClass('section--last')){$('#next-section').addClass('nav-actions__item--disabled');}
        else {$('#prev-section,#next-section').removeClass('nav-actions__item--disabled');}
    },

    homeWaypoint : function(){
        // Waypoint
        var $section = $('.section');
        $section.waypoint(function(direction) {
            var _this = $(this.element);
            if(direction == 'down'){
                page.sectionReached(_this);
            }
            if(_this.hasClass('js-animated')){
                if(_this.attr('id') == 'portfolio'){$.Velocity.RunSequence(page.animations.portfolio); }
                if(_this.attr('id') == 'about'){$.Velocity.RunSequence(page.animations.about); }
                if(_this.attr('id') == 'skills'){$.Velocity.RunSequence(page.animations.skills); }
            }
        }, {offset:'15%'});
        $section.not('.u-fixed').waypoint(function(direction) {
            if(direction == 'up'){
                page.sectionReached($(this.element));
            }
        }, {offset:'-90%'});
    },
    animations : {
        intro : [
            { e: $('h1'), p: 'transition.shrinkIn', o: { delay:300, duration: 400 } },
            { e: $('.intro h2'), p: 'transition.slideUpIn', o: { duration: 300 } },
            { e: $('.nav-toggle--open, .nav-actions__item'), p: 'transition.slideRightIn', o: { duration: 200, stagger:60 } }
        ],
        portfolio : [
            { e: $('#portfolio').find('.portfolio__element'), p: 'transition.slideUpIn', o: { delay:0, duration: 100, stagger:70, drag: true, begin:function(){$('#portfolio').removeClass('js-animated');}}}
        ],
        about : [
            { e: $('#about').find('.u-animated'), p: 'transition.slideLeftIn', o: { delay:0, duration: 400, stagger:200, drag: true, begin:function(){$('#about').removeClass('js-animated');}}}
        ],
        skills : [
            { e: $('#skills').find('.skills-group'), p: 'transition.expandIn', o: { delay:0, duration: 300, stagger:150, drag: true, begin:function(){$('#skills').removeClass('js-animated');}}}
        ]
    }
};

$(window).load(function(){

    $('body').css({opacity:1});
    page.init();
    $.Velocity.RunSequence(page.animations.intro);
    page.homeWaypoint();
    if(window.innerWidth >= 768){
        $('.portfolio__element').hoverdir();
    }
});