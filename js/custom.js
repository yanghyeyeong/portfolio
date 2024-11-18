$(function () {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".profile .photo",
        start: "top 90%",
        end: "20% 100%",
        scrub: 2,
        markers: true,
      },
    })
    .to(".st0", { strokeDashoffset: 0, duration: 1 });
});
