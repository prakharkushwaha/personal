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
            eyes: "Apki ankhen jb unme kajal ho hayeee dil krta hai  unhe dekhta hi rhu ...itni sundr hai ankhen apki.",
            smile: "ab smile k kya hi khu do  khargosh wale dat n dikhe aisa ho nhi ho skta hai .... magar wo bhi bdi cute si smile hoti hai ...",
            hair: "bal hme n psnd saf sidhi bat ab bura mano y bhala shi bat hai janeman ache se care kro unki ",
            laugh: "Your laugh is music to my ears. It fills the room with joy and makes everything better.",
            heart: "This is the most precious thing inside you ..agr ye acha hai to sb acha hai ....apka dil bhut saf hai ..kisi k sath glt nhi kia ajtk aur ye sb mujhe acha lgta hai "
        };

        loveDescription.innerHTML = `<h3>${part.charAt(0).toUpperCase() + part.slice(1)}</h3><p>${descriptions[part]}</p>`;
    }
});

// quiz section 
function checkAnswer(button, isCorrect) {
    if (isCorrect) {
        showPopup('Yay! You love Prakhar Kushwaha so much!');
    } else {
        showPopup('Sorry, your love is not pure.');
        button.style.backgroundColor = 'red';
    }
}

function showPopup(message) {
    const popup = document.getElementById('popup');
    const popupMessage = popup.querySelector('p');
    popupMessage.textContent = message;
    popup.style.display = 'flex';
    setTimeout(closePopup, 1000); // Automatically close the popup after 5 seconds
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

// our story 
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav .menu li a');
    const sections = document.querySelectorAll('.content-section');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetId) {
                    section.classList.add('active');
                }
            });
        });
    });
});

function showMessage() {
    const popup = document.getElementById('popup');
    popup.style.display = 'flex';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 1000);
}


//  gift section 
const gifts = {
    gift1: {
        image: 'images/gift1.jpg',
        description: 'This is a beautiful gift she gave me for our first anniversary.'
    },
    gift2: {
        image: 'images/gift2.jpg',
        description: 'A wonderful surprise gift she gave me on my birthday.'
    },
    gift3: {
        image: 'images/gift3.jpg',
        description: 'A thoughtful gift she gave me when I got my new job.'
    },
    gift4: {
        image: 'images/gift4.jpg',
        description: 'This gift was given to me during our second vacation together.'
    },
    gift5: {
        image: 'images/gift5.jpg',
        description: 'A lovely gift she gave me just because she loves me.'
    }
};

function showGift(giftKey) {
    const gift = gifts[giftKey];
    const giftDisplay = document.getElementById('gift-display');
    const giftImage = document.getElementById('gift-image');
    const giftDescription = document.getElementById('gift-description');

    giftImage.src = gift.image;
    giftDescription.textContent = gift.description;
    giftDisplay.style.display = 'flex';
}

function playSong() {
    var song = document.getElementById('birthdaySong');
    song.play();
}

function stopSong() {
    var song = document.getElementById('birthdaySong');
    song.pause();
    song.currentTime = 0; // Reset the song to the beginning
}

document.addEventListener('DOMContentLoaded', function() {
    playSong(); // Automatically play the song when the page loads

    var song = document.getElementById('birthdaySong');
    song.onended = function() {
        stopSong(); // Stop the song when it ends
    };
});

