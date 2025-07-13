const songs = [
  { title: "Udaarian", src: "songs/149.mp3", img: "covers/149.jpeg" },
  { title: "Rutba", src: "songs/150.mp3", img: "covers/150.jpeg" },
  { title: "Phull_Te_Khushbo", src: "songs/151.mp3", img: "covers/151.jpeg" },
   { title: "Mohabbat", src: "songs/152.mp3", img: "covers/152.jpeg" },
  { title: "Sanu_Aaj_Kal_Sheesha_Bada_Chhed", src: "songs/153.mp3", img: "covers/153.jpeg" },
  { title: "Badi_Lambi_Hai_Kahani", src: "songs/154.mp3", img: "covers/154.jpeg" },
  { title: "Jalsa", src: "songs/155.mp3", img: "covers/155.jpeg" },
  { title: "JALSA_2", src: "songs/156.mp3", img: "covers/156.jpeg" },
  { title: "Tere_Bina_Na_Guzara", src: "songs/157.mp3", img: "covers/157.jpeg" },
  { title: "SAJJAN_RAAZI", src: "songs/158.mp3", img: "covers/158.jpeg" }
];

const audio = new Audio();
let current = 0;
let isPlaying = false;

const songList = document.getElementById("songList");
const nowPlaying = document.getElementById("nowPlaying");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const seekbar = document.getElementById("seekbar");

// Load playlist
songs.forEach((song, index) => {
  const li = document.createElement("li");
  li.innerHTML = `
    <img src="${song.img}" alt="song ${index + 1}">
    <span>${song.title}</span>
    <span>${"--:--"}</span>`;
  li.onclick = () => loadTrack(index);
  songList.appendChild(li);
});

function loadTrack(index) {
  current = index;
  audio.src = songs[current].src;
  nowPlaying.textContent = `Now Playing: ${songs[current].title}`;
  if (isPlaying) audio.play();
  document.querySelector(".main-image img").src = songs[current].img;
}

playBtn.onclick = () => {
  if (!audio.src) loadTrack(current);
  if (audio.paused) {
    audio.play(); isPlaying = true;
    playBtn.textContent = "⏸️";
  } else {
    audio.pause(); isPlaying = false;
    playBtn.textContent = "▶️";
  }
};

prevBtn.onclick = () => {
  current = (current - 1 + songs.length) % songs.length;
  loadTrack(current);
};

nextBtn.onclick = () => {
  current = (current + 1) % songs.length;
  loadTrack(current);
};

audio.ontimeupdate = () => {
  if (!audio.duration) return;
  seekbar.max = audio.duration;
  seekbar.value = audio.currentTime;
};

seekbar.oninput = () => {
  audio.currentTime = seekbar.value;
};

audio.onended = () => nextBtn.click();

// Initialize
loadTrack(0);
audio.pause();
const gif = document.getElementById("gif");

audio.onplay = () => {
  gif.style.display = "inline";
  playBtn.textContent = "⏸️";
  isPlaying = true;
};

audio.onpause = () => {
  gif.style.display = "none";
  playBtn.textContent = "▶️";
  isPlaying = false;
};

audio.onended = () => {
  gif.style.display = "none";
  nextBtn.click();
};
function loadTrack(index) {
  current = index;
  audio.src = songs[current].src;
  nowPlayingFooter.textContent = `Now Playing: ${songs[current].title}`;
  document.querySelector(".main-image img").src = songs[current].img;
  if (isPlaying) audio.play();
}