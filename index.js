const i18Obj = {
  'en': {
    'skills': 'Skills',
    'portfolio': 'Portfolio',
    'video': 'Video',
    'price': 'Price',
    'contacts': 'Contacts',
    'hero-title': 'Alexa Rise',
    'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
    'hire': 'Hire me',
    'skill-title-1': 'Digital photography',
    'skill-text-1': 'High-quality photos in the studio and on the nature',
    'skill-title-2': 'Video shooting',
    'skill-text-2': 'Capture your moments so that they always stay with you',
    'skill-title-3': 'Rotouch',
    'skill-text-3': 'I strive to make photography surpass reality',
    'skill-title-4': 'Audio',
    'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
    'winter': 'Winter',
    'spring': 'Spring',
    'summer': 'Summer',
    'autumn': 'Autumn',
    'price-description-1-span-1': 'One location',
    'price-description-1-span-2': '120 photos in color',
    'price-description-1-span-3': '12 photos in retouch',
    'price-description-1-span-4': 'Readiness 2-3 weeks',
    'price-description-1-span-5': 'Make up, visage',
    'price-description-2-span-1': 'One or two locations',
    'price-description-2-span-2': '200 photos in color',
    'price-description-2-span-3': '20 photos in retouch',
    'price-description-2-span-4': 'Readiness 1-2 weeks',
    'price-description-2-span-5': 'Make up, visage',
    'price-description-3-span-1': 'Three locations or more',
    'price-description-3-span-2': '300 photos in color',
    'price-description-3-span-3': '50 photos in retouch',
    'price-description-3-span-4': 'Readiness 1 week',
    'price-description-3-span-5': 'Make up, visage, hairstyle',
    'order': 'Order shooting',
    'contact-me': 'Contact me',
    'send-message': 'Send message'
  },
  'ru': {
    'skills': 'Навыки',
    'portfolio': 'Портфолио',
    'video': 'Видео',
    'price': 'Цены',
    'contacts': 'Контакты',
    'hero-title': 'Алекса Райс',
    'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
    'hire': 'Пригласить',
    'skill-title-1': 'Фотография',
    'skill-text-1': 'Высококачественные фото в студии и на природе',
    'skill-title-2': 'Видеосъемка',
    'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
    'skill-title-3': 'Ретушь',
    'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
    'skill-title-4': 'Звук',
    'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
    'winter': 'Зима',
    'spring': 'Весна',
    'summer': 'Лето',
    'autumn': 'Осень',
    'price-description-1-span-1': 'Одна локация',
    'price-description-1-span-2': '120 цветных фото',
    'price-description-1-span-3': '12 отретушированных фото',
    'price-description-1-span-4': 'Готовность через 2-3 недели',
    'price-description-1-span-5': 'Макияж, визаж',
    'price-description-2-span-1': 'Одна-две локации',
    'price-description-2-span-2': '200 цветных фото',
    'price-description-2-span-3': '20 отретушированных фото',
    'price-description-2-span-4': 'Готовность через 1-2 недели',
    'price-description-2-span-5': 'Макияж, визаж',
    'price-description-3-span-1': 'Три локации и больше',
    'price-description-3-span-2': '300 цветных фото',
    'price-description-3-span-3': '50 отретушированных фото',
    'price-description-3-span-4': 'Готовность через 1 неделю',
    'price-description-3-span-5': 'Макияж, визаж, прическа',
    'order': 'Заказать съемку',
    'contact-me': 'Свяжитесь со мной',
    'send-message': 'Отправить'
  }
}
//export default i18Obj;
  
const englishTranslator = document.querySelector('.language-type-english');
const russianTranslator = document.querySelector('.language-type');
const lang = ['en', 'ru'];

/*

/*englishTranslator.addEventListener('click', () => {
  translateElements.forEach(function(translate) {
    translate.classList(i18Obj[0]);
  })
});

russianTranslator.addEventListener('click', () => {
  translateElements.forEach(function(translate) {
    translate.classList(i18Obj[1]);
  })
});

function getTranslate(lang) {
  /*translateElements = document.querySelectorAll('[data-i18n]');
translateElements.forEach(function(translate) {
  if (i18Obj[keys] === translateElements[keys]) {

  }
  translate.textContent = i18Obj[lang][translate.dataset.i18];
})*

}*/

