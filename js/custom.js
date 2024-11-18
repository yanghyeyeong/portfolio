$(function () {
    gsap.timeline({
        scrollTrigger: {
            trigger: ".page1",
            start: "top 70%",
            end: "20% 100%",
            scrub: 2,
            markers: true,
        },
    })
        .to(".photo", { y: "200px", duration: 1, ease: "elastic" }, 0.2)

        .to(".self", { y: "200px", duration: 1, ease: "elastic" }, 0.3)
        .to(".lisence", { y: "200px", duratuin: 1, ease: "elastic" }, 0.4);

    gsap.timeline({
        scrollTrigger: {
            trigger: ".page1",
            start: "top 90%",
            end: "20% 100%",
            scrub: 2,
            markers: true,
        },
    }).to(".st0", { opacity: 0.3, strokeDashoffset: 0, duration: 1 });
});
