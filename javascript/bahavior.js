document.querySelector('#modal-closer').addEventListener('click', function(e) {
    e.target.parentNode.style.display = "none";
});

document.querySelector('.todo-editor-closer').addEventListener('click', function(e) {
    e.target.parentNode.parentNode.style.display = "none";
});