var tl= gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"0% 95%",
    end:"55% 50%",
    scrub:true,
    // markers:true
}})
tl.to("#shila",{
    top:"124%",
    left:"14%",
    rotate:"360deg",
},('shilajit'))
tl.to(".shilares",{
    top:"138%",
    left:"65%",
    width:"58vh"
    // z-index:"0",
} ,'shilajit')
tl.to(".leaf",{
    top:"111%",
    left:"67%",
    rotate:"70deg",
    width:"27vh"
    // z-index:"0",
} ,'shilajit')
tl.to(".leaf2",{
    top:"151%",
    left:"3%",
    rotate:"-100deg",
    width:"27vh"
    // z-index:"0",
} ,'shilajit')

var tl2= gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"0% 95%",
    end:"40% 50%",
    scrub:true,
    // markers:true
}})
tl2.from(".CAPSULE",{
    rotate:"-90%",
    left:"-50%",
    top:"110%",
}, 'SH')
tl2.from(".sila",{
    rotate:"-90%",
    left:"-100%",
    top:"110%",
},'SH')
tl2.from(".shila",{
    rotate:"90%",
    left:"100%",
    top:"110%",
},'SH')
tl2.from(".Green2",{
    rotate:"90%",
    left:"100%",
    top:"110%",
},'SH')
tl2.to("#shila",{
    left:"39%",
    top:"214%",
    // rotate:"360deg"

},'SH')
