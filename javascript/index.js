 function dropFunc() {
     document.getElementById("dropContd").classList.toggle("show");
     
   }

   window.onclick = function(event) {
     if (!event.target.matches('.dropBtn')) {
       var dropdowns = document.getElementsByClassName("mobile-drop");
       var i;
       for (i = 0; i < dropdowns.length; i++) {
         var openDropdown = dropdowns[i];
         if (openDropdown.classList.contains('show')) {
           openDropdown.classList.remove('show');
         }
       }
     }
   }

   function mobileMenu(x) {
    x.classList.toggle("change");
  }
 
