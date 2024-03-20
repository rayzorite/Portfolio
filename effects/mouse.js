// Cursor
const trailer = document.getElementById("trailer");

const AnimateTrailer = (e, interacting) => {
  const x = e.clientX - trailer.offsetWidth / 2,
        y = e.clientY - trailer.offsetHeight / 2;
  
  const keyframes = {
    transform: `translate(${x}px, ${y}px) scale(${interacting ? 5 : 1})`
  }
  
  trailer.animate(keyframes, { 
    duration: 200, 
    fill: "forwards" 
  });
}

window.onmousemove = e => {
  const interactable = e.target.closest(".interactable"),
        interacting = interactable !== null;
  
  const trailerText =  document.getElementById("trailer-text");

  AnimateTrailer(e, interacting);

  trailer.dataset.type = interacting ? interactable.dataset.type : "";

  if (interacting) {
      trailerText.textContent = interactable.dataset.trailerText;
      trailerText.classList.remove('hidden'); // Show the text
  } else {
      trailerText.classList.add('hidden'); // Hide the text
  }
  
}