const slides = [
    'you can close the inspector now<br>ok... here goes',
    'i prolly wouldve told you this later',
    'but smth happened so i am telling you this abhi',
    'wait for it...'
];

var currentSlideIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('DOMSubtreeModified', () => {
        if (document.querySelector('title').textContent.toLowerCase() === "chess") {
            window.location.replace("./message.html");
        }
    });

    document.querySelector('.fwd').addEventListener('click', () => {
        if(currentSlideIndex === slides.length - 1) return;
        currentSlideIndex++;
        document.querySelector('.msg').innerHTML = slides[currentSlideIndex];
        if(currentSlideIndex === slides.length - 1) {
            document.querySelector('.fwd').style.color = "gray";
            document.querySelector('.back').style.color = "black";
        } else {
            document.querySelector('.fwd').style.color = "black";
            document.querySelector('.back').style.color = "black";
        }
    });

    document.querySelector('.back').addEventListener('click', () => {
        if(currentSlideIndex === 0) return;
        currentSlideIndex--;
        document.querySelector('.msg').innerHTML = slides[currentSlideIndex];
        if(currentSlideIndex === 0) {
            document.querySelector('.fwd').style.color = "black";
            document.querySelector('.back').style.color = "gray";
        } else {
            document.querySelector('.fwd').style.color = "black";
            document.querySelector('.back').style.color = "black";
        }
    });

    if (window.innerWidth < 500 && window.innerHeight < 800) {
        document.querySelector('.main-text').textContent = "Website won't work on mobile, Srushti. Laptop pe khol :/";
    }
});