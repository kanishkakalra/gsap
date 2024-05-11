gsap.to("#box",{
    x:1000,
    duration:2,
    delay:1,
    rotate:360,
    repeat:-1,
    yoyo:true
})
gsap.from("#box1",{
    x:1000,
    duration:2,
    delay:2,
    borderRadius:"50%"
})
gsap.to("#box2",{
    x:1000,
    duration:2,
    delay:3,
    rotate:360
})
gsap.to("#box3",{
    x:1000,
    duration:2,
    delay:4,
    backgroundColor:"red",
    borderRadius:"50%",
    scale:2
    
})
// gsap.to("h1",{
//     // color:"yellow",
//     opacity:0,
//     duration:2,
//     delay:1
// })

// gsap.from("h1",{
//     // color:"yellow",
//     opacity:0,
//     duration:2,
//     delay:1,
//     stagger:1
// })
// gsap.to("h1",{
//     // color:"yellow",
//     opacity:1,
//     x:500,
//     duration:2,
//     delay:1,
//     stagger:0.4,
//     color:"pink"
// })

var tl = gsap.timeline()

tl.from("h2",{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.5
})

tl.from("h4",{
    y:-30,
    opacity:0,
    duration:1,
    stagger:0.3
})

tl.from("h1",{
    y:20,
    opacity:0,
    duration:0.5,
    scale:0.2

})