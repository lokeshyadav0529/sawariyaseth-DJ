const songs = [
  { title: "Solid Body", src: "songs/31.mp3", img: "covers/31.jpeg" },
  { title: "Moka_Soka", src: "songs/32.mp3", img: "covers/32.jpeg" },
  { title: "MOTO", src: "songs/33.mp3", img: "covers/33.jpeg" },
  { title: "Suthri Si Chori", src: "songs/34.mp3", img: "covers/34.jpeg" },
  { title: "Husband_Bawla", src: "songs/35.mp3", img: "covers/35.jpeg" },
   { title: "Bhang_Ka_Barota", src: "songs/36.mp3", img: "covers/36.jpeg" },
  { title: "Soldier", src: "songs/37.mp3", img: "covers/37.jpeg" },
  { title: "TIK TOK", src: "songs/38.mp3", img: "covers/38.jpeg" },
  { title: "UNCLE", src: "songs/39.mp3", img: "covers/39.jpeg" },
  { title: "Love_You_Moto", src: "songs/40.mp3", img: "covers/40.jpeg" },
   { title: "Kamar_Teri_Left_Right_Halle", src: "songs/41.mp3", img: "covers/41.jpeg" },
  { title: "Bahu_Kale_K", src: "songs/42.mp3", img: "covers/42.jpeg" },
  { title: "Fauji", src: "songs/43.mp3", img: "covers/43.jpeg" },
  { title: "BHABHI", src: "songs/44.mp3", img: "covers/44.jpeg" },
  { title: "Kaliya_Murad", src: "songs/45.mp3", img: "covers/45.jpeg" },
   { title: "Mehnga_Perfume", src: "songs/46.mp3", img: "covers/46.jpeg" },
  { title: "Olha Mein Patola", src: "songs/47.mp3", img: "covers/47.jpeg" },
  { title: "Lamba Lamba Ghunghat - Ajay Hooda", src: "songs/48.mp3", img: "covers/48.jpeg" },
  { title: "Age Gap - Ajay Hooda", src: "songs/49.mp3", img: "covers/49.jpeg" },
  { title: "Patange - Ajay Hooda", src: "songs/50.mp3", img: "covers/50.jpeg" }
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