let openBtn=document.getElementById('open-btn');
let modalConatiner=document.getElementById('modal-container');
let closeBtn=document.getElementById('close-btn');

openBtn.addEventListener('click',function(){
    modalConatiner.style.display='block';
});
closeBtn.addEventListener('click',function(){
    modalConatiner.style.display='none';
});
window.addEventListener('click',function(e){
    if(e.target===modalConatiner){
        modalConatiner.style.display='none';
    }
});
