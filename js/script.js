const DELAY_SHOW_LOADING=200; // delay before showing loading icon (ms)


console.log("script loaded at " +  performance.now());


// manage loading icon
var showingLoading = false;
setTimeout(() => {
  let loadingIcon = document.getElementById("loading-indicator");
  if (!showingLoading && loadingIcon != null) {
    loadingIcon.style.opacity = 1;
    console.log("showing loading indicator")
  }
  showingLoading = true;
}, Math.max(DELAY_SHOW_LOADING - performance.now(), 0)); // show loading icon after delay

window.addEventListener("load", (event) => {
  let loadTime = performance.now()
  console.log("fully loaded at " + loadTime);

  let loadingIcon = document.getElementById("loading-indicator");
  if (!showingLoading) {
    // immediately remove, it has never shown
    console.log("removed loading indicator before showing");
    loadingIcon.remove();
  } else {
    // fade out from view, then delete
    console.log("fading out loading indicator");
    loadingIcon.style.opacity = 0;
    setTimeout(() => {
      loadingIcon.remove();
    }, 1000);
  }
});


// set nav bar background opacity and blur by scroll
const PIXELS_TO_SCROLL=50;
const MAX_BLUR=30;  
const MAX_OPACITY=0.85;
const MAX_OPACITY_SHADOW=0.22

function handleScroll() {
  const navbar = document.querySelector("#navbar");
  const scrollPosition = window.scrollY;

  const opacity = Math.min(scrollPosition / PIXELS_TO_SCROLL, 1);
  const blur = Math.min(scrollPosition / PIXELS_TO_SCROLL * MAX_BLUR, MAX_BLUR);

  // opacity
  // let backRGB = getComputedStyle(navbar).backgroundColor.match(/\d+/g); // rbg array
  let backRGB = [255, 255, 255]
  if (getQueryValue("p") == "photo")
    backRGB = [20, 20, 20];
  navbar.style.backgroundColor = `rgba(${backRGB[0]}, ${backRGB[1]}, ${backRGB[2]}, ${opacity * MAX_OPACITY})`;
  navbar.style.boxShadow = `0px 1px 5px rgba(100, 100, 100, ${opacity * MAX_OPACITY_SHADOW})`;
  // blur
  navbar.style.backdropFilter = `blur(${blur}px)`;
  navbar.style.webkitBackdropFilter = `blur(${blur}px)`;
}
window.addEventListener('scroll', handleScroll);


// scroll to projects section
if (document.getElementById("my-work-link")) {
  document.getElementById("my-work-link").addEventListener("click", () => {
    document.getElementById("my-work-section").scrollIntoView({behavior: "smooth"})
  })
}