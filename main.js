var imageF = document.querySelectorAll('.imgur');
var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');

function openModal() {
    backdrop.style.display = 'block';
    modal.style.display = 'block';
}

function closeModal() {
    backdrop.style.display = 'none';
    modal.style.display = 'none';

}

for (var i = 0; i < imageF.length; i++) {
    imageF[i].addEventListener("click", openModal);
}
backdrop.addEventListener("click", closeModal);
modal.onclick = closeModal;