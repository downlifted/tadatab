$(document).ready(function() {

const todoModal = document.querySelector('#todo-modal'),
    notepadModal = document.querySelector('#notepad-modal');

document.querySelector('#modal-closer').addEventListener('click', function(e) {
    e.target.parentNode.style.display = "none";
});

document.querySelector('.todo-editor-closer').addEventListener('click', function(e) {
    e.target.parentNode.parentNode.style.display = "none";
});


$('#notepad').click(function() {
    $('#modal-container').css('display', 'grid');
    $('#notepad-modal').css('display', 'block');
    $('#todo-modal').css('display', 'none');
}) 

$('#todo').click(function() {
    $('#modal-container').css('display', 'grid');
    $('#notepad-modal').css('display', 'none');
    $('#todo-modal').css('display', 'block');
}) 

});