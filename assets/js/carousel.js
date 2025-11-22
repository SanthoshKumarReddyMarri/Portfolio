const track = document.querySelector('.carousel-track');
if (track) {
  const clone = track.cloneNode(true);
  track.parentElement.appendChild(clone);
}
