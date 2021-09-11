
  const faders = document.querySelectorAll(".fade-in");

  appearOptions = {threshold: 0.1,
    rootMargin: "0px 0px -500px 0px"
  }
  const appearOnScroll = new IntersectionObserver(
    function(entires, appearOnScroll) {
      entires.forEach(entry => {
  
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add('appear');
          appearOnScroll.unobserve(entry.target) //stop looking once you've done yuour job
        }
      })
  
    }, appearOptions)
  
    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    })
 


    const preloader = document.querySelector('.preloader');
    
    const fadeEffect = setInterval(() => {
      if (!preloader.style.opacity) {
        preloader.style.opacity = 1;
      }
      if (preloader.style.opacity > 0) {
        preloader.style.opacity -= 0.003;
      } else {
        clearInterval(fadeEffect)
        preloader.style.width = '1px'
        
  
      }
    }, 10);
   

    window.addEventListener('load', fadeEffect);
    

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "G-T8W3R25TME");