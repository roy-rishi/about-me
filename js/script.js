// scroll to projects section
if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}

// set nav bar background opacity and blur by scroll
const PIXELS_TO_SCROLL=50;
const MAX_BLUR=30;  
const MAX_OPACITY=0.85;
const MAX_OPACITY_SHADOW=0.22

const navbar = document.querySelector('#navbar');
function handleScroll() {
  const scrollPosition = window.scrollY;

  const opacity = Math.min(scrollPosition / PIXELS_TO_SCROLL, 1);
  const blur = Math.min(scrollPosition / PIXELS_TO_SCROLL * MAX_BLUR, MAX_BLUR);

  // opacity
  let backRGB = getComputedStyle(document.getElementById("navbar")).backgroundColor.match(/\d+/g); // rbg array
  console.log("background rgb " + backRGB);
  navbar.style.backgroundColor = `rgba(${backRGB[0]}, ${backRGB[1]}, ${backRGB[2]}, ${opacity * MAX_OPACITY})`;
  navbar.style.boxShadow = `0px 1px 5px rgba(100, 100, 100, ${opacity * MAX_OPACITY_SHADOW})`;
  // blur
  navbar.style.backdropFilter = `blur(${blur}px)`;
  navbar.style.webkitBackdropFilter = `blur(${blur}px)`;
}
window.addEventListener('scroll', handleScroll);
