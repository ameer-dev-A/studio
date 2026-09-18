import './style.css'

let menue = document.getElementById('menue');
    let open = document.getElementById('btn-open');
    let close = document.getElementById('btn-close');

open.addEventListener("click", () => {
  menue.classList.remove("hidden");

  open.classList.add("hidden");
  close.classList.remove("hidden");
});


// إغلاق القائمة
close.addEventListener("click", () => {
  menue.classList.add("hidden");

  close.classList.add("hidden");
  open.classList.remove("hidden");
});

  let container = document.querySelector("#container");
  let left = document.querySelector("#left")
  let right = document.querySelector("#right")

  window.addEventListener("scroll",()=>{  
     if(window.innerWidth<750) return; 

    const position = container.getBoundingClientRect().top;
    if(position <window.innerHeight ){ 
     left.style.left="20%";
     right.style.right="10%";
    }
  })
  
