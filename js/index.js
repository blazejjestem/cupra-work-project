// Carousels
$(".owl-features").owlCarousel({
  loop: true,
  margin: 10,
  dots: false,
  responsiveClass: true,
  navText: [
    "<div class='nav-button owl-prev'>‹</div>",
    "<div class='nav-button owl-next'>›</div>",
  ],
  responsive: {
    0: {
      items: 2,
      nav: true,
    },
    600: {
      items: 3,
      nav: false,
    },
    1000: {
      items: 3,
      nav: true,
      loop: true,
    },
  },
});

$(".owl-design-one").owlCarousel({
  loop: true,
  margin: 10,
  dots: false,
  responsiveClass: true,
  navText: [
    "<div class='nav-button owl-prev'>‹</div>",
    "<div class='nav-button owl-next'>›</div>",
  ],
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
  },
});

$(".owl-models").owlCarousel({
  loop: true,
  dots: false,
  margin: 10,
  responsiveClass: true,
  navText: [
    "<div class='nav-button owl-prev'>‹</div>",
    "<div class='nav-button owl-next'>›</div>",
  ],
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
  },
});

// Map
//PLichta 54.33045070077531, 18.535811927466803
//Studio gdansk 54.38701761994862, 18.646045135228064

// AIzaSyA8SkoLV8LtUqP7Su8rxnIMtExGNQkUanc
function initMap() {
  // The location
  const plichta = { lat: 54.33045070077531, lng: 18.535811927466803 };
  const studio = { lat: 54.38701761994862, lng: 18.646045135228064 };
  // The map
  const plichtaMap = new google.maps.Map(
    document.getElementById("plichta-map"),
    {
      zoom: 10,
      center: plichta,
    }
  );
  const studioMap = new google.maps.Map(document.getElementById("studio-map"), {
    zoom: 10,
    center: studio,
  });
  // The marker
  const plichtaMarker = new google.maps.Marker({
    position: plichta,
    map: plichtaMap,
    icon: "./img/Vector.png",
  });
  const studioMarker = new google.maps.Marker({
    position: studio,
    map: studioMap,
    icon: "./img/Vector.png",
  });
}

window.initMap = initMap;

// Navbar hamburger menu

const toggleButton = document.querySelector(".nav-toggle-button");
const navLinks = document.querySelector(".nav-links");

toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("nav-links-active");
});
