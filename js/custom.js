$(document).ready(function() {
    // Loading
    var percent = 0

    var timerfire = setInterval(function(){
        $(".bar").css("width",percent+"%")
            percent+=1
            if (percent>=20){
                $(".loading-icon").addClass("complete_fire")
                
                clearInterval(timerfire)
                $(".pageLoading").addClass("loading_light")
            }
        },30)

    var timer = setInterval(function(){
    $(".bar").css("width",percent+"%")
        percent+=1
        if (percent>=100){
            $(".pageLoading").removeClass("pageLoading_noscroll")
            $(".pageLoading").addClass("complete")
            clearInterval(timer)
        }
        // 調整大小
        if ($(".pageLoading").hasClass("pageLoading_noscroll")) {
        
            function unScroll() {
                var top = $(document).scrollTop();
                $(document).on('scroll.unable', function(e) {
                    $(document).scrollTop(top);
                })
            }
            $('html,body').css({
                'overflow': 'hidden'
            });
        } else {
            function removeUnScroll() {
                $(document).unbind("scroll.unable");

            }
            $('html,body').css({
                'overflow': 'auto'
            });
        }
    },30)

    





    // 禁止縮放 IOS
    window.onload = function() {
        document.addEventListener('touchstart', function(event) {
            if (event.touches.length > 1) {
                event.preventDefault();
            }
        });
        var lastTouchEnd = 0;
        document.addEventListener('touchend', function(event) {
            var now = (new Date()).getTime();
            if (now - lastTouchEnd <= 300) {
                event.preventDefault();
            }
            lastTouchEnd = now;
        }, false);
        document.addEventListener('gesturestart', function(event) {
            event.preventDefault();
        });
    }


  

    $("#js-search").hide();
    $("#icon-btn_search").click(function() {
        $(".header").toggleClass("js_header--seach");
        $("#js-search").slideToggle(500);
        if ($("#js_headerSearch").hasClass("js_header--seach")) {
            $(".header").addClass("js_header--seach");

        }


    });
    $("#icon-btn_search").click(function() {
        $(".search_click_Mask").toggleClass("click_Search_Mask");
        if ($(".search_click_Mask").hasClass("click_Search_Mask")) {
            $(".search_click_Mask").addClass("click_Search_MaskStyle")

            function unScroll() {
                var top = $(document).scrollTop();
                $(document).on('scroll.unable', function(e) {
                    $(document).scrollTop(top);
                })
            }
            $('html,body').css({
                'overflow': 'hidden'
            });
        } else {
            function removeUnScroll() {
                $(document).unbind("scroll.unable");

            }
            $('html,body').css({
                'overflow': 'auto'
            });
        }

    });
    $(".search_click_Mask").click(function() {
        $(".search_click_Mask").removeClass("click_Search_Mask")
        $(".header").removeClass("js_header--seach")
        $("#js-search").hide();

        function removeUnScroll() {
            $(document).unbind("scroll.unable");

        }
        $('html,body').css({
            'overflow': 'auto'
        });
    })

    $("#js_more_btn").click(function() {
        $("#js_more_category").css("height", "inherit")
        $(this).css("display", "none")
        $("#btn_category").css("padding-top", "0px")
    })
    $("#js-menu-toggle").click(function() {
        $(".js-navbar__nav").toggleClass("js__nav-navbar");
        if ($(".js-navbar__nav").hasClass("js__nav-navbar")) {
            function unScroll() {
                var top = $(document).scrollTop();
                $(document).on('scroll.unable', function(e) {
                    $(document).scrollTop(top);
                })
            }
            $('html,body').css({
                'overflow': 'hidden'
            });
        } else {
            function removeUnScroll() {
                $(document).unbind("scroll.unable");
            }
            $('html,body').css({
                'overflow': 'auto'
            });
        }
    });
    $("#js-popup-close").click(function() {
        $(".js-navbar__nav").removeClass("js__nav-navbar");
        if ($(".js-navbar__nav").hasClass("js__nav-navbar")) {
            function unScroll() {
                var top = $(document).scrollTop();
                $(document).on('scroll.unable', function(e) {
                    $(document).scrollTop(top);
                })
            }
            $('html,body').css({
                'overflow': 'hidden'
            });



        } else {

            function removeUnScroll() {
                $(document).unbind("scroll.unable");
            }
            $('html,body').css({
                'overflow': 'auto'
            });


        }
        $(".search_click_Mask").removeClass("click_Search_Mask")
        $(".header").removeClass("js_header--seach")
        $("#js-search").hide();

        function removeUnScroll() {
            $(document).unbind("scroll.unable");

        }
        $('html,body').css({
            'overflow': 'auto'
        });

    });
    
    // logo change when scroll
    $(window).on('scroll', function() {
        var scrollDistance = $(window).scrollTop();
        var $header = $(".js-header");
        if (scrollDistance > 40) {
            $header.addClass("header--scrolling");
        } else {
            $header.removeClass("header--scrolling")
        }
    })

    //top
    $("#top_page").click(function() {
        jQuery("html,body").animate({
                scrollTop: 0,
            },
            1000
        );
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $("#top_page").fadeIn("fast");
        } else {
            $("#top_page").stop().fadeOut("fast");
        }
        return false;
    });




});