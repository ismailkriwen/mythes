const btns=document.querySelectorAll(".open"),scrollBtn=document.querySelector(".scroll"),hide=a=>{const b="right"==a?"left":"right";document.querySelector(`.dropdown.${b}`).classList.remove("active")};btns.forEach(a=>{a.addEventListener("click",()=>{const b=document.querySelector(`.dropdown.${a.dataset.dp}`);hide(a.dataset.dp),b.classList.toggle("active")})}),document.addEventListener("scroll",()=>{const a=window.pageYOffset===void 0?(document.documentElement||document.body.parentNode||document.body).scrollTop:window.pageYOffset;400<=a?(scrollBtn.classList.add("active"),scrollBtn.addEventListener("click",()=>{scrollTo(0,0)})):scrollBtn.classList.remove("active")});