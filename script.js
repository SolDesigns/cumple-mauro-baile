document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".custom-video__video");
  const control = document.querySelector(".custom-video__control");
  const btnUbicacion = document.getElementById("btnUbicacion");
  const btnConfirmar = document.getElementById("btnConfirmar");

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

  video.addEventListener("ended", () => {
    control.textContent = "▶";
    control.style.display = "flex";
  });

  video.addEventListener("click", () => {
    if (!video.paused) {
      video.pause();
      control.textContent = "▶";
      control.style.display = "flex";
    }
  });

  // MOSTRAR BOTONES A LOS 2 SEGUNDOS (para testear)
  video.addEventListener("timeupdate", () => {
    if (video.currentTime >= 23){
      btnUbicacion.classList.add("show");
      btnConfirmar.classList.add("show");
    }
  });

  // OCULTAR SI EL VIDEO VUELVE AL INICIO
  video.addEventListener("seeked", () => {
    if (video.currentTime < 23){
      btnUbicacion.classList.remove("show");
      btnConfirmar.classList.remove("show");
    }
  });
});

