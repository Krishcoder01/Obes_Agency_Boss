function locomotiveTrigger() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    
    
    
    
    
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    
}



function loader(){
    var line1 = document.querySelectorAll('.line1 h1');
var line1p2h5 = document.querySelector('.line1-part1 h5');
var linep2 = document.querySelector('.line1-part1');
var loader = document.querySelector('.loader');

var grow=0 ;


var tl = gsap.timeline();

tl.from(line1, {
    y : 170 ,
    stagger : 0.2 ,
    delay : 0.5,
    duration : 0.6 ,
    
})

tl.from ( ".line1-part1 " ,{
    opacity : 0 ,
    onStart : function(){
        setInterval(function(){
            if (grow<100){
                line1p2h5.innerHTML =grow ++
            } else {
                line1p2h5.innerHTML =grow 
        
            }
        },33)
    }
})
tl.to(".line1 h2" , {
    animationName : "anime",
    opacity : 1
})

tl.to(loader ,{
    opacity : 0 ,
    duration : 0.4 ,
    delay : 3.4 ,
})

tl.from(".page1" ,{
    y: 1200 ,
    opacity : 0 ,
    ease : Power4 ,
    duration : 0.2 ,
})
tl.to(".loader" , {
    display : "none"
})
tl.from(".nav" , {
   opacity : 0 ,
})
tl.from("#hero1 h1 , #hero2 h1 , #hero3 h3 , #hero3 h2 , #hero4 h1" , {
    y: 120 ,
    stagger : 0.2
})

}
loader()



function cursorAnimation(){
    var crsr = document.querySelector('.crsr');

document.addEventListener('mousemove', function(event){
    var x = event.clientX;
    var y = event.clientY;
    console.log("hello")
    gsap.to( crsr , {
        x : x ,
        y : y ,
        
        
    })
})
Shery.makeMagnet(".nav-part2 h4" , {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
}
// cursorAnimation()

locomotiveTrigger()
