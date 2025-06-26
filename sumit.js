const songs = [
  { title: "Sumit_Parta_Ghane_Gande", src: "songs/51.mp3", img: "covers/51.jpeg" },
  { title: "Sumit_Parta_Mote_Peg_2", src: "songs/52.mp3", img: "covers/52.jpeg" },
  { title: "Sumit_Parta_Mote_Peg_", src: "songs/53.mp3", img: "covers/53.jpeg" },
  { title: "Sumit_Parta_-_Rail", src: "songs/54.mp3", img: "covers/54.jpeg" },
  { title: "Sumit_Parta_Tarraki", src: "songs/55.mp3", img: "covers/55.jpeg" },
   { title: "Sumit_parta_Pistol", src: "songs/56.mp3", img: "covers/56.jpeg" },
  { title: "Sumit_Parta_All_About_Haryana", src: "songs/57.mp3", img: "covers/57.jpeg" },
  { title: "Sumit_Parta_Angreji_Bole", src: "songs/58.mp3", img: "covers/58.jpeg" },
  { title: "Sumit_Parta_Badam_", src: "songs/59.mp3", img: "covers/59.jpeg" },
  { title: "Sumit_Parta_Bhartar_", src: "songs/60.mp3", img: "covers/60.jpeg" },
   { title: "Sumit_Parta_Chawal", src: "songs/61.mp3", img: "covers/61.jpeg" },
  { title: "Sumit_Parta_Demand", src: "songs/62.mp3", img: "covers/62.jpeg" },
  { title: "Sumit_Parta_-_Gaam_Mera", src: "songs/63.mp3", img: "covers/63.jpeg" },
  { title: "Sumit_Parta_-_Jaat", src: "songs/64.mp3", img: "covers/64.jpeg" },
  { title: "Sumit_Parta_-_Kade_Kade", src: "songs/65.mp3", img: "covers/65.jpeg" },
   { title: "Sumit_Parta_Maa_Babu", src: "songs/66.mp3", img: "covers/66.jpeg" },
  { title: "Sumit_Parta_Peg_Marke", src: "songs/67.mp3", img: "covers/67.jpeg" },
  { title: "Sumit_Parta_2_Numbari", src: "songs/68.mp3", img: "covers/68.jpeg" },
  { title: "Sumit_Parta_Na_Kre_Badmashi_", src: "songs/69.mp3", img: "covers/69.jpeg" },
  { title: "Sumit_Parta_Angreji_Bole", src: "songs/70.mp3", img: "covers/70.jpeg" }
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