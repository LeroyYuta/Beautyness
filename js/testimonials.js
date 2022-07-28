const feedBtn = document.querySelector('.feedback-btn');
const feedClose = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');
const popupBg = document.querySelector('.popup__body');

feedBtn.addEventListener('click', () => {
    popup.classList.add('open');
})

feedClose.addEventListener('click', () => {
    popup.classList.remove('open');
})

document.addEventListener('click', (e) => {
    if (e.target === popupBg) {
        popup.classList.remove('open');
    }
});

document.querySelector('.client-photo').addEventListener('change', function () {
    if (this.files[0]) {
        let reader = new FileReader();

        reader.addEventListener('load', function () {
            document.querySelector('.label-photo').style.backgroundImage = 'url(' + reader.result + ')';
        }, false);

        reader.readAsDataURL(this.files[0]);
    }
});