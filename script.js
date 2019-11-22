let banner = document.getElementById('banner');
let honors = document.getElementById('honors');
let honorIcons = document.getElementsByClassName('honorIcon');

banner.addEventListener('click', () => {
    if (!banner.classList.contains('invisible')) {
        let audio = new Audio('ButtonSound.mp3');
        audio.play();
        banner.classList.add('invisible');
        setTimeout(() => {
            banner.style.display = 'none';
            honors.style.display = 'inline-block';
            setTimeout(() => {
                honors.classList.remove('invisible');
            }, 100);
        }, 500);
    }
});

for (let i = 0; i < honorIcons.length; i++) {
    honorIcons[i].addEventListener('click', () => {
        if (!honorIcons[i].classList.contains('clicked')) {
            honorIcons[i].getElementsByClassName('pseudoTransparent')[0].style.opacity = '1';
            honorIcons[i].classList.add('clicked');
            let audio = new Audio('RevealSound.mp3');
            audio.play();
            setTimeout(() => {
                honorIcons[i].style.height = '0px';
                if (honorIcons[i].parentElement.id === 'column1') {
                    let championAudio = new Audio('Champions/Qiyana/Select.ogg');
                    championAudio.volume = 0.1;
                    championAudio.play();
                } else if (honorIcons[i].parentElement.id === 'column2') {
                    let championAudio = new Audio('Champions/Neeko/Select.ogg');
                    championAudio.volume = 0.1;
                    championAudio.play();
                } else if (honorIcons[i].parentElement.id === 'column3') {
                    let championAudio = new Audio('Champions/Nasus/Select.ogg');
                    championAudio.volume = 0.1;
                    championAudio.play();
                }
            }, 1200);
        }
    })
}