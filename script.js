document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".custom-video__video");
  const control = document.querySelector(".custom-video__control");
  const btnUbicacion = document.getElementById("btnUbicacion");
  const btnConfirmar = document.getElementById("btnConfirmar");

  // Reproducir/Pausar con botón personalizado
  control.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      control.textContent = "||";
      setTimeout(() => {
        control.style.display = "none";
      }, 3000);
    } else {
      video.pause();
      control.textContent = "▶";
      control.style.display = "flex";
    }
  });

  // Mostrar control al terminar el video
  video.addEventListener("ended", () => {
    control.textContent = "▶";
    control.style.display = "flex";
  });

  // Pausar tocando el video (pantalla)
  video.addEventListener("click", () => {
    if (!video.paused) {
      video.pause();
      control.textContent = "▶";
      control.style.display = "flex";
    }
  });

  // Mostrar botones a los 23 segundos
  video.addEventListener("timeupdate", () => {
    if (video.currentTime >= 23) {
      btnUbicacion.classList.add("show");
      btnConfirmar.classList.add("show");
    }
  });

  // Ocultar botones si vuelve al inicio
  video.addEventListener("seeked", () => {
    if (video.currentTime < 23) {
      btnUbicacion.classList.remove("show");
      btnConfirmar.classList.remove("show");
    }
  });

  // Mostrar controles nativos brevemente en mobile o mouse
  let controlsTimeout;

  function mostrarControles() {
    video.setAttribute("controls", true);
    clearTimeout(controlsTimeout);
    controlsTimeout = setTimeout(() => {
      video.removeAttribute("controls");
    }, 3000); // Oculta controles luego de 3 seg
  }

  video.addEventListener("touchstart", mostrarControles);
  video.addEventListener("mousemove", mostrarControles);
});
