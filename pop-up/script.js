let popup = document.getElementById('pop-up');
let close = document.getElementById('btn-cls');
let open = document.getElementById('btn-opn');

function popUp() {
    popup.style.display = "block";
}

function closePopUp() {
    popup.style.display = "none";
}
open.addEventListener('click', popUp);
close.addEventListener('click', closePopUp);