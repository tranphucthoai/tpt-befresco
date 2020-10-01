$(function () {
    //owlcarousel main
    $('.owl-carousel-main').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
    });

    //owlcarousel product
    $('.product-home .owl-carousel-product.i4').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3500,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            }
        },
    })

    //owlcarousel cooking
    $('.cooking-home .owl-carousel-product.i35').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        center: true,
        items: 2,
        margin: 8,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            }
        },
    })

    //owlcarousel news
    $('.news-home .owl-carousel-product.i3').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        margin: 8,
        autoplay: true,
        autoplayTimeout: 4500,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2,
            },
            768: {
                items: 3,
            },
        },
    })

    //owlcarousel certification
    $('.certification-home .owl-carousel-product.i5').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        margin: 15,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 5,
            }
        },
    })

    //menu-responsive
    $(".navigation-header .close-menu").click(function () {
        $(".navigation-header").removeClass("is-active");
        $(".overlay-body").addClass("d-none");
    });

    $("#menu .menu-small .navigation-button").click(function () {
        $(".navigation-header").addClass("is-active");
        $(".overlay-body").removeClass("d-none");
    });

    $("#menu .overlay-body").click(function () {
        $(".navigation-header").removeClass("is-active");
        $(".overlay-body").addClass("d-none");
    });

    //owlcarousel page product
    $('.product-home .owl-carousel-product.i6').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3500,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2,
            },
            768: {
                items: 4,
            },
            992: {
                items: 6,
            }
        },
    })

    //select quatity product
    $(".btn-minus").click(function () {
        var selectInput = $(".input-quatity");

        var quatity = parseInt(selectInput.val().trim());
        if (quatity != 1) {
            selectInput.val(quatity - 1);
        };

    });
    $(".btn-plus").click(function () {
        var selectInput = $(".input-quatity");
        debugger;
        var quatity = parseInt(selectInput.val().trim());
        selectInput.val(quatity + 1);
    });
    // tab detail product
    $(".tab-container .tab-left .tab-left-list .tab-left-list-item").click(function () {
        //add and remove class tab left
        $(".tab-container .tab-left .tab-left-list .tab-left-list-item").removeClass("is-active");
        $(this).addClass("is-active");

        //add and remove class tab right
        //debugger;
        $(".tab-container .tab-right .tab-right-list .tab-right-list-item").removeClass("is-active");


        var nameItemCLick = $(this).attr("name");

        var selector = ".tab-container .tab-right .tab-right-list .tab-right-list-item[name='" + nameItemCLick + "']";

        $(selector).addClass("is-active");
    });

    //see more product detail
    $(".main-product .main-product-container .tab-right .see-more").click(function () {
        $(".main-product .main-product-container .tab-right").toggleClass("show-full");

        var selectorHtml = $(".main-product .main-product-container .tab-right .see-more a");
        var textSeeMore = selectorHtml.html().trim();
        //debugger;
        if (textSeeMore == "Xem Thêm") {
            selectorHtml.html("Thu Gọn");
        } else {
            selectorHtml.html("Xem Thêm");
            $([document.documentElement, document.body]).animate({
                scrollTop: $(".home-tab").offset().top
            }, 700);
        }

    });
});
