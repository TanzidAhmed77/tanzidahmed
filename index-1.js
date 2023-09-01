const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5 // Adjust this threshold as needed
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const countElement = entry.target;
            const targetNumber = parseInt(countElement.getAttribute('data-target'));
            animateCount(countElement, targetNumber);
            observer.unobserve(countElement);
        }
    });
}, options);

const countElements = document.querySelectorAll('.count-container');
countElements.forEach(countElement => {
    observer.observe(countElement);
});

function animateCount(countElement, targetNumber) {
    const duration = 3000; // Animation duration in milliseconds
    const startTime = performance.now();

    function step(timestamp) {
        const elapsedTime = timestamp - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const currentNumber = Math.floor(progress * targetNumber);

        countElement.textContent = currentNumber;

        if (progress < 1) {
            requestAnimationFrame(step);
        } else {
            countElement.textContent = targetNumber;
            countElement.classList.add("show");
        }
    }

    requestAnimationFrame(step);
}

// Clipboard start 

function copyTextToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Text copied to clipboard: ' + text);
}

// scroll to section 

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
        link.addEventListener("click", scrollToSection);
    });

    function scrollToSection(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href");
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
});

// nav scroll 

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});