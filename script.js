const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');

// Snowflake generator
function createSnowflakes() {
    const snowflakesContainer = document.getElementById('snowflakes');
    for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.innerText = '❄';
        snowflakesContainer.appendChild(snowflake);

        // Set random positions and animation duration
        gsap.set(snowflake, {
            left: Math.random() * window.innerWidth + 'px',
            top: Math.random() * -100 + 'px',
            fontSize: Math.random() * 15 + 10 + 'px',
        });

        gsap.to(snowflake, {
            y: window.innerHeight + 100,
            duration: Math.random() * 5 + 5,
            repeat: -1,
            delay: Math.random() * 5,
            ease: 'linear',
        });
    }
}

createSnowflakes();

// Flying Santa Claus animation
function createSanta() {
    const santa = document.createElement('div');
    santa.classList.add('santa');
    santa.innerHTML = '🎅';
    document.getElementById('santa').appendChild(santa);

    gsap.set(santa, {
        top: Math.random() * window.innerHeight + 'px',
        left: -100 + 'px',
        fontSize: 50 + 'px',
    });

    gsap.to(santa, {
        left: window.innerWidth + 100,
        duration: 15 + Math.random() * 10, // Random speed
        repeat: -1,
        ease: 'linear',
    });
}

// Create multiple Santa Claus elements
for (let i = 0; i < 3; i++) {
    createSanta();
}

// Event to show that the invitation was accepted
yesBtn.addEventListener('click', function() {
    gsap.to('.container', { opacity: 0, duration: 1, onComplete: function() {
        alert('Yay RORI! You made the right choice! Enjoy the experience!');
        window.location.href = '#'; // Replace with your target page
    }});
});

// Make the "No" button move away when hovered or clicked
noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('click', moveNoButton);

function moveNoButton() {
    const maxX = window.innerWidth - noBtn.offsetWidth - 20; // Ensure it doesn't go outside the viewport
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // Constrain movement inside the container
    const containerRect = document.querySelector('.container').getBoundingClientRect();

    const constrainedX = Math.max(containerRect.left, Math.min(randomX, containerRect.right - noBtn.offsetWidth));
    const constrainedY = Math.max(containerRect.top, Math.min(randomY, containerRect.bottom - noBtn.offsetHeight));

    gsap.to(noBtn, { left: constrainedX, top: constrainedY, duration: 0.5 });
}


// GSAP animation for buttons and container
gsap.from('.container', { opacity: 0, scale: 0.5, duration: 1, delay: 0.5 });
gsap.from('.btn', { opacity: 0, y: 20, stagger: 0.3, duration: 1, ease: 'bounce.out' });


const heading = document.getElementById("animated-heading");
heading.innerHTML = heading.textContent
    .split("")
    .map(letter => `<span class="letter">${letter}</span>`)
    .join("");

gsap.from(".letter", {
    opacity: 0,
    y: 50,
    duration: 15,
    stagger: 0.05, // Delay between letters
    ease: "back.out(5.7)"
});
const paragraph = document.getElementById("animated-paragraph");
paragraph.innerHTML = paragraph.textContent
    .split("")
    .map(char => `<span class="char">${char}</span>`)
    .join("");

gsap.from(".char", {
    opacity: 0,
    duration: 0.05,
    stagger: 0.05, // Delay between letters
    ease: "power2.out"
});

