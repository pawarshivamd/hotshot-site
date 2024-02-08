document.addEventListener("DOMContentLoaded", function () {
  const fullScreenLogo = document.querySelector(".full-screen-logo");
  const navbarLogo = document.querySelector(".logo-img");
  const hotWhiteBox = document.querySelector(".bg-red-hot-white-box");
  const customContainer = document.querySelector(".custom-container ");
  const HomePageContainer = document.querySelector(".home-page-container ");
  const HomePageContainerBox = document.querySelector(".home-page-container .home-container-box");
  const HomePageSlider = document.querySelector(".home-page-container .home-img-slider-section");
  const FooterHome = document.querySelector(".footer-home-page-section ");
  const NavHomeUl = document.querySelector(".nav-home-ul ");
  const BorderMove = document.querySelector(".boder-bottom-move");
  // Add click event listener to the logo
  navbarLogo.addEventListener("click", function () {
    // Calculate the position for the destination (navbar)
    const navbarRect = navbarLogo.getBoundingClientRect();
    const destination = {
      top: navbarRect.top + window.scrollY + navbarRect.height / 1,
      right: navbarRect.right + window.scrollX + navbarRect.width / 1,
    };

    // Apply styles for the transition
    // containerFluid.style.display = 'none';
    customContainer.style.maxWidth = "1320px";
    hotWhiteBox.style.display = "none";
    fullScreenLogo.style.position = "relative";
    navbarLogo.style.top = `${destination.top}px`;
    navbarLogo.style.left = `${destination.left}px`;
    fullScreenLogo.style.width = "100px";
    fullScreenLogo.style.height = "100px";
    BorderMove.style.borderBottom = "5px solid var(--theme-color)";
    BorderMove.style.animation = "moveBorder 4s ease-out forwards"
    // BorderMove.style.animationDelay = "5s";

    BorderMove.style.opacity = "1";
    fullScreenLogo.style.transition =
      "top 8s, right 5s, width 5s, height 5s";
    // fullScreenLogo.style.transitionDelay = '5s';
    fullScreenLogo.style.transitionDuration = "2s";
    HomePageContainer.style.opacity = "1";
    FooterHome.style.opacity = "1";
    FooterHome.style.display = "block";
    NavHomeUl.style.opacity = "1";
    NavHomeUl.style.transform = "translateY(0px)";
    HomePageContainerBox.style.transform = "translateY(0px)";
    HomePageContainerBox.style.opacity = "1";
    HomePageSlider.style.transform = "translateY(0px)";
    HomePageSlider.style.opacity = "1";
    navbarLogo.style.position = "absolute";
    navbarLogo.style.width = "126px";
    navbarLogo.style.top = "-36px";
    // navbarLogo.style.transition= "width all 5s ease-in-out";
    // Trigger the transition
    setTimeout(() => {


      if (window.innerWidth >= 768) {
        fullScreenLogo.style.top = "33%";
        // fullScreenLogo.style.left = "4%";
        fullScreenLogo.style.width = "100px";
        fullScreenLogo.style.height = "100px";
   
      } else {
        fullScreenLogo.style.top = "26%";
        // fullScreenLogo.style.left = "10%";
        fullScreenLogo.style.width = "100px";
        fullScreenLogo.style.height = "100px";
      }
    }, 5000);

    // Hide the navbar logo temporarily during the transition
    navbarLogo.style.opacity = "1";

    // After the transition, reset styles and show the navbar logo
    setTimeout(() => {
      // fullScreenLogo.style.transition = "5s";
      // fullScreenLogo.style.transitionDuration = "5s";
      // fullScreenLogo.style.transitionDelay = "5s";
      // fullScreenLogo.style.display = 'none';
    }, 7000); // Adjust the duration based on your CSS transition
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const hotWhiteImg = document.querySelector(".hot-white-img");
  const bgRedHotWhiteBox = document.querySelector(".bg-red-hot-white-box");
  const LogoImg = document.querySelector(".logo-img");

  hotWhiteImg.addEventListener("mouseover", function () {
    bgRedHotWhiteBox.style.backgroundColor = "var(--theme-color)";
    bgRedHotWhiteBox.style.opacity = "0";
    LogoImg.style.zIndex = "1";
  });
  LogoImg.addEventListener("mouseout", function () {
    bgRedHotWhiteBox.style.backgroundColor = "var(--theme-color)";
    bgRedHotWhiteBox.style.opacity = "1";
    LogoImg.style.zIndex = "0";
  });
  // hotWhiteImg.addEventListener("mouseout", function () {
  //   bgRedHotWhiteBox.style.backgroundColor = "var(--theme-color)";
  //   bgRedHotWhiteBox.style.opacity = "1";
  //   LogoImg.style.zIndex = "0";
  // });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  speed: 2000,
  Delay: 9000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    click: function () {
      if (this.activeIndex !== this.clickedIndex) {
        this.slideTo(this.clickedIndex);
      }
    },
    slideChange: function () {
      var activeIndex = this.activeIndex;

      // Find the corresponding product description element
      var productDescriptions = document.querySelectorAll(".products-card");

      // Scroll the products-description-box to bring the target description into view
      if (productDescriptions[activeIndex]) {
        var box = document.querySelector(".products-description-box");
        box.scrollTo({
          top: productDescriptions[activeIndex].offsetTop - box.offsetTop,
          behavior: "smooth",
        });
      }

      var activeIndex = this.activeIndex;

      // Remove 'active' class from all product descriptions
      document.querySelectorAll(".products-card").forEach(function (card) {
        card.classList.remove("active");
      });

      // Add 'active' class to the corresponding product description
      var productCard =
        document.querySelectorAll(".products-card")[activeIndex];
      productCard.classList.add("active");
    },
    slideChangeTransitionEnd: function () {
     // Add classes to identify the next and previous slides
  document.querySelector(".swiper-slide-next").classList.add("swiper-slide-next");
  document.querySelector(".swiper-slide-prev").classList.add("swiper-slide-prev");
  // Removed the commented out line as it was not necessary
    },
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const listSection = document.querySelector(
    ".list-section .list-group-nav-ul"
  );

  menuIcon.addEventListener("click", function () {
    listSection.classList.toggle("active");
  });
});
var swiper = new Swiper(".home-swiper", {
  slidesPerView: 1,
  speed: 2000,
  loop: true,
  autoplay: {
    delay: 1000,
    // disableOnInteraction: false,
  },
});