// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const starmapContainer = document.getElementById('starmap-container');
    const constellationSelect = document.getElementById('constellation-select');
    const toggleCustomStarsBtn = document.getElementById('toggle-custom-stars');
    const customStars = document.querySelectorAll('.custom-star');
    const constellationLines = document.querySelectorAll('.constellation-line');
    
    // Constellations data
    const constellations = {
        'orion': {
            name: 'Orion',
            stars: [
                { name: 'Betelgeuse', x: 30, y: 25, magnitude: 0.5, color: '#ff8f70' },
                { name: 'Rigel', x: 25, y: 65, magnitude: 0.1, color: '#a0d0ff' },
                { name: 'Bellatrix', x: 20, y: 30, magnitude: 1.6, color: '#c7e6ff' },
                { name: 'Mintaka', x: 32, y: 45, magnitude: 2.2, color: '#eaf6ff' },
                { name: 'Alnilam', x: 40, y: 45, magnitude: 1.7, color: '#eaf6ff' },
                { name: 'Alnitak', x: 48, y: 45, magnitude: 1.8, color: '#d9ecff' },
                { name: 'Saiph', x: 45, y: 65, magnitude: 2.1, color: '#c7e6ff' }
            ],
            lines: [
                [0, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 1], [1, 0], [0, 4]
            ]
        },
        'ursa-major': {
            name: 'Ursa Major (Big Dipper)',
            stars: [
                { name: 'Dubhe', x: 20, y: 20, magnitude: 1.8, color: '#ffb265' },
                { name: 'Merak', x: 30, y: 25, magnitude: 2.4, color: '#eaf6ff' },
                { name: 'Phecda', x: 40, y: 30, magnitude: 2.4, color: '#eaf6ff' },
                { name: 'Megrez', x: 50, y: 28, magnitude: 3.3, color: '#eaf6ff' },
                { name: 'Alioth', x: 60, y: 25, magnitude: 1.8, color: '#d9ecff' },
                { name: 'Mizar', x: 70, y: 22, magnitude: 2.1, color: '#eaf6ff' },
                { name: 'Alkaid', x: 80, y: 20, magnitude: 1.9, color: '#c7e6ff' }
            ],
            lines: [
                [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6]
            ]
        },
        'cassiopeia': {
            name: 'Cassiopeia',
            stars: [
                { name: 'Schedar', x: 30, y: 20, magnitude: 2.2, color: '#ffb265' },
                { name: 'Caph', x: 15, y: 25, magnitude: 2.3, color: '#eaf6ff' },
                { name: 'Gamma Cas', x: 45, y: 15, magnitude: 2.5, color: '#c7e6ff' },
                { name: 'Ruchbah', x: 60, y: 25, magnitude: 2.7, color: '#eaf6ff' },
                { name: 'Segin', x: 75, y: 15, magnitude: 3.4, color: '#eaf6ff' }
            ],
            lines: [
                [0, 1], [0, 2], [2, 3], [3, 4]
            ]
        },
        'lyra': {
            name: 'Lyra',
            stars: [
                { name: 'Vega', x: 50, y: 30, magnitude: 0.0, color: '#c7e6ff' },
                { name: 'Sheliak', x: 40, y: 40, magnitude: 3.5, color: '#eaf6ff' },
                { name: 'Sulafat', x: 60, y: 40, magnitude: 3.2, color: '#eaf6ff' },
                { name: 'Epsilon Lyrae', x: 50, y: 20, magnitude: 4.0, color: '#eaf6ff' },
                { name: 'Zeta Lyrae', x: 45, y: 35, magnitude: 4.3, color: '#eaf6ff' }
            ],
            lines: [
                [0, 1], [1, 2], [2, 0], [0, 3], [0, 4]
            ]
        },
        'cygnus': {
            name: 'Cygnus (Northern Cross)',
            stars: [
                { name: 'Deneb', x: 50, y: 20, magnitude: 1.3, color: '#c7e6ff' },
                { name: 'Sadr', x: 50, y: 40, magnitude: 2.2, color: '#eaf6ff' },
                { name: 'Albireo', x: 50, y: 70, magnitude: 3.1, color: '#ffb265' },
                { name: 'Gienah', x: 30, y: 40, magnitude: 2.5, color: '#eaf6ff' },
                { name: 'Delta Cygni', x: 70, y: 40, magnitude: 2.9, color: '#eaf6ff' }
            ],
            lines: [
                [0, 1], [1, 2], [1, 3], [1, 4]
            ]
        },
        'gemini': {
            name: 'Gemini',
            stars: [
                { name: 'Castor', x: 35, y: 25, magnitude: 1.6, color: '#eaf6ff' },
                { name: 'Pollux', x: 45, y: 30, magnitude: 1.1, color: '#ffb265' },
                { name: 'Alhena', x: 50, y: 50, magnitude: 1.9, color: '#d9ecff' },
                { name: 'Wasat', x: 55, y: 40, magnitude: 3.5, color: '#eaf6ff' },
                { name: 'Mebsuta', x: 30, y: 35, magnitude: 3.1, color: '#eaf6ff' },
                { name: 'Propus', x: 25, y: 45, magnitude: 3.3, color: '#eaf6ff' }
            ],
            lines: [
                [0, 1], [1, 3], [3, 2], [0, 4], [4, 5], [5, 2]
            ]
        },
        'leo': {
            name: 'Leo',
            stars: [
                { name: 'Regulus', x: 45, y: 45, magnitude: 1.4, color: '#c7e6ff' },
                { name: 'Denebola', x: 70, y: 30, magnitude: 2.1, color: '#eaf6ff' },
                { name: 'Algieba', x: 40, y: 30, magnitude: 2.0, color: '#ffb265' },
                { name: 'Zosma', x: 60, y: 25, magnitude: 2.6, color: '#eaf6ff' },
                { name: 'Epsilon Leonis', x: 30, y: 40, magnitude: 3.0, color: '#eaf6ff' },
                { name: 'Eta Leonis', x: 25, y: 30, magnitude: 3.5, color: '#eaf6ff' }
            ],
            lines: [
                [0, 2], [2, 5], [5, 4], [4, 0], [2, 3], [3, 1]
            ]
        },
        'scorpius': {
            name: 'Scorpius',
            stars: [
                { name: 'Antares', x: 40, y: 40, magnitude: 0.9, color: '#ff6b4e' },
                { name: 'Acrab', x: 30, y: 25, magnitude: 2.6, color: '#c7e6ff' },
                { name: 'Dschubba', x: 35, y: 30, magnitude: 2.3, color: '#eaf6ff' },
                { name: 'Pi Scorpii', x: 45, y: 50, magnitude: 2.9, color: '#eaf6ff' },
                { name: 'Shaula', x: 70, y: 65, magnitude: 1.6, color: '#c7e6ff' },
                { name: 'Sargas', x: 60, y: 60, magnitude: 1.9, color: '#ffb265' },
                { name: 'Larawag', x: 55, y: 55, magnitude: 2.3, color: '#eaf6ff' }
            ],
            lines: [
                [1, 2], [2, 0], [0, 3], [3, 6], [6, 5], [5, 4]
            ]
        }
    };
    
    // Current state
    let currentConstellation = null;
    let customStarsVisible = true;
    
    // Function to toggle visibility of custom stars
    function toggleCustomStars() {
        customStarsVisible = !customStarsVisible;
        customStars.forEach(star => {
            star.classList.toggle('hidden', !customStarsVisible);
        });
        
        // Also toggle custom constellation lines
        constellationLines.forEach(line => {
            line.style.display = customStarsVisible ? 'block' : 'none';
        });
        
        toggleCustomStarsBtn.textContent = customStarsVisible ? 'Hide Custom Stars' : 'Show Custom Stars';
    }
    
    // Function to draw a constellation
    function drawConstellation(constellationKey) {
        // Clear previous constellation
        starmapContainer.innerHTML = '';
        
        // If no constellation selected, return
        if (!constellationKey || !constellations[constellationKey]) {
            currentConstellation = null;
            return;
        }
        
        currentConstellation = constellationKey;
        const constellation = constellations[constellationKey];
        
        // Create and place stars
        constellation.stars.forEach(star => {
            // Calculate star size based on magnitude (brightness)
            // Lower magnitude = brighter star = larger size
            const starSize = Math.max(2, 7 - star.magnitude * 1.5);
            
            // Create star element
            const starElement = document.createElement('div');
            starElement.className = 'real-star';
            starElement.style.left = `${star.x}%`;
            starElement.style.top = `${star.y}%`;
            starElement.style.width = `${starSize}px`;
            starElement.style.height = `${starSize}px`;
            starElement.style.backgroundColor = star.color || 'white';
            starElement.style.boxShadow = `0 0 ${starSize * 2}px ${star.color || 'rgba(255, 255, 255, 0.7)'}`;
            starmapContainer.appendChild(starElement);
            
            // Create star label (if not too small)
            if (starSize > 3) {
                const starLabel = document.createElement('div');
                starLabel.className = 'real-star-label';
                starLabel.textContent = star.name;
                starLabel.style.left = `${star.x}%`;
                starLabel.style.top = `${star.y}%`;
                starmapContainer.appendChild(starLabel);
            }
        });
        
        // Draw constellation lines
        constellation.lines.forEach(line => {
            const star1 = constellation.stars[line[0]];
            const star2 = constellation.stars[line[1]];
            
            // Calculate line position and angle
            const dx = star2.x - star1.x;
            const dy = star2.y - star1.y;
            const length = Math.sqrt(dx * dx + dy * dy);
            const angle = Math.atan2(dy, dx) * 180 / Math.PI;
            
            // Create line element
            const lineElement = document.createElement('div');
            lineElement.className = 'real-constellation-line';
            lineElement.style.width = `${length}%`;
            lineElement.style.left = `${star1.x}%`;
            lineElement.style.top = `${star1.y}%`;
            lineElement.style.transform = `rotate(${angle}deg)`;
            starmapContainer.appendChild(lineElement);
        });
    }
    
    // Event listeners
    constellationSelect.addEventListener('change', function() {
        const selectedConstellation = this.value;
        drawConstellation(selectedConstellation);
    });
    
    toggleCustomStarsBtn.addEventListener('click', toggleCustomStars);
    
    // Initialize button text
    toggleCustomStarsBtn.textContent = 'Hide Custom Stars';
}); 