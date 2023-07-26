let container = document.getElementById('modal-container');
let openbtn = document.getElementById('open_btn');
let closebtn = document.getElementById('close_btn');


openbtn.addEventListener('click', function(){

    container.style.display = 'block';
});

closebtn.addEventListener('click', function(){

    container.style.display = 'none';
})
