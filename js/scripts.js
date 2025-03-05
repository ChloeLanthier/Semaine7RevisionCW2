const boutonsModale = document.querySelectorAll('.bouton2');
const modale = document.querySelector('.modale')


for(let i = 0; i < boutonsModale.length; i++){
    boutonsModale[i].addEventListener('click', openModale);
}

console.log(modale);

function openModale(e){
    
    e.preventDefault();
    modale.classList.add('visible');
}
















//function openModale(e){  
//    const clicked = e.currentTarget;
//    const sibling = clicked.previousElementSibling;
//    const imgSrc = sibling.getAttribute('src');
//    const tempImage = document.createElement ('img');
//    tempImage.setAttribute('src', imgSrc);
//    modale.appendChild(tempImage);
//    modale.classList.add('visible');

//    tempImage.addEventListener('click', closeModale);


//}

//function closeModale(e){

 //   modale.removeChild(e.currentTarget);
 //   modale.classList.remove('visible');

//}