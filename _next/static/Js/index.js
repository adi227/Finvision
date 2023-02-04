function changeBg(){
    var navbar = document.getElementById("navbar")
    var scrollValue = window.scrollY;
   if(scrollValue>=40){
    navbar.classList.add("bg-dark")
   }
   else{
    navbar.classList.remove("bg-dark")
   }
  }
  window.addEventListener("scroll",changeBg)

