// Get the audio
var beneficios = document.getElementById("ecosistemaValores");

// Get the button
var helloDan = document.getElementById("valores");

// Pause and play the audio, and change the img text
function ventajas() {
  if (beneficios.paused) {
    beneficios.play();
    helloDan.innerHTML = "PAUSE";
  } else {
    beneficios.pause();
    helloDan.innerHTML = "PLAY";
  }
}
