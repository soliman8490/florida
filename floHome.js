const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDounMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function () {
    dropDounMenu.classList.toggle('open');
}



