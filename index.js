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


const portfolioBtn = document.querySelector('.section-btn');
const portfolioImages = document.querySelectorAll('.portfolio-img');
const portfolioBtns = document.querySelector('.portfolio-btn');

/* portfolioBtn.addEventListener('click', () => {
  portfolioImages.src = "./assets/img/winter/1.jpg"
});*/



/*function changeImage(event) {
  if(event.target.classList.contains('section-btn'.dataset.season = "winter"))
  {
    portfolioImages.forEach((img, index) => img.src = `./assets/img/winter/${index + 1}.jpg`)};

    // здесь код функции, меняющей src изображений
  
}

function preloadSummerImages() {
  for(let i = 1; i <= 6; i++) {
    const img = new Image();
    img.src = `./assets/img/winter/${i}.jpg`;
  }
}
preloadSummerImages();

portfolioBtns.addEventListener('click', changeImage);*/



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

/*
sunIcon.addEventListener('click', () => {
  body.classList.toggle('light-theme-body');
  lightThemeElements.forEach(function(element) {
    element.classList.toggle('light-theme');
});  
  sectionTitles.forEach(function(title) {
    title.classList.toggle('light-theme-title');
});
  textSpans.forEach(function(span) {
    span.classList.toggle('light-theme-span');
})
  portfolioButtons.forEach(function(btn) {
    btn.classList.toggle('light-theme-section-btn');
});
  if (window.innerWidth <= 768 ) {
    navLinks.forEach(function(link) {
    link.classList.toggle('light-theme-active');
});
    navigation.classList.toggle('light-theme');
};
  navClose.forEach(function(line) {
    line.classList.toggle('light-theme-burger');
  })
  
});*/
     
