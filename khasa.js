const songs = [
  { title: "Father_Saab_Khasa_Aala_Chahar", src: "songs/71.mp3", img: "covers/71.jpeg" },
  { title: "Yaar_Haryane_Te_Khasa_Aala_Chahar", src: "songs/72.mp3", img: "covers/72.jpeg" },
  { title: "Babu_Khasa_Aala_Chahar", src: "songs/73.mp3", img: "covers/73.jpg" },
  { title: "Byaah_Khasa_Aala_Chahar", src: "songs/74.mp3", img: "covers/74.jpg" },
  { title: "Farmer_Flex_Khasa_Aala_Chahar", src: "songs/75.mp3", img: "covers/75.jpg" },
   { title: "Jai_Veeru_Khasa_Aala_Chahar", src: "songs/76.mp3", img: "covers/76.jpeg" },
  { title: "MOHTARMA_Khasa_Aala_Chahar", src: "songs/77.mp3", img: "covers/77.jpg" },
  { title: "RUBBER_KHASA_AALA_CHAHAR_", src: "songs/78.mp3", img: "covers/78.jpg" },
  { title: "KHASA_AALA_CHAHAR_DJ_NA_ROK_DIE_", src: "songs/79.mp3", img: "covers/79.jpg" },
  { title: "KHASA_AALA_CHAHAR_FOOLAD_", src: "songs/80.mp3", img: "covers/80.jpg" },
   { title: "Rajasthan_Khasa_Aala_Chahar", src: "songs/81.mp3", img: "covers/81.jpg" },
  { title: "Lath_Official_Video_Khasa_Aala_Chahar ", src: "songs/82.mp3", img: "covers/82.jpg" },
  { title: "Maa_Khasa_Aala_Chahar", src: "songs/83.mp3", img: "covers/83.jpg" },
  { title: "KHASA_AALA_CHAHAR_Hostel_Life", src: "songs/84.mp3", img: "covers/84.jpg" },
  { title: "KHASA_AALA_CHAHAR_LOOT_LIYA", src: "songs/85.mp3", img: "covers/85.jpg" },
   { title: "Khasa_Aala_Chahar_Taara", src: "songs/86.mp3", img: "covers/86.jpg" },
  { title: "REASON_Khasa_Aala_Chahar", src: "songs/87.mp3", img: "covers/87.jpg" },
  { title: "Khasa_Aala_Chahar_Example", src: "songs/88.mp3", img: "covers/88.jpg" },
  { title: "Flex_Khasa_Aala_Chahar", src: "songs/89.mp3", img: "covers/89.jpeg" },
  { title: "Convoy_Kafila_Khasa_Aala_Chahar", src: "songs/90.mp3", img: "covers/90.jpeg" }
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