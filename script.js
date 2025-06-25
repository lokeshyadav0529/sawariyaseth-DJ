const songs = [
{ title: "halke me na levu sawariya ki maya ", src: "songs/1.mp3", img: "covers/1.jpeg" },
  { title: "Gadiya_Gadiya_Hotla_Pe_Naam_Likhyo_Sanwariya_Ko ", src: "songs/2.mp3", img: "covers/2.jpeg" },
  { title: "Mharo_Seth_Rukhalo_", src: "songs/3.mp3", img: "covers/3.jpeg" },
  { title: "बैंक_भी_छोटो_पड़ग्या_रे_म्हारो_सांवरियो_मोटो_प्रकाश_माली_मेहंदवास", src: "songs/4.mp3", img: "covers/4.jpeg" },
  { title: "मारा_बैंक_को_मैनेजर_सेठ_सांवरीयो_ll_सांवरिया_ll", src: "songs/5.mp3", img: "covers/5.jpeg" },
   { title: "मेरा_सबसे_बड़ा_है_बैंक_सेठ_सांवरिया_ll_सांवरिया_ll", src: "songs/6.mp3", img: "covers/6.jpeg" },
  { title: "मेरी_गाड़ी_मेरा_बंगला_सब_कुछ_तेरो_सांवरिया_सेठ ", src: "songs/7.mp3", img: "covers/7.jpeg" },
  { title: "सांवरिया_नाम_की_है_मरोड़_चाहे_छीजों_दुनिया_करोड़", src: "songs/8.mp3", img: "covers/8.jpeg" },
  { title: "थारे_भरोसे_मारा_सांवरा_Sawariya_seth_Bhajan_गोकुल_शर्मा", src: "songs/9.mp3", img: "covers/9.jpeg" },
  { title: "मत_करो_सांवरिया_लेट_कर_दो_मारो_सिस्टम_सेट", src: "songs/10.mp3", img: "covers/10.jpeg" }
];

const audio = new Audio();
let current = 0;
let isPlaying = false;

const songList = document.getElementById("songList");
const nowPlayingFooter = document.getElementById("nowPlayingFooter");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const seekbar = document.getElementById("seekbar");
const gif = document.getElementById("gif");

songs.forEach((song, index) => {
  const li = document.createElement("li");
  li.innerHTML = `
    <img src="${song.img}" alt="song ${index + 1}">
    <span>${song.title}</span>
    <span>--:--</span>`;
  li.onclick = () => loadTrack(index);
  songList.appendChild(li);
});

function loadTrack(index) {
  current = index;
  audio.src = songs[current].src;
  nowPlayingFooter.textContent = `Now Playing: ${songs[current].title}`;
  document.querySelector(".main-image img").src = songs[current].img;
  if (isPlaying) audio.play();
}

playBtn.onclick = () => {
  if (!audio.src) loadTrack(current);
  if (audio.paused) {
    audio.play();
    isPlaying = true;
    playBtn.textContent = "⏸️";
    gif.style.display = "inline";
  } else {
    audio.pause();
    isPlaying = false;
    playBtn.textContent = "▶️";
    gif.style.display = "none";
  }
};

prevBtn.onclick = () => {
  current = (current - 1 + songs.length) % songs.length;
  loadTrack(current);
  audio.play();
};

nextBtn.onclick = () => {
  current = (current + 1) % songs.length;
  loadTrack(current);
  audio.play();
};

audio.ontimeupdate = () => {
  if (audio.duration) {
    seekbar.max = audio.duration;
    seekbar.value = audio.currentTime;
  }
};

seekbar.oninput = () => {
  audio.currentTime = seekbar.value;
};

audio.onended = () => {
  gif.style.display = "none";
  nextBtn.click();
};

// Start with first track loaded but not playing
loadTrack(0);
