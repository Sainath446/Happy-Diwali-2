// Get the video, video-container, and overlay elements
const video = document.getElementById('backgroundVideo');
const videoContainer = document.querySelector('.video-container');
const overlayText = document.querySelector('.overlay h1');
const overlay1 = document.querySelector('.overlay1');
const audio = document.getElementById('backgroundMusic');

// Add an event listener to detect when the video ends
video.addEventListener('ended', () => {
    // Add class to fade out the video
    video.classList.add('fade-out');

    // After the fade-out, show the background image and shrink the text
    setTimeout(() => {
        video.style.display = 'none'; 
        videoContainer.classList.add('show-background'); // Fade-in background image
        overlayText.style.fontSize = '2.5em'; // Shrink the main text

        // Show overlay1 (secondary text) after the background image appears
        setTimeout(() => {
            overlay1.classList.add('show');
        }, 1000); // Delay showing overlay1 to match background image fade-in
    }, 1500); // Delay to match the video fade-out duration
});
document.addEventListener('click', function() {
    if (audio.paused) {
        audio.muted = false; // Unmute the audio
        audio.play(); // Start playback
    }
    // Remove the event listener after the first click
    document.removeEventListener('click', arguments.callee);
});

// Code 1 JavaScript sequence
function startCode1Sequence() {
    const light = document.getElementById('light');

    // Show light expanding from the lamp after a delay
    setTimeout(() => {
        light.style.width = '400px';
        light.style.height = '400px';
        light.style.opacity = '0.6';
    }, 2000); // Initial delay of 2 seconds
}
