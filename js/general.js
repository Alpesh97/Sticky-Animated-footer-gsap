gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({
	scrollTrigger: {
	    trigger: ".site-footer",
	    start: "top bottom",
	    end: "bottom bottom",
	    markers: true,
	    scrub: true,
	}
})
.from(".site-footer .container",{
	yPercent: 50,
    duration:1,
    opacity:0,
    ease: Power2.easeOut
})


	

// gsap.to(sections, {
//   xPercent: -100 * (sections.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".side-scrolling-wrapper",
//     pin: true,
//     // anticipatePin: 1,
//     markers: true,
//     scrub: 1,
//     start: "top top",
//     end: () => "+=" + (document.querySelector(".wrapper").offsetWidth)
//   }
// });