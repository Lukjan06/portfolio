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

  const lightThemeElements = document.querySelectorAll('.light-theme');
  const sunIcon = document.querySelector('.sun');

  function addLightTheme() {
    lightThemeElements.forEach().classList.toggle('light-theme');
    };

   
  sunIcon.addEventListener('click', () => {
  addLightTheme();
  })
  /*sunIcon.addEventListener('click', () => {
   
  })
     
  /*
   lightThemeElements.forEach(el) => el.classList.toggle('light-theme');
     }

sunIcon.addEventListener('click', () => {
addLightTheme;
})*/