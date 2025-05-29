// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get all stars and the moon
    const stars = document.querySelectorAll('.star');
    const moon = document.querySelector('.moon');
    const nightSky = document.querySelector('.night-sky');
    
    // Get constellation lines
    const line1to2 = document.getElementById('line1-2');
    const line2to3 = document.getElementById('line2-3');
    const line3to5 = document.getElementById('line3-5');
    const line5to4 = document.getElementById('line5-4');
    const line4to1 = document.getElementById('line4-1');
    
    // Draw constellation lines
    function drawConstellationLines() {
        if (stars.length < 5) return;
        
        drawLine(stars[0], stars[1], line1to2);
        drawLine(stars[1], stars[2], line2to3);
        drawLine(stars[2], stars[4], line3to5);
        drawLine(stars[4], stars[3], line5to4);
        drawLine(stars[3], stars[0], line4to1);
    }
    
    // Function to draw a line between two stars
    function drawLine(fromStar, toStar, lineElement) {
        if (!fromStar || !toStar || !lineElement) return;
        
        // Get star positions
        const rect1 = fromStar.getBoundingClientRect();
        const rect2 = toStar.getBoundingClientRect();
        
        // Calculate center points
        const x1 = rect1.left + rect1.width / 2;
        const y1 = rect1.top + rect1.height / 2;
        const x2 = rect2.left + rect2.width / 2;
        const y2 = rect2.top + rect2.height / 2;
        
        // Calculate distance between points
        const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        
        // Calculate angle
        const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
        
        // Set line position and dimensions
        lineElement.style.width = `${length}px`;
        lineElement.style.left = `${x1}px`;
        lineElement.style.top = `${y1}px`;
        lineElement.style.transform = `rotate(${angle}deg)`;
    }
    
    // Initial draw of constellation lines
    drawConstellationLines();
    
    // Redraw constellation lines on window resize
    window.addEventListener('resize', drawConstellationLines);
    
    // Audio player elements
    const backgroundMusic = document.getElementById('background-music');
    const musicToggle = document.getElementById('music-toggle');
    
    // Initialize audio player
    if (backgroundMusic && musicToggle) {
        // Set initial volume
        backgroundMusic.volume = 0.3;
        
        // Add click event listener to the toggle button
        musicToggle.addEventListener('click', () => {
            if (backgroundMusic.paused) {
                // Play music
                const playPromise = backgroundMusic.play();
                
                // Handle play promise (required for some browsers)
                if (playPromise !== undefined) {
                    playPromise.then(() => {
                        musicToggle.classList.add('playing');
                    }).catch(error => {
                        console.error('Audio playback error:', error);
                    });
                }
            } else {
                // Pause music
                backgroundMusic.pause();
                musicToggle.classList.remove('playing');
            }
        });
        
        // Add keyboard accessibility for music toggle
        musicToggle.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                musicToggle.click();
            }
        });
    }
    
    // Function to create a shooting star
    function createShootingStar() {
        const shootingStar = document.createElement('div');
        shootingStar.classList.add('shooting-star');
        
        // Random position and angle
        const startTop = Math.random() * 40; // % from top, keep stars higher in the sky
        const startLeft = Math.random() * 80 + 10; // % from left, avoid edges
        
        // Angles should be between 35-55 degrees for most realistic look
        const angle = 35 + (Math.random() * 20); 
        
        // Set styles
        shootingStar.style.top = `${startTop}%`;
        shootingStar.style.left = `${startLeft}%`;
        shootingStar.style.transform = `rotate(${angle}deg)`;
        
        // Animation duration between 1-2.5 seconds
        const duration = 1 + Math.random() * 1.5;
        shootingStar.style.animation = `shooting-star ${duration}s linear`;
        
        // Add to night sky
        nightSky.appendChild(shootingStar);
        
        // Remove after animation completes
        setTimeout(() => {
            shootingStar.remove();
        }, duration * 1000);
    }
    
    // Create shooting stars at random intervals
    function scheduleShootingStars() {
        // Schedule shooting stars with varying frequency
        // First burst of 1-3 shooting stars
        for (let i = 0; i < Math.floor(Math.random() * 3) + 1; i++) {
            setTimeout(createShootingStar, 2000 + (i * 800) + (Math.random() * 1000));
        }
        
        // Schedule next burst after random interval (5-15 seconds)
        const nextBurstDelay = 5000 + Math.random() * 10000;
        setTimeout(scheduleShootingStars, nextBurstDelay);
    }
    
    // Initialize shooting stars
    scheduleShootingStars();
    
    // Add some extra bright stars that twinkle differently
    function createExtraBrightStar() {
        const brightStar = document.createElement('div');
        brightStar.classList.add('star-core', 'extra-bright');
        
        // Random position
        const top = 5 + Math.random() * 60; // Keep within upper part of sky
        const left = Math.random() * 90 + 5; // Avoid edges
        
        // Set styles
        brightStar.style.position = 'absolute';
        brightStar.style.top = `${top}%`;
        brightStar.style.left = `${left}%`;
        brightStar.style.width = '2px';
        brightStar.style.height = '2px';
        brightStar.style.backgroundColor = '#fff';
        brightStar.style.borderRadius = '50%';
        brightStar.style.boxShadow = '0 0 10px 2px rgba(255, 255, 255, 0.9), 0 0 20px 5px rgba(255, 255, 255, 0.5)';
        
        // Add random animation delay for better effect
        brightStar.style.animationDelay = `${Math.random() * 5}s`;
        
        // Add to night sky
        nightSky.appendChild(brightStar);
    }
    
    // Create 10 extra bright stars
    for (let i = 0; i < 10; i++) {
        createExtraBrightStar();
    }
    
    // Toggle message visibility on click for accessibility
    function toggleMessage(element) {
        const messageBox = element.querySelector('.message-box');
        
        // Close all other open messages first
        document.querySelectorAll('.message-box.show').forEach(box => {
            if (box !== messageBox) {
                box.classList.remove('show');
            }
        });
        
        // Toggle current message
        messageBox.classList.toggle('show');
    }
    
    // Add click event listeners to stars
    stars.forEach(star => {
        star.addEventListener('click', () => {
            toggleMessage(star);
        });
        
        // Add keyboard event listeners for accessibility
        star.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault(); // Prevent scrolling with space
                toggleMessage(star);
            }
        });
    });
    
    // Add click and keyboard event listeners to the moon
    if (moon) {
        moon.addEventListener('click', () => {
            toggleMessage(moon);
        });
        
        moon.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleMessage(moon);
            }
        });
    }
    
    // Add ARIA labels to stars for better accessibility
    stars.forEach((star, index) => {
        star.setAttribute('aria-label', `Birthday star ${index + 1}. Press Enter or Space to reveal message.`);
    });
    
    // Add ARIA label to moon
    if (moon) {
        moon.setAttribute('aria-label', 'Birthday moon with special message. Press Enter or Space to reveal.');
    }
}); 