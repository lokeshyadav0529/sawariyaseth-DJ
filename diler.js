const songs = [
 
  { title: "Sapna_सपना", src: "songs/179.mp3", img: "covers/179.jpeg" },
  { title: "Sapna_2", src: "songs/180.mp3", img: "covers/180.jpeg" },
  { title: "Lilo_Chaman", src: "songs/181.mp3", img: "covers/181.jpeg" },
   { title: "Kabootri", src: "songs/182.mp3", img: "covers/182.jpeg" },
   { title: "TEEN_AGE", src: "songs/183.mp3", img: "covers/183.jpeg" },
  { title: "र_बग्गी_डाटिये", src: "songs/184.mp3", img: "covers/184.jpeg" },
  { title: "Laad", src: "songs/185.mp3", img: "covers/185.jpeg" },
  { title: "Kabootri_2", src: "songs/186.mp3", img: "covers/186.jpeg" },
  { title: "Narrow_Salwar", src: "songs/187.mp3", img: "covers/187.jpeg" },
  { title: "Tut_Jyaga_Dil", src: "songs/188.mp3", img: "covers/188.jpeg" }
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