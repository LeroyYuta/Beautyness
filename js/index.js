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

function change(identifier) {
 identifier.style.background = color;
 identifier.style.color = color2;
}
///
   