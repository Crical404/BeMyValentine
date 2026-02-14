const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const question = document.getElementById('question');
const emoji = document.getElementById('emoji');
const noBtnContainer = document.getElementById('no-btn-container')

// Event listeners for hover (desktop) and touch (mobile)
noBtn.addEventListener('mouseover', scaleDownButton);
noBtn.addEventListener('touchstart', scaleDownButton);

/*
function moveButton() {
    // Get viewport dimensions
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    // Calculate a random X and Y coordinate within the screen bounds
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Change position to fixed so it breaks out of the flexbox layout
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}
*/

function scaleDownButton() {
    noBtnContainer.style.animation = "scaledown 0.75s 1 forwards";
}

// Logic for when they finally click "Yes"
yesBtn.addEventListener('click', () => {
    question.innerHTML = "I knew you'd say yes! Good choice.";
    emoji.innerHTML = "💘";
    emoji.style.animation = "heartbeat 0.5s infinite"; // Speeds up the heartbeat

    // Hide the buttons
    document.querySelector('.btn-group').style.display = 'none';
});