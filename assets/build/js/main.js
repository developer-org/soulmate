$(document).ready(function () {

    $(" input[name=phone] ").inputmask("+7 (999) 999-99-99");

    $(document).on("click",".menu",function() {
        if($(this).hasClass("open")){
            $(this).toggleClass("open");
            $(".mobile").toggleClass('visible');
            scrollLock.enablePageScroll();
        }else{
            $(this).toggleClass("open");
            $(".mobile").toggleClass('visible');
            scrollLock.disablePageScroll();
        }
    });

    $(document).on("click",".mobile__close",function() {
        if($('.menu').hasClass("open")){
            $('.menu').toggleClass("open");
            $(".mobile").toggleClass('visible');
            scrollLock.enablePageScroll();
        }else{
            $('.menu').toggleClass("open");
            $(".mobile").toggleClass('visible');
            scrollLock.disablePageScroll();
        }
    });

    $(document).on("click", function(e) {
        let user_icon = $( ".auth-nav-header__user" );
        let user__dropdown = $( ".auth-nav-header__dropdown" );
        if (!user_icon.is(e.target) && user_icon.has(e.target).length === 0){
            user__dropdown.removeClass("active");
        }else{
            user__dropdown.addClass("active");
        }
    });

    // $(document).on('click', '.item-program .item-program__arrow', function () {
    //     if($(this).parent().hasClass('active')){
    //         $(this).closest('.item-program').toggleClass('active')
    //         $(this).closest('.item-program').find('.body-item-program').slideToggle(300)
    //     }else{
    //         $('.item-program.active .body-item-program').slideToggle(300)
    //         $('.item-program.active').toggleClass('active')
    
    //         $(this).closest('.item-program').toggleClass('active')
    //         $(this).closest('.item-program').find('.body-item-program').slideToggle(300)
    //     }
    // });

    $(document).on('click', '.item-program', function () {
        if($(this).hasClass('active')){
            $(this).closest('.item-program').toggleClass('active')
            $(this).closest('.item-program').find('.body-item-program').slideToggle(300)
        }else{
            $('.item-program.active .body-item-program').slideToggle(300)
            $('.item-program.active').toggleClass('active')
    
            $(this).closest('.item-program').toggleClass('active')
            $(this).closest('.item-program').find('.body-item-program').slideToggle(300)
        }
    });

    $('.more-text').on('click',function(){
        $(this).parent().find('.text').toggleClass('active');
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).html('Развернуть');
        }else{
            $(this).addClass('active');
            $(this).html('Свернуть');
        }
    });

    $(".form-file input[type=file]").change(function(){
        let filename = $(this).val().replace(/.*\\/, "");
        $(this).closest('.form-file').addClass('active').find('label').addClass('active');
        $(this).closest('.form-file').find('label p').text(filename);
    });

    $(document).on('click', '.form-file-remove', function () {
        $(this).parent().removeClass('active').find('label').removeClass('active');
        $(this).parent().find('label p').text('Перетащите файлы сюда или нажмите, чтобы загрузить');
    });

    $(document).on('click', '.password-visible', function () {
        let input = $(this).parent().find('.password');
        if (input.attr('type') === 'password') {
            input.attr('type','text');
        } else {
            input.attr('type','password');
        }
    });

    $('.js-select').select2();

    if($('.js-select.form-select').length > 0){
        $('.js-select.form-select').select2().data('select2').$dropdown.addClass('form-select-wrap');
    }
    
            
    $(window).on('resize', function() {
        $('.js-select').select2();
    });

    $('#participation').change(function(){
        var selectval= $(this).val(); // Получим значение из select со значением #participation
        if( selectval== 'musician' ) {
            $('.musician_input_div').show();
        } else {
            $('.musician_input_div').hide();
        }
    });

    $('select#team_select').on('change', function() {
        let selectval= $(this).val();

        var parent = $('<div>').addClass('modal__team-item') 
        var text = $('<p>').html(selectval)
        var button = $('<div>').addClass('modal__team-item-del').html(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L6 18" stroke="#6236FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6 6L18 18" stroke="#6236FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`)

        parent.append(text, button);
        $(this).parent().append(parent);
    });

    $(document).on('click', '.modal__team-item-del', function () {
        $(this).parent().remove();
    });

    $(document).on('click', '.courses-main__head-arrow', function () {
        $('.courses-main__head-dropdown').toggleClass("active");
        $(this).toggleClass("active");
    });

    $(document).on('click', '.cookie__btn', function () {
        $('.cookie').fadeOut()
    });

    $(document).on('click', '.item-faculties .item-faculties__plus', function () {
        //$('.item-faculties.active').toggleClass("active");
        $(this).closest('.item-faculties').toggleClass("active");
    });
    $(document).on('click', '.item-faculties .item-faculties__inner-close', function () {
        //$('.item-faculties.active').toggleClass("active");
        $(this).closest('.item-faculties').toggleClass("active");
    });

    

    $(document).on('click', '.feedback-form-lesson__rate button', function () {
        $(this).closest('.feedback-form-lesson__rate').find('.rate-star').removeClass("active");
        $(this).closest('.feedback-form-lesson__rate').find('button').removeClass("active");
        $(this).closest('.feedback-form-lesson__rate').find('.rate-star').addClass("active");
        $(this).addClass("active");
    });


    $('select#module_select').on('change', function() {
        if ($(window).width() < 991) {
            $('.module__tab .tab-module.tab-pane').removeClass('active');
            $(this.value).tab().addClass('show active');
        }
    });

    $('.slider-home-story').owlCarousel({
        items: 1,
        margin: 30,
        loop: false,
        nav: true,
        dots: true,
        navText: [`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7071 4.29289C11.0976 4.68342 11.0976 5.31658 10.7071 5.70711L5.41421 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H5.41421L10.7071 18.2929C11.0976 18.6834 11.0976 19.3166 10.7071 19.7071C10.3166 20.0976 9.68342 20.0976 9.29289 19.7071L2.29289 12.7071C1.90237 12.3166 1.90237 11.6834 2.29289 11.2929L9.29289 4.29289C9.68342 3.90237 10.3166 3.90237 10.7071 4.29289Z" fill="#161616"/>
        </svg>`,`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2929 4.29289C13.6834 3.90237 14.3166 3.90237 14.7071 4.29289L21.7071 11.2929C22.0976 11.6834 22.0976 12.3166 21.7071 12.7071L14.7071 19.7071C14.3166 20.0976 13.6834 20.0976 13.2929 19.7071C12.9024 19.3166 12.9024 18.6834 13.2929 18.2929L18.5858 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H18.5858L13.2929 5.70711C12.9024 5.31658 12.9024 4.68342 13.2929 4.29289Z" fill="#161616"/>
        </svg>`],
    })
    

    var slider_experts = $('.slider-experts')
    slider_experts.owlCarousel({
        items: 3,
        loop: true,
        nav: true,
        dots: true,
        center: true,
        navText: [`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M19.512 8.82165C18.8611 8.17078 17.8059 8.17078 17.155 8.82165L7.15499 18.8217C6.84242 19.1342 6.66683 19.5581 6.66683 20.0002C6.66683 20.4422 6.84242 20.8661 7.15499 21.1787L17.155 31.1787C17.8059 31.8295 18.8611 31.8295 19.512 31.1787C20.1629 30.5278 20.1629 29.4725 19.512 28.8217L12.3572 21.6668L31.6668 21.6668C32.5873 21.6668 33.3335 20.9206 33.3335 20.0002C33.3335 19.0797 32.5873 18.3335 31.6668 18.3335L12.3572 18.3335L19.512 11.1787C20.1629 10.5278 20.1629 9.47253 19.512 8.82165Z" fill="#161616"/>
        </svg>`,`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20.488 8.82165C21.1389 8.17078 22.1941 8.17078 22.845 8.82165L32.845 18.8217C33.1576 19.1342 33.3332 19.5581 33.3332 20.0002C33.3332 20.4422 33.1576 20.8661 32.845 21.1787L22.845 31.1787C22.1941 31.8295 21.1389 31.8295 20.488 31.1787C19.8371 30.5278 19.8371 29.4725 20.488 28.8217L27.6428 21.6668L8.33317 21.6668C7.4127 21.6668 6.6665 20.9206 6.6665 20.0002C6.6665 19.0797 7.4127 18.3335 8.33317 18.3335L27.6428 18.3335L20.488 11.1787C19.8371 10.5278 19.8371 9.47253 20.488 8.82165Z" fill="#161616"/>
        </svg>`],
        responsive:{
            0:{
                items: 3,
                nav: true,
                dots: true,
                margin: 30,
                center: true,
            },
        }
    })

    slider_experts.on("changed.owl.carousel", function(event) {
        let page = event.page.index;
        
        $(".desc-experts")
          .children(".desc-experts__item")
          .removeClass("active")
          .eq(page)
          .addClass("active");
      });


      let slider_base = $('.slider')

      slider_base.on("afterChange", function(ev, slick, current, next) {
            let slide_active = slider_base.find(".slick-center");

            let base_slider_subtitle = slide_active.data('subtitle');
            let base_slider_title = slide_active.data('title');
            let base_slider_text = slide_active.data('text');
            let base_slider_count = slide_active.data('count');

            $('.content-courses-main__subtitle').text(base_slider_subtitle);
            $('.content-courses-main__title').text(base_slider_title);
            $('.content-courses-main__text').text(base_slider_text);
            $('.passed-count').text(base_slider_count);
        });

    slider_base.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        centerMode: true,
        variableWidth: true,
        infinite: true,
        //focusOnSelect: true,
        //cssEase: 'linear',
        touchMove: false,
        swipe: false,
      });

      $(".slider-prev").click(function () {
        slider_base.slick("slickPrev");
        });

        $(".slider-next").click(function () {
            slider_base.slick("slickNext");
        });
      
        $(".slider .item").on("click", function() {
            const index = $(this).attr("data-slick-index");
            $(".slider").slick("slickGoTo", index);
          });
      
      var imgs = $('.slider img');
      imgs.each(function(){
        var item = $(this).closest('.item');
        item.css({
          'background-image': 'url(' + $(this).attr('src') + ')', 
          'background-position': 'center',            
          '-webkit-background-size': 'cover',
          'background-size': 'cover', 
        });
        $(this).hide();
      });


    $('.reviews-student-slider').owlCarousel({
        items: 4,
        margin: 30,
        loop: false,
        nav: true,
        dots: false,
        navText: [`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.7071 4.29289C11.0976 4.68342 11.0976 5.31658 10.7071 5.70711L5.41421 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H5.41421L10.7071 18.2929C11.0976 18.6834 11.0976 19.3166 10.7071 19.7071C10.3166 20.0976 9.68342 20.0976 9.29289 19.7071L2.29289 12.7071C1.90237 12.3166 1.90237 11.6834 2.29289 11.2929L9.29289 4.29289C9.68342 3.90237 10.3166 3.90237 10.7071 4.29289Z" fill="#161616"/>
        </svg>`,`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2929 4.29289C13.6834 3.90237 14.3166 3.90237 14.7071 4.29289L21.7071 11.2929C22.0976 11.6834 22.0976 12.3166 21.7071 12.7071L14.7071 19.7071C14.3166 20.0976 13.6834 20.0976 13.2929 19.7071C12.9024 19.3166 12.9024 18.6834 13.2929 18.2929L18.5858 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H18.5858L13.2929 5.70711C12.9024 5.31658 12.9024 4.68342 13.2929 4.29289Z" fill="#161616"/>
        </svg>`],
        responsive:{
            0:{
                items: 2,
                nav: false,
                dots: true,
                margin: 20,
                autoWidth:true,
            },
            376:{
                items: 2,
                nav: false,
                dots: true,
                margin: 30,
                autoWidth:true,
            },
            767:{
                items: 3,
                nav: true,
                dots: false,
                margin: 30,
                autoWidth:true,
            },
            1024:{
                items: 4,
                nav: true,
                dots: false,
                margin: 30,
                autoWidth:true,
            },
            1367:{
                items: 4,
                nav: true,
                dots: false,
                margin: 30,
                autoWidth:false,
            },

        }
    })
   
    if($('#timer').length > 0){
        const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
        initializeClock('timer', deadline);
    }

});

function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    //const seconds = Math.floor((total / 1000) % 60);
    //const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    
    return {
      total,
      days,
      hours,
      //minutes,
      //seconds
    };
  }
  
  function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    const daysSpan = clock.querySelector('.days');
    const hoursSpan = clock.querySelector('.hours');
    //const minutesSpan = clock.querySelector('.minutes');
    //const secondsSpan = clock.querySelector('.seconds');
  
    function updateClock() {
      const t = getTimeRemaining(endtime);
  
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      //minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      //secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }
  
