const songs = [
  { title: "YADAV_BRAND", src: "songs/123.mp3", img: "covers/123.jpeg" },
  { title: "Yadav_Brand_2", src: "songs/124.mp3", img: "covers/124.jpeg" },
  { title: "Yadav_Brand_3", src: "songs/125.mp3", img: "covers/125.jpeg" },
  { title: "Yadav_Brand_4", src: "songs/126.mp3", img: "covers/126.jpeg" },
  { title: "YADAV_BRAND_RETURNS", src: "songs/127.mp3", img: "covers/127.jpeg" },
   { title: "Yadav_Brand_Drill", src: "songs/128.mp3", img: "covers/128.jpeg" },
  { title: "Rao_Sahab_Retro", src: "songs/129.mp3", img: "covers/129.jpeg" },
  { title: "Rao_Sahab_Hain", src: "songs/130.mp3", img: "covers/130.jpeg" },
  { title: "Rao_Sahab_Rollin", src: "songs/131.mp3", img: "covers/131.jpeg" },
  { title: "Shree_Krishan_Ji_Ke_Vanshaj", src: "songs/132.mp3", img: "covers/132.jpeg" },
   { title: "Kaali_Burshat", src: "songs/133.mp3", img: "covers/133.jpeg" },
  { title: "Yadav_Yadav ", src: "songs/134.mp3", img: "covers/134.jpeg" },
  { title: "Rao_Sahabni", src: "songs/135.mp3", img: "covers/135.jpeg" },
  { title: "Rao_Sahab", src: "songs/136.mp3", img: "covers/136.jpeg" },
  { title: "Mere_Aala_Rao_Sahab", src: "songs/137.mp3", img: "covers/137.jpeg" },
   { title: "Yadav_Gharana", src: "songs/138.mp3", img: "covers/138.jpeg" },
  { title: "Rao_Sahabni 2", src: "songs/139.mp3", img: "covers/139.jpeg" },
  { title: "Yadav_Likhwaya", src: "songs/140.mp3", img: "covers/140.jpeg" },
  { title: "Rao_Sahab", src: "songs/141.mp3", img: "covers/141.jpeg" },
  { title: "Rao_Sahab", src: "songs/142.mp3", img: "covers/142.jpeg" },
  { title:  "RANGE OF  RAOSAHAB", src: "songs/143.mp3", img: "covers/143.jpeg" },
  { title: "Riyasat", src: "songs/144.mp3", img: "covers/144.jpeg" },
  { title: "Yadav_ki_haveli", src: "songs/145.mp3", img: "covers/145.jpeg" },
  { title: "Yadav_Kon_Kehvega_Re", src: "songs/146.mp3", img: "covers/146.jpeg" },
  { title: "Rao_Sahab_Drill_2", src: "songs/147.mp3", img: "covers/147.jpeg" },
  { title: "yadav_kul", src: "songs/148.mp3", img: "covers/148.jpeg" }
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