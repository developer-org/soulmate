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

    $(document).on('click', '.item-program .item-program__arrow', function () {
        $(this).closest('.item-program').toggleClass('active')
        $(this).closest('.item-program').find('.body-item-program').slideToggle(300)
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

    $('select#module_select').on('change', function() {
        if ($(window).width() < 991) {
            $('.module__tab .tab-module.tab-pane').removeClass('active');
            $(this.value).tab().addClass('show active');
        }
    });

    $('.teachers-slider').owlCarousel({
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
  

  