/*russianTranslator.addEventListener('click', () => {
  getTranslate('ru')
});

*/

//burger

  (function () {
    const burgerOpen = document.querySelector('.burger-header');
    const burgerMenu = document.querySelector('.nav');
    const burgerClose = document.querySelector('.nav-close');
    const navLinks = document.querySelectorAll('.nav-link');

    burgerOpen.addEventListener('click', () => {
      burgerMenu.classList.add('nav-active');
    });

    burgerClose.addEventListener('click', () => {
      burgerMenu.classList.remove('nav-active');
    });

     if (window.innerWidth <= 768 ) {
      for (i = 0; i < navLinks.length; i+=1) {
        navLinks[i].addEventListener('click', () => {
          burgerMenu.classList.remove('nav-active'); 
       });
      }
    }

  }());
  

//images

  const portfolioButton = document.querySelector('.section-btn');
  const portfolioImages = document.querySelectorAll('.portfolio-img');
  
  /*portfolioButton.addEventListener('click', () => {
    portfolioImages.src = "./assets/img/winter/1.jpg"
  });

  portfolioButton.addEventListener('click', () => {
    portfolioImages.forEach(function(img, index) {img.src = `./assets/img/winter/${index + 1}.jpg`}
    )
  })
  */

  const portfolioBtns = document.querySelector('.portfolio-btn');


  function changeImage(event) {
    if(event.target.classList.contains('section-btn')) {
    
       portfolioImages.forEach(function(img, index) {img.src = `./assets/img/${event.target.dataset.season}/${index + 1}.jpg`})
       
      }        
      }
    
      portfolioBtns.addEventListener('click', changeImage)
      
      //preload (куширование)

  function preloadSummerImages() {
    for(let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `./assets/img/summer/${i}.jpg`;
    }
  }
  preloadSummerImages();

//
//
//
//

  const seasons = ['winter', 'spring', 'summer', 'autumn'];



  const body = document.querySelector('body');
  const lightThemeElements = document.querySelectorAll('.skills, #portfolio, #video, #price, .span');
  const sunIcon = document.querySelector('.sun');
  const sectionTitles = document.querySelectorAll('.section-title');
  const textSpans = document.querySelectorAll('.text-span');
  const portfolioButtons = document.querySelectorAll('.section-btn');
  const navigation =  document.querySelector('.mini-nav');
  const navLinks = document.querySelectorAll('.nav-link');
  const navClose = document.querySelectorAll('.close-line');
  const moonIcon = document.querySelector('.moon-icon');
/*let lang = 'en';
let theme = 'dark';*/


  sunIcon.addEventListener('click', () => {
    sunIcon.classList.add('sun-hidden');
    moonIcon.classList.add('moon-active');
    body.classList.add('light-theme-body');
    lightThemeElements.forEach(function(element) {
      element.classList.add('light-theme');
  });  
    sectionTitles.forEach(function(title) {
      title.classList.add('light-theme-title');
  });
    textSpans.forEach(function(span) {
      span.classList.add('light-theme-span');
  });
    portfolioButtons.forEach(function(btn) {
      btn.classList.add('light-theme-section-btn');
  });
    if (window.innerWidth <= 768 ) {
      navLinks.forEach(function(link) {
      link.classList.add('light-theme-active');
  });
      navigation.classList.add('light-theme');
  };
    navClose.forEach(function(line) {
      line.classList.add('light-theme-burger');
  });
  });
       
  moonIcon.addEventListener('click', () => {
    sunIcon.classList.remove('sun-hidden');
    moonIcon.classList.remove('moon-active');
    body.classList.remove('light-theme-body');
    lightThemeElements.forEach(function(element) {
      element.classList.remove('light-theme');
  });  
    sectionTitles.forEach(function(title) {
      title.classList.remove('light-theme-title');
  });
    textSpans.forEach(function(span) {
      span.classList.remove('light-theme-span');
  });
    portfolioButtons.forEach(function(btn) {
      btn.classList.remove('light-theme-section-btn');
  });
    if (window.innerWidth <= 768 ) {
      navLinks.forEach(function(link) {
      link.classList.remove('light-theme-active');
  });
      navigation.classList.remove('light-theme');
  };
    navClose.forEach(function(line) {
      line.classList.remove('light-theme-burger');
  });
  });

