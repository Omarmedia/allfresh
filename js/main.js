//Manu JS
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))



  
  

   // Basic interactivity
    const thumbs = document.querySelectorAll('.thumb');
    const hero = document.getElementById('hero');
    thumbs.forEach(t=>{
      t.addEventListener('click',()=>{
        const src = t.getAttribute('data-src');
        if(src) hero.src = src;
      })
    })

    // Price calculation demo
    const basePrice = 1245.00; // NOK per person baseline
    const trav = document.getElementById('trav');
    const priceEl = document.getElementById('price');
    const check = document.getElementById('check');

    function updatePrice(){
      const p = parseInt(trav.value,10);
      // example: discount for group of 3+ (demo)
      let per = basePrice;
      if(p>=3) per = Math.round((basePrice * 0.92) * 100)/100; // 8% group discount
      priceEl.textContent = `NOK ${per.toLocaleString('nb-NO',{minimumFractionDigits:2})}`;
    }
    trav.addEventListener('change',updatePrice);
    updatePrice();

    check.addEventListener('click',()=>{
      const date = document.getElementById('date').value;
      const p = parseInt(trav.value,10);
      const per = parseFloat(priceEl.textContent.replace(/[NOK ,]/g,''));
      const total = (per * p).toLocaleString('nb-NO',{minimumFractionDigits:2});

      if(!date){
        alert('Velg en dato før du går videre.');
        return;
      }
      alert(`Sjekker tilgjengelighet for ${p} reisende på ${date}.\nPris per person: ${priceEl.textContent}\nTotal: NOK ${total}`);
    });

  

    // Velg elementene
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox .close");

// Klikk på hovedbildet for å åpne
document.getElementById("hero").addEventListener("click", function () {
  lightbox.style.display = "flex";
  lightboxImg.src = this.src;
});

// Klikk på lukk-knappen
closeBtn.addEventListener("click", function () {
  lightbox.style.display = "none";
});

// Klikk utenfor bildet for å lukke
lightbox.addEventListener("click", function (e) {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});






// Minimal JS here, sorry for using jQuery, too lazy to convert in Vanilla 😅

// Clone markup logos, one set before, one set after
const $itemList = $('.logo-list ul');
const $logos = $itemList.find('li');

$logos.clone().addClass('cloned').prependTo( $itemList );
$logos.clone().addClass('cloned').appendTo( $itemList );
