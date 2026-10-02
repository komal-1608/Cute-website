function openEnvelope() {
  document.getElementById('envelope-screen').classList.remove('active');
  document.getElementById('main-screen').classList.add('active');
  
  // Auto play music on click
  const music = document.getElementById('bg-music');
  music.play();
}

function toggleMusic() {
  const music = document.getElementById('bg-music');
  const btn = document.getElementById('music-btn');
  
  if (music.paused) {
    music.play();
    btn.innerText = "🎵 Pause Music";
  } else {
    music.pause();
    btn.innerText = "🎵 Play Music";
  }
}