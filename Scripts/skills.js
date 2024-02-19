let Skillbutton=document.getElementById("skillButton");
let buttontext=document.getElementById("buttonText");
let magnetodiv=document.querySelector('.magneto')

const activateMagneto=(e)=>{
    let boundbox=Skillbutton.getBoundingClientRect();
    let magneto=40;
    let magnetoText=80;

    const newX=((e.clientX-boundbox.left)/Skillbutton.offsetWidth)-0.5;
    const newY=((e.clientY-boundbox.top)/Skillbutton.offsetHeight)-0.5

    gsap.to(Skillbutton,{
        duration: 1,
        x: newX*magneto,
        y: newY*magneto,
        ease: Power4.easeOut 
    })
    gsap.to(buttontext,{
        duration: 1,
        x: newX*magnetoText,
        y: newY*magnetoText,
        ease: Power4.easeOut
    })
}
const resetMagneto=(e)=>{
    gsap.to(Skillbutton,{
        duration: 1,
        x:0,
        y:0,
        ease:Elastic.easeOut
    })
    gsap.to(buttontext,{
        duration: 1,
        x:0,
        y:0,
        ease:Elastic.easeOut
    })
}
Skillbutton.addEventListener("mousemove",activateMagneto)
Skillbutton.addEventListener("mouseleave",resetMagneto)



//GSAP CODE
gsap.from(".myskills .heading,.myskills #skillButton",{
    opacity: 0,
    transform: "translateX(-100%)",
    duration: 1,
    scrollTrigger: {
        trigger: ".myskills .heading",
        scroller: ".main",
        // markers: true,
        start: "top 80%",
        end: "top 70%",
        scrub: 2
    }
})
gsap.from(".myskills .development .title",{
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".myskills .development .title",
        scroller: ".main",
        // markers: true,
        start: "top 80%",
        end: "top 70%",
        scrub: 2
    }
})
gsap.from(".myskills .development .section .logo",{
    opacity: 0,
    duration: .5,
    transform: "translateY(20px)",
    stagger: .15,
    scrollTrigger: {
        trigger: ".myskills .development .section .logo",
        scroller: ".main",
        // markers: true,
        start: "top 80%",
        end: "top 70%",
        scrub: 2
    }
})
gsap.from(".myskills .dataScience .title",{
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".myskills .dataScience .title",
        scroller: ".main",
        // markers: true,
        start: "top 80%",
        end: "top 70%",
        scrub: 2
    }
})
gsap.from(".myskills .dataScience .section .logo",{
    opacity: 0,
    duration: .5,
    transform: "translateY(20px)",
    stagger: .15,
    scrollTrigger: {
        trigger: ".myskills .dataScience .section .logo",
        scroller: ".main",
        // markers: true,
        start: "top 80%",
        end: "top 70%",
        scrub: 2
    }
})

