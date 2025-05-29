# Birthday Constellation Website

A beautiful interactive night sky constellation website for a birthday gift. The site features twinkling stars, shooting stars, and a moon, each with personalized birthday messages that appear when clicked or hovered.

## Features

- Animated night sky with twinkling stars
- Random shooting stars
- Interactive stars with personalized birthday messages
- Main moon with a special birthday message
- Background music with play/pause controls
- Fully responsive design
- Keyboard accessible for better accessibility

## How to Use

1. **Setup and Deployment**:
   - Host these files on any web server (GitHub Pages, Netlify, Vercel are free options)
   - Alternatively, you can open the `index.html` file directly in a web browser

2. **Customization**:
   - **Change Messages**: Edit the text inside each `message-box` div in `index.html`
   - **Change Star Positions**: Modify the `top` and `left` percentages in the inline styles of each star
   - **Replace Audio**: Change the `src` attribute in the `<audio>` tag to your preferred music
   - **Customize Name**: Update the title in the `<h1>` tag with the birthday person's name
   - **Change Colors**: Modify the color scheme in `style.css` as desired

3. **User Experience**:
   - Stars twinkle automatically
   - Shooting stars appear randomly
   - Click or hover on stars to reveal personalized messages
   - Click the moon to reveal a special message
   - Use the music control button to play/pause background music
   - Tab navigation works for keyboard users

## Browser Compatibility

This website works best in modern browsers:
- Chrome
- Firefox
- Edge
- Safari

## Performance Notes

The site uses CSS transforms and opacity for smooth animations on most devices. The backdrop filter effect used for message boxes may not work in all browsers, but a fallback is provided.

## Accessibility

The site includes:
- Keyboard navigation with tab key
- ARIA labels for screen readers
- Sufficient color contrast
- Focus indicators for interactive elements

Enjoy sharing this special gift! 