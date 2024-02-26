createTimeline = ({
  trigger: t,
  endTrigger: e,
  start: s,
  end: o,
  pin: a,
  markers: n,
  scrub: i,
}) =>
  gsap.timeline({
    scrollTrigger: {
      trigger: t,
      endTrigger: e,
      pin: !!a,
      start: s,
      end: o,
      markers: !!n ,
      scrub: i,
    },
  });
const animateHomeAbt = (t) => {
  t.fromTo(
    "#hero_abt span",
    { opacity: 0.1 },
    { opacity: 1, ease: "power2.out", stagger: 0.3, transition: 0.5 }
  );
},
miniTimeline = (t) =>
  createTimeline({
    trigger: "#container",
    endTrigger: ".slider",
    start: "top top",
    end: t,
    pin: !0,
    scrub: 1,
  })
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("load", () => {

    const t = document.querySelector(".preloader_cont");
    gsap.fromTo(t, { y: 0 }, { y: "-100%", ease: "power2.out" }),
      gsap.fromTo(t, { display: "flex" }, { display: "none" }),
      ScrollTrigger.matchMedia({
        "(min-width: 1920px)": function () {
          let container = miniTimeline("bottom+=100 bottom");
          let Frst = miniTimeline("bottom bottom");
          let c = miniTimeline("bottom bottom");
          let Mid = miniTimeline("bottom bottom");
          let brand_text = miniTimeline("bottom bottom");
          const offsetTop = $("#Middle").offset().top + $("#Middle").height() + 32;

          Frst
            .fromTo(
              "#First",
              {
                top: "50%",
                left: "0rem",
                height: "310px",
                transform: "translate(0%, -50%) rotate(1deg)",
              },
              {
                top: "50%",
                left: "50%",
                height: "370px",
                transform: "translate(-50%, -50%) rotate(1deg)",
                ease: "power2.out",
                duration: 2,
              }
            )
            .to("#First", {
              top: "50%",
              left: "50%",
              transform: "translate(-61%, -50%) rotate(0deg)",
              ease: "power2.out",
              duration: 3,
            });
  
          c.fromTo(
            "#Last",
            {
              top: "53%",
              right: "5rem",
  
              height: "106px",
  
              transform: "translate(0%, -50%) rotate(1deg)",
            },
  
            {
              top: "50%",
  
              left: "50%",
  
              transform: "translate(-28%, -28%) rotate(1deg)",
  
              ease: "power2.out",
  
              duration: 2,
            }
          ).to("#Last", {
            top: "50%",
  
            left: "50%",
  
            transform: "translate(-58%, -38%) rotate(0deg)",
  
            ease: "power2.out",
  
            duration: 3,
          });
  
          Mid
            .fromTo(
              "#Middle",
  
              {
                top: "50%",
  
                left: "50%",
  
                height: "269px",
  
                transform: "translate(-50%, -50%) rotate(1deg)",
              },
  
              {
                top: "50%",
  
                left: "50%",
  
                height: "269px",
  
                transform: "translate(-50%, -50%) rotate(1deg)",
  
                ease: "power2.out",
  
                duration: 2,
              }
            )
            .to("#Middle", {
              top: "50%",
  
              left: "50%",
  
              transform: "translate(-65%, -50%) rotate(0deg)",
  
              ease: "power2.out",
  
              duration: 3,
            });
        },
  
        "(min-width: 1000px) and (max-width: 1919px)": function () {
          // add animations and labels to the timeline
  
          let container = miniTimeline("bottom+=100 bottom");
  
          let Frst = miniTimeline("bottom bottom");
  
          let c = miniTimeline("bottom bottom");
  
          let Mid = miniTimeline("bottom bottom");
  
          let brand_text = miniTimeline("bottom bottom");
  
          const offsetTop = $("#Middle").offset().top + $("#Middle").height() - 32;
  
          Frst
  
            .fromTo(
              "#First",
  
              {
                top: "50%",
  
                left: "0rem",
  
                height: "310px",
  
                transform: "translate(0%, -50%) rotate(1deg)",
              },
  
              {
                top: "50%",
  
                left: "50%",
  
                height: "370px",
  
                transform: "translate(-50%, -50%) rotate(1deg)",
  
                ease: "power2.out",
  
                duration: 2,
              }
            )
  
            .to("#First", {
              top: "50%",
  
              left: "50%",
  
              transform: "translate(-61%, -50%) rotate(0deg)",
  
              ease: "power2.out",
  
              duration: 3,
            });
  
          c.fromTo(
            "#Last",
  
            {
              top: "53%",
  
              right: "5rem",
  
              height: "106px",
  
              transform: "translate(0%, -50%) rotate(1deg)",
            },
  
            {
              top: "50%",
  
              left: "50%",
  
              transform: "translate(-28%, -28%) rotate(1deg)",
  
              ease: "power2.out",
  
              duration: 2,
            }
          ).to("#Last", {
            top: "50%",
  
            left: "50%",
  
            transform: "translate(-58%, -38%) rotate(0deg)",
  
            ease: "power2.out",
  
            duration: 3,
          });
  
          Mid
  
            .fromTo(
              "#Middle",
  
              {
                top: "50%",
  
                left: "50%",
  
                height: "269px",
  
                transform: "translate(-50%, -50%) rotate(1deg)",
              },
  
              {
                top: "50%",
  
                left: "50%",
  
                height: "269px",
  
                transform: "translate(-50%, -50%) rotate(1deg)",
  
                ease: "power2.out",
  
                duration: 2,
              }
            )
  
            .to("#Middle", {
              top: "50%",
  
              left: "50%",
  
              transform: "translate(-65%, -50%) rotate(0deg)",
  
              ease: "power2.out",
  
              duration: 3,
            });
        },
  
        "(max-width: 1000px) and (min-width: 600px)": function () {
          // add animations and labels to the timeline
  
          let container = miniTimeline("bottom+=100 bottom");
  
          let Frst = miniTimeline("bottom bottom");
  
          let c = miniTimeline("bottom bottom");
  
          let Mid = miniTimeline("bottom bottom");
  
          let brand_text = miniTimeline("bottom bottom");
  
          const offsetTop = $("#Middle").offset().top + $("#Middle").height() + 32;
  
          Frst
  
            .fromTo(
              "#First",
  
              {
                top: "50%",
  
                left: "0rem",
  
                height: "310px",
  
                transform: "translate(0%, -50%) rotate(1deg)",
              },
  
              {
                top: "50%",
  
                left: "50%",
  
                height: "370px",
  
                transform: "translate(-50%, -50%) rotate(1deg)",
  
                ease: "power2.out",
  
                duration: 2,
              }
            )
  
            .to("#First", {
              top: "50%",
  
              left: "50%",
  
              transform: "translate(-61%, -50%) rotate(0deg)",
  
              ease: "power2.out",
  
              duration: 3,
            });
  
          c.fromTo(
            "#Last",
  
            {
              top: "53%",
  
              right: "5rem",
  
              height: "106px",
  
              transform: "translate(0%, -50%) rotate(1deg)",
            },
  
            {
              top: "50%",
  
              left: "50%",
  
              transform: "translate(-28%, -28%) rotate(1deg)",
  
              ease: "power2.out",
  
              duration: 2,
            }
          ).to("#Last", {
            top: "50%",
  
            left: "50%",
  
            transform: "translate(-58%, -38%) rotate(0deg)",
  
            ease: "power2.out",
  
            duration: 3,
          });
  
          Mid
  
            .fromTo(
              "#Middle",
  
              {
                top: "50%",
  
                left: "50%",
  
                height: "269px",
  
                transform: "translate(-50%, -50%) rotate(1deg)",
              },
  
              {
                top: "50%",
  
                left: "50%",
  
                height: "269px",
  
                transform: "translate(-50%, -50%) rotate(1deg)",
  
                ease: "power2.out",
  
                duration: 2,
              }
            )
  
            .to("#Middle", {
              top: "50%",
  
              left: "50%",
  
              transform: "translate(-65%, -50%) rotate(0deg)",
  
              ease: "power2.out",
  
              duration: 3,
            });
  
        },
  
        "(min-width: 401px) and (max-width: 525px)": function () {
          // add animations and labels to the timeline
  
          let container = miniTimeline("bottom+=400 bottom");
  
          let Frst = miniTimeline("bottom+=200 bottom");
  
          let c = miniTimeline("bottom+=200 bottom");
  
          let Mid = miniTimeline("bottom+=200 bottom");
  
          let brand_text = miniTimeline("bottom bottom");
  
          Frst
  
            .fromTo(
              "#First",
  
              {
                top: "1rem",
  
                left: "45%",
  
                height: "200px",
  
                transform: "translate(-50%, 0%) rotate(1deg)",
              },
  
              {
                top: "50%",
  
                left: "45%",
  
                height: "260px",
  
                transform: "translate(-50%, -50%) rotate(1deg)",
  
                ease: "power2.out",
  
                duration: 3,
              }
            )
  
            .to("#First", {
              top: "50%",
  
              left: "51%",
  
              transform: "translate(-61%, -50%) rotate(0deg)",
  
              ease: "power2.out",
  
              duration: 3,
            });
  
          c.fromTo(
            "#Last",
  
            {
              top: "97%",
  
              left: "50%",
  
              height: "86px",
  
              transform: "translate(-50%, -150%) rotate(1deg)",
            },
  
            {
              top: "50%",
  
              left: "50%",
  
              height: "86px",
  
              transform: "translate(-55%, -30%) rotate(1deg)",
  
              ease: "power2.out",
  
              duration: 3,
            }
          ).to("#Last", {
            // top: "50%",
  
            left: "50%",
  
            transform: "translate(-54%, -38%) rotate(0deg)",
  
            ease: "power2.out",
  
            duration: 3,
          });
  
          Mid
  
            .fromTo(
              "#Middle",
  
              {
                top: "50%",
  
                left: "46%",
  
                height: "189px",
  
                transform: "translate(-50%, -46%) rotate(1deg)",
  
                force3D: false,
              },
  
              {
                top: "50%",
  
                left: "46%",
  
                height: "198px",
  
                transform: "translate(-55%, -50%) rotate(1deg)",
  
                ease: "power2.out",
  
                duration: 3,
  
                force3D: false,
              }
            )
  
            .to("#Middle", {
              top: "50%",
  
              left: "51%",
  
              transform: "translate(-65%, -50%) rotate(0deg)",
  
              ease: "power2.out",
  
              duration: 3,
  
              force3D: false,
            });
        },
  
        "(max-width: 400px) and (min-width:390px)": function () {
          // add animations and labels to the timeline
  
          let container = miniTimeline("bottom+=400 bottom");
  
          let Frst = miniTimeline("bottom+=100 bottom");
  
          let c = miniTimeline("bottom+=100 bottom");
  
          let Mid = miniTimeline("bottom+=100 bottom");
  
          let brand_text = miniTimeline("bottom bottom");
  
          Frst
  
            .fromTo(
              "#First",
  
              {
                top: "1rem",
  
                left: "45%",
  
                height: "200px",
  
                transform: "translate(-50%, 0%) rotate(1deg)",
              },
  
              {
                top: "50%",
  
                left: "45%",
  
                height: "260px",
  
                transform: "translate(-50%, -50%) rotate(1deg)",
  
                ease: "power2.out",
  
                duration: 3,
              }
            )
  
            .to("#First", {
              top: "50%",
  
              left: "51%",
  
              transform: "translate(-61%, -50%) rotate(0deg)",
  
              ease: "power2.out",
  
              duration: 3,
            });
  
          c.fromTo(
            "#Last",
  
            {
              top: "98%",
  
              left: "49%",
  
              height: "86px",
  
              transform: "translate(-50%, -150%) rotate(1deg)",
            },
  
            {
              top: "50%",
  
              left: "50%",
  
              height: "86px",
  
              transform: "translate(-55%, -30%) rotate(1deg)",
  
              ease: "power2.out",
  
              duration: 3,
            }
          ).to("#Last", {
            // top: "50%",
  
            left: "50%",
  
            transform: "translate(-54%, -38%) rotate(0deg)",
  
            ease: "power2.out",
  
            duration: 3,
          });
  
          Mid
  
            .fromTo(
              "#Middle",
  
              {
                top: "50%",
  
                left: "46%",
  
                height: "189px",
  
                transform: "translate(-50%, -46%) rotate(1deg)",
  
                force3D: false,
              },
  
              {
                top: "50%",
  
                left: "46%",
  
                height: "198px",
  
                transform: "translate(-55%, -52%) rotate(1deg)",
  
                ease: "power2.out",
  
                duration: 3,
  
                force3D: false,
              }
            )
  
            .to("#Middle", {
              top: "50%",
  
              left: "51%",
  
              transform: "translate(-65%, -50%) rotate(0deg)",
  
              ease: "power2.out",
  
              duration: 3,
  
              force3D: false,
            });
  
    
        },
  
        "(max-width: 389px)": function () {
          // add animations and labels to the timeline
  
          let container = miniTimeline("bottom+=500 bottom");
  
          let Frst = miniTimeline("bottom+=100 bottom");
  
          let c = miniTimeline("bottom+=100 bottom");
  
          let Mid = miniTimeline("bottom+=100 bottom");
  
          let brand_text = miniTimeline("bottom bottom");
  
          Frst
  
            .fromTo(
              "#First",
  
              {
                top: "1rem",
  
                left: "47%",
  
                height: "150px",
  
                transform: "translate(-50%, 0%) rotate(1deg)",
              },
  
              {
                top: "43%",
  
                left: "45%",
  
                height: "260px",
  
                transform: "translate(-50%, -50%) rotate(1deg)",
  
                ease: "power2.out",
  
                duration: 3,
              }
            )
  
            .to("#First", {
              top: "43%",
  
              left: "51%",
  
              transform: "translate(-61%, -50%) rotate(0deg)",
  
              ease: "power2.out",
  
              duration: 3,
            });
  
          c.fromTo(
            "#Last",
  
            {
              top: "98%",
  
              left: "48%",
  
              height: "86px",
  
              transform: "translate(-50%, -150%) rotate(1deg)",
            },
  
            {
              top: "43%",
  
              left: "50%",
  
              height: "86px",
  
              transform: "translate(-55%, -30%) rotate(1deg)",
  
              ease: "power2.out",
  
              duration: 3,
            }
          ).to("#Last", {
            // top: "50%",
  
            left: "50%",
  
            transform: "translate(-54%, -38%) rotate(0deg)",
  
            ease: "power2.out",
  
            duration: 3,
          });
  
          Mid
  
            .fromTo(
              "#Middle",
  
              {
                top: "50%",
  
                left: "50%",
  
                height: "150px",
  
                transform: "translate(-40%, -46%) rotate(1deg)",
  
                force3D: false,
              },
  
              {
                top: "40%",
  
                left: "40%",
  
                height: "198px",
  
                transform: "translate(-55%, -52%) rotate(1deg)",
  
                ease: "power2.out",
  
                duration: 3,
  
                force3D: false,
              }
            )
  
            .to("#Middle", {
              top: "43%",
  
              left: "51%",
  
              transform: "translate(-65%, -50%) rotate(0deg)",
  
              ease: "power2.out",
  
              duration: 3,
  
              force3D: false,
            });
        },
      });
  
      
    });
  });
  