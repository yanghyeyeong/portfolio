$(function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".visual",
        start: "top top",
        end: "20% 100%",
        scrub: 2,
        // markers: true,
      },
    })
    .to(".mainlogo", {
      scale: "0.5",
      duration: "10",
      opacity: "0.3",
    });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".page1",
        start: "top 5%",
        end: "20% 100%",
        scrub: 2,
        // markers: true,
      },
    })
    .to(".page1 h2", { x: "100%", duration: 1 }, 0.2)
    .to(".photo", { y: "80px", duration: 1, ease: "elastic" }, 0.4)
    .to(".self", { y: "80px", duration: 3, ease: "elastic" }, 0.6)
    .to(".lisence", { y: "80px", duratuin: 5, ease: "elastic" }, 0.8)
    .to(".st0", { opacity: 0.3, strokeDashoffset: 0, duration: 1.5 }, 2.5);

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".page1",
        start: "bottom 10%",
        end: "20% 100%",
        scrub: 2,
        markers: true,
      },
    })
    .to(".st1", { opacity: 0.2, strokeDashoffset: 0, duration: 0.7 }, 3.5)
    .to(".logo_txt", { x: "-50px", duration: 2 }, 0.2)
    .to(".logo", { x: "-50px", duration: 2 }, 0.2)
    .to(".bg1", { width: "100%", duration: 2 }, 0.2)
    .to(".bg2", { width: "100%", duration: 2 }, 0.4)
    .to(".bg3", { width: "100%", duration: 2 }, 0.6)
    .to(".bg4", { width: "100%", duration: 2 }, 0.8);
});
