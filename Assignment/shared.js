
  const faders = document.querySelectorAll(".fade-in");

  appearOptions = {threshold: 0.4,
    rootMargin: "0px 0px -100px 0px"
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
 
