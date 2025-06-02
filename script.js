const menuOpenButton = document.querySelector("#menu-open-button");
 const menuCloseButton = document.querySelector("#menu-close-button");
 const navLinks = document.querySelector(".nav-menu .nav-links");

 menuOpenButton.addEventListener("click", () => {
   document.body.classList.toggle("show-mobile-menu");
   


 });
//  close menu when the close buttion is clicked
  menuCloseButton.addEventListener("click", () => 
    menuOpenButton.click());

  navLinks.forEach(link => {
  link.addEventListener("click", () => menuCloseButton.click());
});

  const swiper = new Swiper('.swiper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next', // changed
    prevEl: '.swiper-button-prev', // changed
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }
});