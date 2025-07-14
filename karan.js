const songs = [
  { title: "NA_NA_NA", src: "songs/159.mp3", img: "covers/159.jpeg" },
  { title: "52_Bars", src: "songs/160.mp3", img: "covers/160.jpeg" },
  { title: "WAVY", src: "songs/161.mp3", img: "covers/161.jpeg" },
   { title: "Winning_Speech", src: "songs/162.mp3", img: "covers/162.jpeg" },
  { title: "White_Brown_Black", src: "songs/163.mp3", img: "covers/163.jpeg" },
  { title: "SOFTLY", src: "songs/164.mp3", img: "covers/164.jpeg" },
  { title: "Admirin", src: "songs/165.mp3", img: "covers/165.jpeg" },
  { title: "Bachke_Bachke", src: "songs/166.mp3", img: "covers/166.jpeg" },
  { title: "SIFAR_SAFAR", src: "songs/167.mp3", img: "covers/167.jpeg" },
  { title: "On_Top", src: "songs/168.mp3", img: "covers/168.jpeg" },
  { title: "Goin_Off", src: "songs/169.mp3", img: "covers/169.jpeg" },
  { title: "Don’t_look", src: "songs/170.mp3", img: "covers/170.jpeg" },
  { title: "Take_It_Easy", src: "songs/171.mp3", img: "covers/171.jpeg" },
   { title: "BANDOOK", src: "songs/172.mp3", img: "covers/172.jpeg" },
   { title: "Antidote", src: "songs/173.mp3", img: "covers/173.jpeg" },
  { title: "Chitta_Kurta", src: "songs/174.mp3", img: "covers/174.jpeg" },
  { title: "Jee_Ni_Lagda", src: "songs/175.mp3", img: "covers/175.jpeg" },
  { title: "IDK_HOW", src: "songs/176.mp3", img: "covers/176.jpeg" },
  { title: "NOTHING_LASTS", src: "songs/177.mp3", img: "covers/177.jpeg" },
  { title: "At_Peace", src: "songs/178.mp3", img: "covers/178.jpeg" }
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