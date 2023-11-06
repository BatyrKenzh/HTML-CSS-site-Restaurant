(function() {
  "use strict";


  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }


  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }


  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }


  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }


  let selectHeader = select('#header')
  let selectTopbar = select('#topbar')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
        if (selectTopbar) {
          selectTopbar.classList.add('topbar-scrolled')
        }
      } else {
        selectHeader.classList.remove('header-scrolled')
        if (selectTopbar) {
          selectTopbar.classList.remove('topbar-scrolled')
        }
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

//Back to top button

  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }


  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })


  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)


  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

//Scroll with ofset on page load with hash links in the url

  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

// Hero carousel indicators
   
  let heroCarouselIndicators = select("#hero-carousel-indicators")
  let heroCarouselItems = select('#heroCarousel .carousel-item', true)

  heroCarouselItems.forEach((item, index) => {
    (index === 0) ?
    heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "' class='active'></li>":
      heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "'></li>"
  });


  window.addEventListener('load', () => {
    let menuContainer = select('.menu-container');
    if (menuContainer) {
      let menuIsotope = new Isotope(menuContainer, {
        itemSelector: '.menu-item',
        layoutMode: 'fitRows'
      });

      let menuFilters = select('#menu-flters li', true);

      on('click', '#menu-flters li', function(e) {
        e.preventDefault();
        menuFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        menuIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });

      }, true);
    }

  });


  new Swiper('.events-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });


  const galleryLightbox = GLightbox({
    selector: '.gallery-lightbox'
  });

//Testimonials slider
 
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

})()

$(document).ready(function(){
  $("p").click(function(){
    $(this).hide();
  });
});

function task(){
	$(document).ready(function() {

		$("#rows").submit(function(event) {
			event.preventDefault();
			var name = $("#name").val();
			var email = $("#email").val();
			var phone = $("#phone").val();
			var date = $("#date").val();
			var time = $("#time").val();
			var people = $("#people").val();

			$("input").focus(function(){
				$(this).css("background-color", "yellow");
			});
			$("input").blur(function(){
				$(this).css("background-color", "green");
			});

			if (name === '' || email === '' || phone === '' || date === '' || time === '' || people === '') {
				alert('Please fill in all fields');
				return;
			}


			alert("Congratulations" + name + "! You successfully booked a table)))");
			
		});
	});
}


$(document).ready(function(){
	$("#bat").mouseenter(function(){
		alert("If the phone doesn't work, try this one: +7 775 874 00 00");
	});
});


$(document).ready(function(){
	$("#copy").mouseenter(function(){
		alert("You can contact me and I will sell you this site))");
	});
});


$(document).ready(function(){
	$("#mc").on("click", function(){
		alert("We will not allow changes to the menu content or prices. This is considered an attempt at fraud.");
	});
});


var audio = document.getElementById("myAudio");


    var playSoundButton = document.getElementById("playSoundButton");

 
		playSoundButton.addEventListener("click", function() {

        if (audio.paused || audio.ended) {
            audio.play();
        } 
		else {

            audio.currentTime = 0;
        }
     });
	 
	 
$(document).ready(function(){
	$("#coments").click(function(){
		$("img").animate({left: '250px'});
	});
});