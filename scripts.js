function playSong() {
    var song = document.getElementById('birthdaySong');
    song.play();
}

function showTimeline() {
    var timelineSection = document.getElementById('timelineSection');
    timelineSection.style.display = 'block';
}
// body
document.addEventListener('DOMContentLoaded', function() {
    const loveList = document.querySelectorAll('.love-list li');
    const loveDescription = document.querySelector('.love-description');

    loveList.forEach(item => {
        item.addEventListener('click', function() {
            const part = this.dataset.part;
            showLoveDescription(part);
        });
    });

    function showLoveDescription(part) {
        const descriptions = {
            eyes: "Your eyes sparkle with warmth and kindness. They reflect the beauty of your soul.",
            smile: "Your smile is contagious and brightens up my day. It melts my heart every time.",
            hair: "Your hair is like silk, flowing with grace and beauty. I love running my fingers through it.",
            laugh: "Your laugh is music to my ears. It fills the room with joy and makes everything better.",
            heart: "Your heart is pure and full of love. It's what drew me to you, and it's what keeps me by your side."
        };

        loveDescription.innerHTML = `<h3>${part.charAt(0).toUpperCase() + part.slice(1)}</h3><p>${descriptions[part]}</p>`;
    }
});
