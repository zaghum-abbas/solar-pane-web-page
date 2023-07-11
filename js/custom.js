$('.clint-review-message').owlCarousel({
    loop: 1,
    nav: !1,
    dots: 0,
    items: 1,
    autoplay: 1,
})


$('.accordion-header').click(function () {
    var $accordionItem = $(this).parent('.accordion-item');
    var $accordionContent = $(this).next('.accordion-content');
    if (!$accordionItem.hasClass('active')) {
        $('.accordion-item.active').removeClass('active');
        $('.accordion-content').slideUp();
        $accordionItem.addClass('active');
        $accordionContent.slideDown();
    }
});

$(document).ready(function () {
    $(window).scroll(function () {
        const sections = $('section');
        const navLinks = $('.navbar-nav .nav-link');

        let currentSection = '';

        sections.each(function () {
            const sectionTop = $(this).offset().top;
            const sectionHeight = $(this).outerHeight();

            if ($(window).scrollTop() >= sectionTop - sectionHeight / 3) {
                currentSection = $(this).attr('id');
            }
        });

        navLinks.removeClass('active');
        navLinks.each(function () {
            if ($(this).attr('href').slice(1) === currentSection) {
                $(this).addClass('active');
            }
        });
    });
});