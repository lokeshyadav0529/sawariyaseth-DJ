const songs = [
  { title: "SUPERSTAR", src: "songs/113.mp3", img: "covers/113.jpeg" },
  { title: "Time_Is_Money", src: "songs/114.mp3", img: "covers/114.jpeg" },
  { title: "Aam_Jahe_Munde", src: "songs/115.mp3", img: "covers/115.jpeg" },
   { title: "Rubicon_Drill", src: "songs/116.mp3", img: "covers/116.jpeg" },
  { title: "Le_Chakk_Main_Aa_Gya", src: "songs/117.mp3", img: "covers/117.jpeg" },
  { title: "Check_It_Out", src: "songs/118.mp3", img: "covers/118.jpeg" },
  { title: "Chal_Oye", src: "songs/119.mp3", img: "covers/119.jpeg" },
  { title: "Na_Jatta_Na", src: "songs/120.mp3", img: "covers/120.jpeg" },
  { title: "We_Made_It", src: "songs/121.mp3", img: "covers/121.jpeg" },
  { title: "Gaal_Ni_Kadni", src: "songs/122.mp3", img: "covers/122.jpeg" }
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