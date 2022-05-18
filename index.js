let nav = document.querySelector("#nav");
let cards = document.querySelectorAll('.card')

window.onscroll = function() {        
    let position = window.pageYOffset
    console.log(window.pageYOffset)
    if (position > 0){
        if(position > 300){
            cards.forEach(card => {
            card.classList.add('show')
            });
        }else{
            cards.forEach(card => {
                card.classList.remove('show')
                });
        }
        nav.classList.add('show');        
    }else{
        nav.classList.remove('show');        
    }
}
