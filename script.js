document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".custom-video__video");
  const control = document.querySelector(".custom-video__control");

  control.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      control.textContent = "||";

      // Oculta el botón después de 3 segundos
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

  // Si querés que tocando el video también pause/reproduzca:
  video.addEventListener("click", () => {
    if (!video.paused) {
      video.pause();
      control.textContent = "▶";
      control.style.display = "flex";
    }
  });
});
