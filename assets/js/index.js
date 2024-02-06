document.addEventListener("DOMContentLoaded", function () {
  const fullScreenLogo = document.querySelector(".full-screen-logo");
  const navbarLogo = document.querySelector(".logo-img");
  const hotWhiteBox = document.querySelector(".bg-red-hot-white-box");
  const customContainer = document.querySelector(".custom-container ");
  const HomePageContainer = document.querySelector(".home-page-container ");
  const FooterHome = document.querySelector(".footer-home-page-section ");
  const NavHomeUl = document.querySelector(".nav-home-ul ");
  const BorderMove = document.querySelector(".boder-bottom-move");
  // Add click event listener to the logo
  navbarLogo.addEventListener("click", function () {
    // Calculate the position for the destination (navbar)
    const navbarRect = navbarLogo.getBoundingClientRect();
    const destination = {
      top: navbarRect.top + window.scrollY + navbarRect.height / 1,
      left: navbarRect.left + window.scrollX + navbarRect.width / 1,
    };

    // Apply styles for the transition
    // containerFluid.style.display = 'none';
    customContainer.style.maxWidth = "1320px";
    hotWhiteBox.style.display = "none";
    fullScreenLogo.style.position = "absolute";
    fullScreenLogo.style.top = `${destination.top}px`;
    fullScreenLogo.style.left = `${destination.left}px`;
    fullScreenLogo.style.width = "200px";
    fullScreenLogo.style.height = "200px";
    fullScreenLogo.style.transition =
      "top 0.5s, left 0.5s, width 0.5s, height 0.5s";
    // fullScreenLogo.style.transitionDelay = '5s';
    fullScreenLogo.style.transitionDuration = "2s";
    HomePageContainer.style.opacity = "1";
    FooterHome.style.opacity = "1";
    NavHomeUl.style.opacity = "1";
    NavHomeUl.style.transform = "translateY(0px)";
    BorderMove.style.borderBottom = "5px solid var(--theme-color)";
    // Trigger the transition
    setTimeout(() => {


      if (window.innerWidth >= 768) {
        fullScreenLogo.style.top = "31%";
        fullScreenLogo.style.left = "4%";
        fullScreenLogo.style.width = "100px";
        fullScreenLogo.style.height = "100px";
   
      } else {
        fullScreenLogo.style.top = "26%";
        fullScreenLogo.style.left = "10%";
        fullScreenLogo.style.width = "100px";
        fullScreenLogo.style.height = "100px";
     
      }
    }, 0);

    // Hide the navbar logo temporarily during the transition
    navbarLogo.style.opacity = "1";

    // After the transition, reset styles and show the navbar logo
    setTimeout(() => {
      fullScreenLogo.style.transition = "5s";
      fullScreenLogo.style.transitionDuration = "5s";
      fullScreenLogo.style.transitionDelay = "5s";
      // fullScreenLogo.style.display = 'none';
      navbarLogo.style.opacity = "1";
    }, 7000); // Adjust the duration based on your CSS transition
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const hotWhiteImg = document.querySelector(".hot-white-img");
  const bgRedHotWhiteBox = document.querySelector(".bg-red-hot-white-box");
  const LogoImg = document.querySelector(".logo-img");

  hotWhiteImg.addEventListener("mouseover", function () {
    bgRedHotWhiteBox.style.backgroundColor = "transparent";
    bgRedHotWhiteBox.style.opacity = "0";
    setTimeout(function () {
      LogoImg.style.zIndex = "1";
    }, 500);
  });

  hotWhiteImg.addEventListener("mouseout", function () {
    // Reset the background color when the mouse leaves
    bgRedHotWhiteBox.style.backgroundColor = "var(--theme-color)";
    bgRedHotWhiteBox.style.opacity = "1";
    setTimeout(function () {
      LogoImg.style.zIndex = "0";
    }, 1);
  });
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
      // Get the active slide index
      var activeIndex = this.activeIndex;

      // Check if the clicked slide is already active
      if (activeIndex !== this.clickedIndex) {
        // Navigate to the clicked slide
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
      document
        .querySelector(".swiper-slide-next")
        .classList.add("swiper-slide-next");
      document
        .querySelector(".swiper-slide-prev")
        .classList.add("swiper-slide-prev");

      // productCard.classList.add('slide-bottom');
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
  // spaceBetween: 10,
  // centeredSlides: true,
  speed: 2000,
  loop: true,
  autoplay: {
    delay: 1000,
    // disableOnInteraction: false,
  },
});