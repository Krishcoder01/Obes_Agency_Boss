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
    delay : 4 ,
})

tl.from(".page1" ,{
    y: 1200 ,
    opacity : 0 ,
    ease : Power4 ,
    duration : 0.6 ,
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
cursorAnimation()

