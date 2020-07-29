//  window.addEventListener("load",function(){
//       console.log(document.getElementById("loader"));
//      document.getElementById("loader").fadeOut("slow");
//      });
  
// {
//  var fadeTarget = document.getElementById("loader");
//  var fadeEffect = setInterval(function() {
//   if (fadeTarget.style.opacity < 0.1)
//   {
//    clearInterval(fadeEffect);
//   }
//   else
//   {
//    fadeTarget.style.opacity -= 0.1;
//   }
//  }, 200);
// }
   function loadMain()
   {
     var t =  setTimeout(loadHome,1000);
   }
   function loadHome(){
          document.getElementById("main").style.display="block";
          document.getElementById("loader").style.display= "none";
   }

window.addEventListener("load", loadMain());