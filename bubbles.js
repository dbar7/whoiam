document.addEventListener('DOMContentLoaded', () => {
    // We will only create bubbles when clicking on the body itself, not on the main content.
    document.body.addEventListener('click', (e) => {
        // Check if the click is outside the main content container
        if (e.target.closest('.container') === null) {
            createBubble(e.clientX, e.clientY);
        }
    });
});

function createBubble(x, y) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    document.body.appendChild(bubble);

    // Randomize bubble size and animation duration for a natural look
    const size = Math.random() * 60 + 40; // Bubbles between 40px and 100px
    const duration = Math.random() * 4 + 3; // Animation lasts between 3s and 7s

    // Position the bubble where the user clicked
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${x - size / 2}px`;
    bubble.style.top = `${y - size / 2}px`;

    // Apply the floating animation
    bubble.style.animation = `floatUp ${duration}s ease-out forwards`;

    // Add a click listener to "pop" the bubble
    bubble.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevents creating a new bubble when popping this one
        popBubble(bubble);
    });

    // Automatically remove the bubble from the page after its animation is done
    setTimeout(() => {
        if (bubble.parentElement) {
            bubble.parentElement.removeChild(bubble);
        }
    }, duration * 1000);
}

function popBubble(bubble) {
    // Apply the popping animation
    bubble.style.animation = 'pop 0.3s ease-out forwards';
    // Remove the bubble from the page after the pop animation
    setTimeout(() => {
        if (bubble.parentElement) {
            bubble.parentElement.removeChild(bubble);
        }
    }, 300);
}
