import quote from '../assets/img/testimonials/quote.png';
import zero_stars from '../assets/img/testimonials/0_stars.png';
import one_stars from '../assets/img/testimonials/1_stars.png'
import two_stars from '../assets/img/testimonials/2_stars.png';
import three_stars from '../assets/img/testimonials/3_stars.png';
import four_stars from '../assets/img/testimonials/4_stars.png';
import five_stars from '../assets/img/testimonials/5_stars.png';

const feedBtn = document.querySelector('.feedback-btn');
const feedClose = document.querySelector('.feedback-popup__close');
const popup = document.querySelector('.feedback-popup');
const popupBg = document.querySelector('.feedback-popup__body');
const popupInfo = document.querySelectorAll('.form-info');
const clientPhoto = document.querySelector('.label-photo');

document.addEventListener('DOMContentLoaded', addWrapper);
// feedback module window
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
// wrapper
function addWrapper() {
    const prev = document.querySelector(".btn-prev");
    const next = document.querySelector(".btn-next");
    const sliders = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    let index = 0;

    function active(arr, index) {
        for (let item of arr) {
            item.classList.remove("active");
        }
        arr[index].classList.add("active");
    }

    function nextSlide() {
        if (index == sliders.length - 1) {
            index = 0;
            active(sliders, index);
            active(dots, index);
        } else {
            index++;
            active(sliders, index);
            active(dots, index);
        }
    }

    function prevSLide() {
        if (index == 0) {
            index = sliders.length - 1;
            active(sliders, index);
            active(dots, index);
        } {
            index--;
            active(sliders, index);
            active(dots, index);
        }
    }
    next.addEventListener("click", nextSlide);
    prev.addEventListener("click", prevSLide);

    dots.forEach((item, indexDot) => {
        item.addEventListener("click", () => {
            console.log(indexDot);
            index = indexDot;
            active(sliders, index);
            active(dots, index);
        });
    });
}
// load prewie avatar photo
document.querySelector('.client-photo').addEventListener('change', function photoReader() {
    if (this.files[0]) {
        let reader = new FileReader();

        reader.addEventListener('load', function () {
            clientPhoto.style.backgroundImage = 'url(' + reader.result + ')';
            localStorage.setItem('photo', reader.result);
        }, false);

        reader.readAsDataURL(this.files[0]);
    }
});
// validation
function validatorForm() {
    const popupErrors = document.querySelector('.errors-message');
    const ratingValue = document.querySelectorAll('.rating-value');
    let arrErrors = [];
    popupErrors.innerHTML = '';

    popupInfo.forEach(item => {
        if (item.value === '') {
            arrErrors.push('inputs_error');
        } else if (clientPhoto.style.backgroundImage === '') {
            arrErrors.push('photo_error');
        }
    })

    ratingValue.forEach((item) => {
        if (item.value == '') {
            arrErrors.push('select_error')
        }
    })

    if (arrErrors.length > 0) {
        popupErrors.innerHTML = 'Please fill in all fields of the form!';
    }

    if (arrErrors.length <= 0) {
        popupErrors.innerHTML = 'Successful!';
        return true;
    }
}
// send new feedback block
function sendFeedbackBlock() {
    const name = document.querySelector('.name').value;
    const surname = document.querySelector('.surname').value;
    const country = document.querySelector('.country').value;
    const text = document.querySelector('.textarea').value;
    const ratingSelect = document.querySelector('.rating-select');
    let stars;

    ratingSelect.value == 0 ? stars = zero_stars :
        ratingSelect.value == 1 ? stars = one_stars :
        ratingSelect.value == 2 ? stars = two_stars :
        ratingSelect.value == 3 ? stars = three_stars :
        ratingSelect.value == 4 ? stars = four_stars :
        ratingSelect.value == 5 ? stars = five_stars : 'Impossible..';

    let feedbackNewBlock = '';
    feedbackNewBlock += `                        
    <div class="slide">
    <div class="feedback-block">
        <div class="feedback-text__block">
            <p class="feedback-text">
                “ ${text} “
            </p>
        </div>
        <div class="feedback-client client">
            <img class="feedback-client__img" src="${localStorage.getItem('photo')}"
                alt="client">
            <div class="feedback-client__name">
            <img class="rating" src=${stars} alt="rating">
                <p class="client-name">${name} ${surname}</p>
                <p class="client-country">${country}</p>
            </div>
            <img class="quote" src="${quote}" alt="quote">
        </div>
    </div>
</div>`;
    let newDots = '';
    newDots += `<span class="dot"></span>`
    document.querySelector('.slider-wrapper').innerHTML += feedbackNewBlock;
    document.querySelector('.dots-wrapper').innerHTML += newDots;
}
// module window close after btn 'send'
function closeForm() {
    feedBtn.style.display = 'none';
    popup.classList.remove('open');
}
// button 'send'
document.querySelector('.reg-ok').addEventListener('click', () => {
    if (validatorForm()) {
        sendFeedbackBlock();
        popupInfo.forEach(item => {
            item.value = '';
            clientPhoto.style.backgroundImage = '';
        })
        addWrapper();
        setTimeout(closeForm, 1000);
    }
})