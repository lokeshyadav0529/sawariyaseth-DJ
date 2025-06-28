const songs = [
  { title: "52_GAJ_KA_DAMAN_PRANJAL_DAHIYA", src: "songs/91.mp3", img: "covers/91.jpg" },
  { title: "Bhaga_Aale_Pranjal_Dahiya", src: "songs/92.mp3", img: "covers/92.jpg" },
  { title: "Fly_Karke_Sabba_Ft_Pranjal_Dahiya", src: "songs/93.mp3", img: "covers/93.jpg" },
  { title: "Gaadi_Paache_Gaadi_Pranjal_Dahiya", src: "songs/94.mp3", img: "covers/94.jpg" },
  { title: "Gaam_Ka_Andaza_Pranjal_Dahiya", src: "songs/95.mp3", img: "covers/95.jpg" },
   { title: "Gabru_Gulab_Warga_Pranjal_Dahiya", src: "songs/96.mp3", img: "covers/96.jpg" },
  { title: "Gypsy_Balam_Thanedar_Pranjal_Dahiya", src: "songs/97.mp3", img: "covers/97.jpg" },
  { title: "Jaat_Intro_Pranjal_Dahiya", src: "songs/98.mp3", img: "covers/98.jpg" },
  { title: "KOKA_Pranjal_Dahiya", src: "songs/99.mp3", img: "covers/99.jpg" },
  { title: "Kabootar_Pranjal_Dahiya", src: "songs/100.mp3", img: "covers/100.jpg" },
   { title: "Kale_Kagaz_Pranjal_Dahiya", src: "songs/101.mp3", img: "covers/101.jpg" },
  { title: "Khaan_Ne_Daane_Pranjal_Dahiya ", src: "songs/102.mp3", img: "covers/102.jpg" },
  { title: "Pranjal_Dahiya_Scorpio_Kali", src: "songs/103.mp3", img: "covers/103.jpg" },
  { title: "Lamborghini_Me_Ghuma_De_Pranjal_Dahiya", src: "songs/104.mp3", img: "covers/104.jpg" },
  { title: "7_JANAM_Pranjal_Dahiya", src: "songs/105.mp3", img: "covers/105.jpg" },
   { title: "Case_Pranjal_Dahiya", src: "songs/106.mp3", img: "covers/106.jpg" },
  { title: "Demand_Pranjal_Dahiya", src: "songs/107.mp3", img: "covers/107.jpg" },
  { title: "BANDOOk_pranjal_dahiya", src: "songs/108.mp3", img: "covers/108.jpg" },
  { title: "Balam_Bhartar_Pranjal_Dahiya", src: "songs/109.mp3", img: "covers/109.jpg" },
  { title: "Badmashi_Pranjal_Dahiya", src: "songs/110.mp3", img: "covers/110.jpg" },
  { title: "Khokhe_Pranjal_Dahiya", src: "songs/111.mp3", img: "covers/111.jpg" },
  { title: "Susre_Ki_Choudhar_Pranjal_Dahiya", src: "songs/112.mp3", img: "covers/112.jpg" }
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