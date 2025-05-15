document.addEventListener('DOMContentLoaded', () => {
    const discoverButton = document.querySelector('#discover-now'); // Target the Discover Now button by ID

    // Check if the Discover Now button exists (only on index.html)
    if (discoverButton) {
        const body = document.body;

        // Create the cinematic overlay element
        const overlay = document.createElement('div');
        overlay.classList.add('cinematic-overlay');
        body.appendChild(overlay);

        // Add click event listener to the Discover Now button
        discoverButton.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default navigation
            overlay.classList.add('active'); // Activate the overlay

            // Wait for the animation to complete, then navigate
            setTimeout(() => {
                sessionStorage.setItem('fadeIn', 'true'); // Set fade-in flag
                window.location.href = 'product.html';
            }, 1000); // Match the animation duration
        });
    }

    // Check for fade-in flag on the current page
    if (sessionStorage.getItem('fadeIn') === 'true') {
        document.body.classList.add('fade-in'); // Add fade-in class to body
        sessionStorage.removeItem('fadeIn'); // Clear the flag immediately
    }
});

// Highlight selected size button on the buy page

document.addEventListener('DOMContentLoaded', () => {
    const sizeButtons = document.querySelectorAll('.flex.flex-wrap.gap-3.mb-6 .bg-grayish');
    sizeButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            sizeButtons.forEach(b =>
                b.classList.remove('ring-2', 'ring-primary', 'bg-primary', 'text-dark')
            );
            this.classList.add('ring-2', 'ring-primary', 'bg-primary', 'text-dark');
        });
    });
});