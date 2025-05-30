// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get all stars and the moon
    const stars = document.querySelectorAll('.star');
    const moon = document.querySelector('.moon');
    const nightSky = document.querySelector('.night-sky');
    const customStars = document.querySelectorAll('.custom-star');
    
    // Create animated stars container
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars-container';
    nightSky.appendChild(starsContainer);
    
    // Generate hundreds of stars with different sizes and random positions
    function generateStars() {
        // Define star counts by size
        const starCounts = {
            tiny: 300,
            small: 200,
            medium: 100,
            large: 50
        };
        
        // Generate stars for each size
        Object.entries(starCounts).forEach(([size, count]) => {
            for (let i = 0; i < count; i++) {
                const star = document.createElement('div');
                star.className = `animated-star ${size}`;
                
                // Set random position
                star.style.top = `${Math.random() * 90}%`;
                star.style.left = `${Math.random() * 98}%`;
                
                // Add random animation delay for better twinkling effect
                star.style.animationDelay = `${Math.random() * 5}s`;
                
                // For some stars, add a slight color tint
                if (Math.random() > 0.8) {
                    const hue = Math.random() > 0.5 ? '60, 100%, 90%' : '200, 70%, 90%';
                    star.style.backgroundColor = `hsl(${hue})`;
                }
                
                starsContainer.appendChild(star);
            }
        });
    }
    
    // Generate stars
    generateStars();
    
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
    
    // Create Orion constellation lines between custom stars
    function drawOrionConstellationLines() {
        // Define the connections for Orion pattern
        const connections = [
            [0, 3], // Betelgeuse to Bellatrix (shoulders)
            [3, 2], // Bellatrix to Alnilam (right shoulder to belt)
            [0, 2], // Betelgeuse to Alnilam (left shoulder to belt)
            [2, 4], // Alnilam to Saiph (belt to bottom left)
            [2, 1], // Alnilam to Rigel (belt to bottom right)
            [4, 1]  // Saiph to Rigel (bottom of constellation)
        ];
        
        // Create and append constellation lines
        connections.forEach(connection => {
            if (stars.length >= 5) {
                const star1 = stars[connection[0]];
                const star2 = stars[connection[1]];
                
                if (star1 && star2) {
                    const line = document.createElement('div');
                    line.className = 'constellation-line custom-constellation-line';
                    
                    // Append line to document
                    nightSky.appendChild(line);
                    
                    // Position the line (delay slightly to ensure stars are positioned)
                    setTimeout(() => {
                        positionLine(star1, star2, line);
                    }, 100);
                }
            }
        });
    }
    
    // Position a line between two stars
    function positionLine(star1, star2, lineElement) {
        const rect1 = star1.getBoundingClientRect();
        const rect2 = star2.getBoundingClientRect();
        
        // Calculate center points
        const x1 = rect1.left + rect1.width / 2;
        const y1 = rect1.top + rect1.height / 2;
        const x2 = rect2.left + rect2.width / 2;
        const y2 = rect2.top + rect2.height / 2;
        
        // Calculate distance and angle
        const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
        
        // Position line
        lineElement.style.width = `${length}px`;
        lineElement.style.left = `${x1}px`;
        lineElement.style.top = `${y1}px`;
        lineElement.style.transform = `rotate(${angle}deg)`;
    }
    
    // Call drawOrionConstellationLines after a slight delay to ensure elements are rendered
    setTimeout(drawOrionConstellationLines, 500);
    
    // Redraw lines on window resize
    window.addEventListener('resize', () => {
        // Remove existing custom constellation lines
        document.querySelectorAll('.custom-constellation-line').forEach(line => line.remove());
        // Redraw the lines
        drawOrionConstellationLines();
    });
    
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