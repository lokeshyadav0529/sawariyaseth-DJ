const songs = [
  { title: "pistol bolegi", src: "songs/11.mp3", img: "covers/11.jpeg" },
  { title: "32 fire ", src: "songs/12.mp3", img: "covers/12.jpeg" },
  { title: "warning", src: "songs/13.mp3", img: "covers/13.jpeg" },
  { title: "Danda Deniya", src: "songs/14.mp3", img: "covers/14.jpeg" },
  { title: "1987", src: "songs/15.mp3", img: "covers/15.jpeg" },
   { title: "1800 Shooter", src: "songs/16.mp3", img: "covers/16.jpeg" },
  { title: "Moj ", src: "songs/17.mp3", img: "covers/17.jpeg" },
  { title: "Sharp Shooter", src: "songs/18.mp3", img: "covers/18.jpeg" },
  { title: "60 Mukadme - Masoom Sharma", src: "songs/19.mp3", img: "covers/19.jpeg" },
  { title: "Marda Pe Case", src: "songs/20.mp3", img: "covers/20.jpeg" },
   { title: "Matak Matak", src: "songs/21.mp3", img: "covers/21.jpeg" },
  { title: "Bhirad Ladgi ", src: "songs/22.mp3", img: "covers/22.jpeg" },
  { title: "Davai", src: "songs/23.mp3", img: "covers/23.jpeg" },
  { title: "Tuition Badmashi Kaa", src: "songs/24.mp3", img: "covers/24.jpeg" },
  { title: "Byah ke Lawenge - Masoom Sharma", src: "songs/25.mp3", img: "covers/25.jpeg" },
   { title: "Bateu Haryane Te - Masoom Sharma", src: "songs/26.mp3", img: "covers/26.jpeg" },
  { title: "Ram Ne Lootegi - Masoom Sharma", src: "songs/27.mp3", img: "covers/27.jpeg" },
  { title: "Baitha Balad Kade Laat Maar Ke Thaya Na Karte", src: "songs/28.mp3", img: "covers/28.jpeg" },
  { title: "Blender - Masoom Sharma", src: "songs/29.mp3", img: "covers/29.jpeg" },
  { title: "2 Khatole - Masoom Sharma", src: "songs/30.mp3", img: "covers/30.jpeg" }
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