let text = document.querySelector('.dynamic');
let cursor = document.querySelector('.cursor');

let texts = ["Data Science","Machine Learning","Frontend","Data Analysis"];
let charindex = 0;
let index = 0;

let typingDelay = 200;
let erasingDelay = 200;
let NextLetterDelay = 2000;

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typing, NextLetterDelay);
});
let typing = () => {
    if (charindex < texts[index].length) {
        text.textContent += texts[index].charAt(charindex);
        charindex++;
        setTimeout(typing, typingDelay);
    }
    else {
        setTimeout(erase, NextLetterDelay);
    }
}
let erase = () => {
    if (charindex > 0) {
        text.textContent = texts[index].substring(0, charindex - 1)
        charindex--;
        setTimeout(erase, erasingDelay);
    } 
    else{
        index++;
        if(index>=texts.length){
            index=0;
        }
        setTimeout(typing,NextLetterDelay)
    }
}

//Gsap Code

let tl=gsap.timeline();
tl.from("nav .logo,nav .sections div",{
    opacity: 0,
    duration: .5,
    delay: .75,
    transform: "translateY(50px)",
    stagger: .175
})
tl.from("main .heroSection .text .content ",{
    opacity: 0,
    duration: 0.5,
    transform: "translateX(-100px)"
})
tl.from("main .heroSection .text .socialMedia",{
    opacity: 0,
    duration: 0.5,
    transform: "translateY(100px)"
})
tl.from("main .heroSection .photo",{
    opacity: 0,
    duration: 0.5,
    transform: "translateX(100px)"
})

gsap.to("main .heroSection .text .content h1",{
    duration: 1,
    transform: "translateY(10px)",
    yoyo: true,
    repeat: -1

})
tl.from("main .heroSection .scroll",{
    opacity: 0,
    duration: 0.5,
})
gsap.to("main .heroSection .scroll",{
    duration: 1,
    // transform: "translate(-50%,20px)",
    scale: 1.25,
    yoyo: true,
    repeat: -1
})
