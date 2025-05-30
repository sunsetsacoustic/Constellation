# Constellation Birthday Website Checklist

## Phase 1: Core Setup & Structure

*   [ ] **Project Setup:**
    *   [ ] Create a project folder (e.g., `her-birthday-site`).
    *   [ ] Create `index.html`.
    *   [ ] Create `style.css`.
    *   [ ] Create `script.js` (even if you start with CSS-only interactions).
*   [ ] **HTML (`index.html`):**
    *   [ ] Basic HTML document structure (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`).
    *   [ ] Add `<meta name="viewport" content="width=device-width, initial-scale=1.0">` for mobile responsiveness.
    *   [ ] Link `style.css` in `<head>`.
    *   [ ] Link `script.js` at the end of `<body>`.
    *   [ ] Create main container: `<div class="night-sky"></div>`.
    *   [ ] Add a main title: `<h1>Happy Birthday, My Star, [Her Name]!</h1>`.
    *   [ ] Add structure for **one** star:
        *   [ ] `<div class="star" id="star1" tabindex="0" style="top: Y%; left: X%;">` (placeholder position, tabindex for keyboard navigation).
        *   [ ] Inside star: `<div class="star-core"></div>`.
        *   [ ] Inside star: `<div class="message-box" id="message1" role="tooltip">Placeholder message</div>`.

## Phase 2: Basic Styling (CSS)

*   [ ] **General Styles (`style.css`):**
    *   [ ] Reset default browser margins/paddings (`* { margin: 0; padding: 0; box-sizing: border-box; }`).
    *   [ ] Set basic font and text color with good contrast ratios.
    *   [ ] Style `.night-sky`:
        *   [ ] Full viewport height and width (`100vh`, `100vw` or `100%`).
        *   [ ] Dark background (e.g., `background: linear-gradient(...)` or solid dark color).
        *   [ ] `position: relative;` (crucial for star positioning).
        *   [ ] `overflow: hidden;` (to prevent scrollbars from stray stars).
    *   [ ] Style the `<h1>` title (font, size, color, centering, text-shadow).
*   [ ] **Star Styling (`style.css`):**
    *   [ ] Style `.star`:
        *   [ ] `position: absolute;`.
        *   [ ] `cursor: pointer;`.
        *   [ ] `outline: 2px solid transparent;` for focus states.
        *   [ ] `border-radius: 50%;` for circular focus area.
        *   [ ] (Optional) `padding` to increase hover/click area.
    *   [ ] Add focus styles: `.star:focus { outline: 2px solid rgba(255, 255, 255, 0.8); }`.
    *   [ ] Style `.star-core`:
        *   [ ] Dimensions (e.g., `width: 10px; height: 10px;`).
        *   [ ] `background-color: #fff;`.
        *   [ ] `border-radius: 50%;` (to make it round).
        *   [ ] `box-shadow` for glow effect.
        *   [ ] `will-change: transform, opacity;` for animation performance.
    *   [ ] Add `twinkle` animation using `transform` and `opacity` (`@keyframes` and apply to `.star-core`).
*   [ ] **Message Box Styling (`style.css`):**
    *   [ ] Style `.message-box`:
        *   [ ] `position: absolute;` (relative to `.star`).
        *   [ ] Positioning (e.g., `bottom: 100%; left: 50%; transform: translateX(-50%) translateY(-10px);`).
        *   [ ] Background color (e.g., `rgba(255, 255, 255, 0.15)` with `backdrop-filter: blur(5px);`).
        *   [ ] Add fallback background for browsers without `backdrop-filter` support.
        *   [ ] Text color with sufficient contrast, padding, border-radius, border.
        *   [ ] `z-index` to ensure it's on top.
        *   [ ] `transition: opacity 0.3s ease, visibility 0.3s ease;` for smooth animations.
    *   [ ] Initially hide message boxes: `opacity: 0; visibility: hidden;` for smooth transitions.
    *   [ ] Show state: `.message-box.show { opacity: 1; visibility: visible; }`.

## Phase 3: Content & Interactivity

*   [ ] **Populate Stars:**
    *   [ ] Duplicate the HTML structure for multiple stars.
    *   [ ] Assign unique IDs if needed (`star2`, `message2`, etc.).
    *   [ ] Write personalized messages for each `.message-box`.
    *   [ ] Adjust `top: Y%; left: X%;` inline styles for each star to position them.
*   [ ] **Implement Message Reveal (Choose one or combine):**
    *   [ ] **CSS Hover:**
        *   [ ] Add CSS rule: `.star:hover .message-box { opacity: 1; visibility: visible; }`.
    *   [ ] **JavaScript Click/Keyboard (recommended for `script.js`):**
        *   [ ] Select all `.star` elements with error handling.
        *   [ ] Add click and keydown event listeners to each star.
        *   [ ] Handle Enter and Space key presses for accessibility.
        *   [ ] On activation, toggle the `show` class of its corresponding `.message-box`.
        *   [ ] (Optional JS) Logic to only show one message box at a time.
        *   [ ] Add error handling for element selection and event binding.

## Phase 4: Enhancements & Polish

*   [ ] **Visual Enhancements:**
    *   [ ] Add more subtle background stars (CSS pseudo-elements or many small divs).
    *   [ ] Implement shooting star animation using `transform` for better performance.
    *   [ ] Vary star sizes/glows (e.g., `.bigger-star` class).
    *   [ ] Improve hover effect on star itself (e.g., `transform: scale(1.1)`, brighter glow).
    *   [ ] Add subtle particle effects or constellation lines between stars.
*   [ ] **Content Enhancements:**
    *   [ ] Add background music (`<audio>` tag with user controls and mute option).
    *   [ ] Include small images within some message boxes.
    *   [ ] Add a "main" celestial body (Moon/Sun) with a primary message.
*   [ ] **Interaction Enhancements:**
    *   [ ] Implement smooth CSS transitions for all interactive elements.
    *   [ ] Add loading animation or fade-in effect for initial page load.
*   [ ] **Fonts & Typography:**
    *   [ ] Choose and implement custom web fonts (e.g., Google Fonts) for titles and messages.
    *   [ ] Ensure font loading optimization with `font-display: swap;`.

## Phase 5: Accessibility & Performance

*   [ ] **Accessibility:**
    *   [ ] Ensure keyboard navigation works for all interactive elements.
    *   [ ] Add `aria-label` attributes to stars for screen readers.
    *   [ ] Test color contrast ratios meet WCAG guidelines.
    *   [ ] Add `alt` text for any images used.
    *   [ ] Test with screen reader software.
*   [ ] **Performance:**
    *   [ ] Optimize animations to use `transform` and `opacity` only.
    *   [ ] Minimize CSS and JavaScript files.
    *   [ ] Optimize any images used (WebP format, appropriate sizing).
    *   [ ] Test performance with browser dev tools.

## Phase 6: Testing & Deployment

*   [ ] **Cross-Browser Testing:**
    *   [ ] Test in different web browsers (Chrome, Firefox, Safari, Edge).
    *   [ ] Test CSS properties like `backdrop-filter` and provide fallbacks if needed.
    *   [ ] Verify animations work smoothly across browsers.
*   [ ] **Responsive Testing:**
    *   [ ] Test on different screen sizes (desktop, tablet, mobile - use browser dev tools).
    *   [ ] Ensure star positions work well on mobile devices.
    *   [ ] Test touch interactions on mobile.
*   [ ] **Content & Functionality Testing:**
    *   [ ] Ensure all messages appear correctly and are readable.
    *   [ ] Check for any broken layouts or interactivity issues.
    *   [ ] Test keyboard navigation thoroughly.
    *   [ ] Proofread all text content *carefully*.
*   [ ] **Refinement:**
    *   [ ] Adjust star positions for best visual appeal across devices.
    *   [ ] Tweak animation timings and easing functions.
    *   [ ] Fine-tune colors and contrast.
*   [ ] **Deployment:**
    *   [ ] Choose a hosting platform (GitHub Pages, Netlify, Vercel are great free options for static sites).
    *   [ ] Create a Git repository for your project (good practice!).
    *   [ ] Push your code to the repository.
    *   [ ] Configure deployment on your chosen platform.
    *   [ ] Test the live URL on multiple devices.
    *   [ ] Set up custom domain if desired.
*   [ ] **Prepare for the Reveal!**
    *   [ ] Decide how you'll share the link (message, QR code on a card, etc.).
    *   [ ] Consider creating a teaser or countdown leading up to her birthday.

---
**Notes & Tips:**
*   Start simple and build up. Get the core functionality working before adding too many enhancements.
*   Personalization is key! The messages are the heart of this gift.
*   Test frequently as you code, especially on different devices.
*   Don't be afraid to look up CSS properties or JavaScript methods if you're unsure.
*   Consider performance from the start - smooth animations make a big difference.
*   Accessibility features make the site usable for everyone and show extra thoughtfulness.
*   Have fun with it! She'll appreciate the effort and thought you put into every detail.
---

# Orion Constellation Facts

Orion is one of the most recognizable constellations in the night sky. It's named after a hunter from Greek mythology.

## Stars in Custom Orion Formation

In this birthday page, the 5 custom stars are arranged to form the key points of Orion:

1. **Betelgeuse** (Top Left, Reddish) - One of the brightest stars in the night sky and a red supergiant
2. **Bellatrix** (Top Right) - The "Amazon Star," a blue-white giant
3. **Alnilam** (Center) - The middle star in Orion's Belt
4. **Rigel** (Bottom Right, Bluish) - A blue supergiant and the brightest star in Orion
5. **Saiph** (Bottom Left) - A blue supergiant forming the "right knee" of Orion

## Interesting Facts About Orion

- Orion is visible throughout the world and is one of the most universally recognized constellations
- Orion's Belt consists of three stars in a straight line: Alnitak, Alnilam, and Mintaka
- Betelgeuse is a red supergiant that could explode as a supernova at any time
- The Orion Nebula (M42) is visible as a fuzzy patch below Orion's Belt
- In Greek mythology, Orion was a mighty hunter who boasted he could kill any animal
- Different cultures have different interpretations - ancient Egyptians associated it with Osiris, while in Hungarian folklore it's known as "Archer" or "Reaper"

## Navigation Using Orion

Orion is excellent for navigation in the night sky:
- Follow Orion's Belt to the southeast to find Sirius, the brightest star in our sky
- Follow the Belt to the northwest to find Aldebaran, the eye of Taurus the Bull
- A line from Rigel through Betelgeuse points to Castor and Pollux in Gemini
- Orion is most visible in the night sky during winter in the Northern Hemisphere and summer in the Southern Hemisphere

The personalized message stars are positioned to match this legendary constellation, making your birthday wishes shine among the stars of one of the sky's most beautiful and recognizable patterns!