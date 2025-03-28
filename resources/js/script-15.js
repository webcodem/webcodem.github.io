  document.addEventListener("DOMContentLoaded", function() {

    if (localStorage.getItem("valoracionRealizada")) {
      
      document.getElementById("valoracion-section").style.display = "none";
    }
  });

  function enviarValoracion(valor) {

    localStorage.setItem("valoracionRealizada", true);

    switch (valor) {
      case '1':
        window.location.href = "./estrella-1";
        break;
      case '2':
        window.location.href = "./estrella-2";
        break;
      case '3':
        window.location.href = "./estrella-3";
        break;
      case '4':
        window.location.href = "./estrella-4";
        break;
      case '5':
        window.location.href = "./estrella-5";
        break;
      default:
        
        window.location.href = "webcodem.github.io";
        break;
    }
 } 
