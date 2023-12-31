document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('DOMSubtreeModified', () => {
        if (document.querySelector('title').textContent.toLowerCase() === "chess") {
            window.location.replace("./message.html");
        }
    });

    if (window.innerWidth < 500 && window.innerHeight < 800) {
        document.querySelector('.main-text').textContent = "Website won't work on mobile, Srushti. Laptop pe khol :/";
    }   
});