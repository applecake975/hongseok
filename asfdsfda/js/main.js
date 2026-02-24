AOS.init();

//햄버거 메뉴
const header = document.querySelector('header');

document.querySelector('#hamMenu').addEventListener('click', function () {
  header.classList.toggle('on');
});

//스크롤이벤트 - 해더
let lastScrollY = window.scrollY;//직전 스크롤 위치 저장

window.addEventListener('scroll', () => {
  const cureentScrollY = window.scrollY; //스크롤 이벤트시 스크롤 위치 저장
  if (cureentScrollY > lastScrollY) {
    //아래로스크롤 - 헤더 숨김
    header.style.top = '-100px';
  } else {
    //위로 스크롤 - 헤더 보임
    header.style.top = '0';
  }
  lastScrollY = cureentScrollY;
})

//메인 비주얼 swiper 슬라이드
let mainSlide = new Swiper(".main_visual .swiper", {
  loop: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".main_visual .pager .right",
    prevEl: ".main_visual .pager .left",
  },
});

//메인 슬라이드 자동재생 = 일시정지 or 플레이
const toggleBtn = document.querySelector('.btn_box i');
toggleBtn.addEventListener('click', function () {
  //swiper에서 autoplay가 현재 실행중인지 여부를 알려주는 불리언 값(true/false)
  //console.log(mainSlide.autoplay.running);
  if (mainSlide.autoplay.running) {
    mainSlide.autoplay.stop();
    this.classList.remove('fa-pause');
    this.classList.add('fa-play');
  } else {
    mainSlide.autoplay.start();
    this.classList.remove('fa-play');
    this.classList.add('fa-pause');
  }
})

//pager 숫자 업데이트
const numEl = document.querySelector('.main_visual .pager .txt_box .num');
const totalEl = document.querySelector('.main_visual .pager .txt_box span:last-of-type');

//복제본 제외한 실제 슬라이드 개수 계산
const getTotal = () => mainSlide.slidesEl.querySelectorAll('.swiper-slide:not(.swiper-slide-duplicate)').length;

//번호 총개수 세팅
const setPager = () => {
  const cureent = mainSlide.realIndex + 1;
  numEl.textContent = String(cureent);
  totalEl.textContent = String(getTotal());
}
//최초 1회 설정 
setPager();
mainSlide.on('slideChange', setPager); //슬라이드 바뀔때 이벤트 연결



const infoSlide = new Swiper(".info .swiper", {
  direction: "vertical",
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

const customerSlide = new Swiper(".customer .swiper", {
  loop: true,
  slidesPerView: 'auto', //아이템 너비만큼 자연 흐름
  spaceBetween: 30,
  speed: 9000, //전체 트랙이 한번 도는 시간 (느리게=크게)
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: false, //마우스 올려도 안 멈추게
  },
  loopAdditionalSlides: 5, //루프 시 빈틈 방지
  on: {
    init: function () {
      this.wrapperEl.style.transitionTimingFunction = 'linear';
    },
    slideChangeTransitionStart: function () {
      this.wrapperEl.style.transitionTimingFunction = 'linear';
    },
  }
});

const blogSlide = new Swiper(".blog .swiper", {
  loop: true,
  slidesPerView: 'auto', //아이템 너비만큼 자연 흐름
  spaceBetween: 30,
  speed: 12000, //전체 트랙이 한번 도는 시간 (느리게=크게)
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: false, //마우스 올려도 안 멈추게
  },
  loopAdditionalSlides: 5, //루프 시 빈틈 방지
  on: {
    init: function () {
      this.wrapperEl.style.transitionTimingFunction = 'linear';
    },
    slideChangeTransitionStart: function () {
      this.wrapperEl.style.transitionTimingFunction = 'linear';
    },
  }
});

document.querySelector('.select_box button')
  .addEventListener('click', () => {
    document.querySelector('.select_box').classList.toggle('on');
  })