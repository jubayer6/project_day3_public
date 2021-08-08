// OUR PROFESSIONAL SERVICE silder
var swiper1 = new Swiper('.slider_of_service .swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  // init: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigator: true,
  breakpoints: {
    '@0.00': {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    '@0.75': {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    '@1.00': {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    '@1.50': {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }
});


// slider of create meeting 

var swiper2 = new Swiper('.create_meeting_slider .swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }
});


// slider of what is our survice 

var swiper3 = new Swiper('.first_slider_of_our_survice .swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }
});


// activation of service and shop 

var sbsb_act = document.querySelector('.sbsb_act');
var survice_btn = document.querySelector('.survice_btn');
var shop_btn = document.querySelector('.shop_btn');

var survice_btn_p = document.querySelector('.survice_btn p');
var shop_btn_p = document.querySelector('.shop_btn p');
var s_act = document.querySelector('.s_act');


shop_btn.addEventListener('click', function(){
  sbsb_act.style.left = '63%';
  survice_btn_p.classList.remove('s_act');
  shop_btn_p.classList.add('s_act');

});

survice_btn.addEventListener('click', function(){
  sbsb_act.style.left = '0%';
  shop_btn_p.classList.remove('s_act');
  survice_btn_p.classList.add('s_act');
});


// slider of our social media feature

var swiper4 = new Swiper('.slider_USM .swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }
});


// slider of world biggest service plateform

var swiper5 = new Swiper('.wBSP_slider .swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 300,
    modifier: 2,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  loop:true,
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    }
});

// today best view 

// image slider 
var swiper = new Swiper('.tIMG_box .swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
      el: '.swiper-pagination',
  },
});

// column slider 

var swiper = new Swiper('.slider_ofTBV .big_swiper_container.swiper-container', {
slidesPerView: 4,
slidesPerColumn: 2,
spaceBetween: 25,
  pagination: {
    el: '.big_pagination.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

// heart red and o system

function heart(){
var redh = document.getElementById('red_h');
var redh_o = document.getElementById('o_h');
redh.style.display = 'none';
redh_o.style.display = 'block';
};

function heart_o(){
var redh = document.getElementById('red_h');
var redh_o = document.getElementById('o_h');
redh_o.style.display = 'none';
redh.style.display = 'block'; 
};
