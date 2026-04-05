function toggleMenu() {
      const menu = document.getElementById("menu");
      menu.classList.toggle("show");
 }
    var elems = document.querySelectorAll(".elem")
     elems.forEach(function(elem){
     var h1s = elem.querySelectorAll("h1");
     var index = 0;
     let animating = false;
     document.querySelector("#home").addEventListener("click",function(){
     if(!animating){
     animating = true;
          gsap.to(h1s[index], {
          top: "-=100%",
          ease: "Expo.easeInOut",
          duration: 1,
          onComplete: function () {
               gsap.set(this._targets[0],{ top: "100%"});
               animating = false;
          },
          });

     index === h1s.length - 1 ? (index = 0) : index++;
     
     gsap.to(h1s[index], {
          top: "-=100%",
          ease: "Expo.easeInOut",
          duration: 1,       
          });
     }
     });     
     
     });
//this is shery effect
     Shery.imageEffect("#back",{
     style: 5,
  /*    config: {"a":{"value":0.69,"range":[0,30]},"b":{"value":-0.95,"range":[-1,1]},"aspect":{"value":2.0487540612265915},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":1.07,"range":[0,10]},"metaball":{"value":0.17,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.43,"range":[0,2]},"noise_scale":{"value":12.21,"range":[0,100]}},
  config: {"a":{"value":0.46,"range":[0,30]},"b":{"value":-0.88,"range":[-1,1]},"zindex":{"value":"-1","range":[-9999999,9999999]},"aspect":{"value":2.0487540612265915},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.18,"range":[0,2]},"discard_threshold":{"value":0.44,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.26,"range":[0,2]},"noise_scale":{"value":19.85,"range":[0,100]}}
      */ 
     config:{"a":{"value":0.92,"range":[0,30]},"b":{"value":-0.95,"range":[-1,1]},"zindex":{"value":"-1","range":[-9999999,9999999]},"aspect":{"value":2.069339043173114},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":7}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.15,"range":[0,2]},"noise_scale":{"value":40.46,"range":[0,100]}},
     gooey: true,
     });
     
     const cards = document.querySelectorAll('.event-card');
    const revealOnScroll = () => {
      cards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        if(top < window.innerHeight - 100){
          card.classList.add('show');
        }
      });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

// this is gsap
gsap.registerPlugin(ScrollTrigger);
gsap.to("#home",{
     backgroundColor : "#232b2b",
     scrollTrigger:{
          trigger: "#home",
          start: "50% center",
          end:"bottom top",
          scrub: true,
         
     }
})

gsap.registerPlugin(ScrollTrigger);
gsap.to("#page2",{
     backgroundColor : "white",
     scrollTrigger:{
          trigger: "#page2",
          start: "50% center",
          end:"bottom top",
          scrub: true,
         
     }
})

 document.querySelector("#vtext button").addEventListener("mouseover", function(){
 gsap.to("#video video",{
     opacity:1,
     duration:1,
     ease:Power3
 })
})
document.querySelector("#vtext button").addEventListener("mouseleave", function(){
      gsap.to("#video video",{
     opacity:0,
     duration:1,
     ease:Power3
})
})  