const track = document.getElementById('carrouselTrack');

// Duplique les images pour créer un loop infini sans saut visible
const images = track.innerHTML;
track.innerHTML += images;