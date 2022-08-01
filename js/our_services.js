// modal
let btns = document.querySelectorAll("*[data-madal-btn]");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    let name = btns[i].getAttribute("data-madal-btn");
    let modal = document.querySelector(
      "[data-modal-window='" + name + "']"
    );
    modal.style.display = "block";
    let close = modal.querySelector(".close__madal");
    close.addEventListener("click", () => {
      modal.style.display = "none";
      document.querySelector('.errors__info').innerHTML = '';
    });

  });
}

/// img
const imgs = document.querySelectorAll('.box-img');

for (i = 0; i < imgs.length; i++) {
  const img = imgs[i];
  img.addEventListener('mousemove', startRotate); //запускает функцию вращения
  img.addEventListener('mouseout', stopRotate); // останавливает функцию вращения
}

function startRotate(event) {
  const boxImg = this.querySelector('.img__box');
  const halfHei = boxImg.offsetHeight / 2; // нашли середину опираясь на высоту и разделили пополам

  boxImg.style.transform = 'rotateX(' + -(event.offsetY - halfHei) / 10 + 'deg) rotateY(' + (event.offsetX - halfHei) / 10 + 'deg)'
} // deg (градус)

function stopRotate(event) {
  const boxImg = this.querySelector('.img__box');
  boxImg.style.transform = 'rotate(0)'; // сброс всех вычеслений
}

///////// color
const color = '#5C8692';
const color2 = ' #fff';
const color3 = '#fff';
const color4 = ' #000';
let isClicked = false;

function change(identifier) {
  isClicked = !isClicked;
  if (isClicked) {
    identifier.style.background = color;
    identifier.style.color = color2;
    identifier.id = 'active';
  } else {
    identifier.style.background = color3;
    identifier.style.color = color4;
    identifier.id = null;
  }
}

/////  validity
const nameInput = document.querySelectorAll('.name__input');
const btnTime = document.querySelectorAll('.btn-time').value;

let errors = [];

function clickValidity(input) {
  const validity = input.value;

  if (validity === '') {
    errors.push('The field ' + input.placeholder + ' is not filled');
  }

};

function clickMe() {
  errors = [];
  const inputs = document.getElementsByTagName('input');

  for (let input of inputs) {
    clickValidity(input);
  }

  document.querySelector('.errors__info').innerHTML = errors.join('.<br>');

  //  JSON
  let user = {
    name: document.getElementById('name').value,
    phone: document.getElementById('phone').value,
    procedura: document.querySelectorAll('.btn-procedura').value,
    time: document.querySelectorAll('.form__btn-time').value,
    data: document.getElementById('date1').value
  }

  const arrProcedura = document.querySelectorAll('.btn-procedura');
  const arrTime = document.querySelectorAll('.form__btn-time');

  arrProcedura.forEach(item => {
    if (item.id) {
      user.procedura = item.value;
    }
  })

  arrTime.forEach(item => {
    if (item.id) {
      user.time = item.value;
    }
  })

  console.log(user);

  fetch("https://httpbin.org/post", {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
    })
    .then(response => response.json())
    .then(user => {
      console.log(user);
    })
    .catch(error => console.log(error));
}