//Latest Updates

const btn = document.querySelector ('.button__btn');
const btn_2 = document.querySelector ('.button__btn-2');
let block = document.querySelector(".wrapper-2");
function viewBox() {
    block.style.display = "block";

    if (block.style.display === "block") {
        btn.style.display = "none";
        btn_2.innerHTML = "Hide";
        block.style.marginTop = "2%";
    }
}

function hideBox() {
    block.style.display = "none"
    btn.style.display = "block";
}


