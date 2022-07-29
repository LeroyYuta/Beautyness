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
          });
        });
      }
/////////
const color = '#5C8692'; 
const color2=' #fff';
const color3 = '#fff'; 
const color4=' #000';
let isClicked = false;


function change(identifier) {
 isClicked = !isClicked;
 if (isClicked) {
  identifier.style.background = color;
  identifier.style.color = color2;
} else {
  identifier.style.background = color3;
  identifier.style.color = color4;
}
}


///
   const imgs =document.querySelectorAll('.box-img');

   for(i = 0; i < imgs.length; i++){
    const img = imgs[i] ;
    img.addEventListener('mousemove', startRotate); //запускает функцию вращения
    img.addEventListener('mouseout', stopRotate); // останавливает функцию вращения
   }
   
   function startRotate(event){
const boxImg =  this.querySelector('.img__box');
const halfHei = boxImg.offsetHeight / 2; // нашли середину опираясь на высоту и разделили пополам

boxImg.style.transform ='rotateX('+-(event.offsetY - halfHei)/10+'deg) rotateY('+(event.offsetX - halfHei) /10+'deg)'
   } // deg (градус)

   function stopRotate(event){
    const boxImg =  this.querySelector('.img__box');
    boxImg.style.transform ='rotate(0)';   // сброс всех вычеслений
       }


/////       