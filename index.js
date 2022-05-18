let nav = document.querySelector("#nav");
let cards = document.querySelectorAll(".card");
let cards2 = document.querySelectorAll(".card2");

window.onscroll = function () {
  let position = window.pageYOffset;
  console.log(window.pageYOffset);
  if (position > 0) {
    if (position > 300) {
      cards.forEach((card) => {
        card.classList.add("show");
      });
      } else {
        cards.forEach((card) => {
          card.classList.remove("show");
        });
      }
      if (position > 1200) {
          cards2.forEach(card => {
              card.classList.add('show')
          })
      }else {
        cards2.forEach(card => {
            card.classList.remove('show')
        })
      }
      nav.classList.add("show");
    } else {
      nav.classList.remove("show");
    }
  };
