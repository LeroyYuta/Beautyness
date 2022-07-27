// feedback module window
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
// load avatar photo
document.querySelector('.client-photo').addEventListener('change', function () {
    if (this.files[0]) {
        let reader = new FileReader();

        reader.addEventListener('load', function () {
            document.querySelector('.label-photo').style.backgroundImage = 'url(' + reader.result + ')';
        }, false);

        reader.readAsDataURL(this.files[0]);
    }
});
// wrapper
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

// validation