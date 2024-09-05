// wow js slideup Plugin
wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();




document.addEventListener('DOMContentLoaded', () => {
const links = document.querySelectorAll('.client .client_review');
let activeLink = null;

function handleMouseEnter(event) {
// Remove 'selected' class from the currently active link if there is one
if (activeLink) {
activeLink.classList.remove('selected');
}

// Add 'selected' class to the hovered link
event.target.classList.add('selected');

// Update the reference to the currently active link
activeLink = event.target;
}

function handleMouseLeave(event) {
// Optional: Remove 'selected' class when mouse leaves, if needed
// Comment out the following line if you want the selected state to persist
// event.target.classList.remove('selected');
}

// Attach hover event listeners to all links
links.forEach(link => {
link.addEventListener('mouseenter', handleMouseEnter);
link.addEventListener('mouseleave', handleMouseLeave);
});

// Optionally, set one link to be selected by default on page load
if (links.length > 0) {
activeLink = links[1]; // Set the first link as the initially active link
activeLink.classList.add('selected');
}
});


// light box plugin

lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
})


// ==============jq===============

$(document).ready(function(){

  $('.wrapper').slick({
  
    infinite:true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed:300,

    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
    
        
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
       
        
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrow:false
        }
      }

    ]
  });
  });

 

