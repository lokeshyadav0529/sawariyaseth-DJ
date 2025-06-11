console.log("Welcome to MASOOM SHARMA Music Player");

// List of songs
let songs = [
    { songName: "Pistol Bole Gi", filePath: "songs/11.mp3", coverPath: "covers/11.jpeg" },
    { songName: "Danda Deniya", filePath: "songs/12.mp3", coverPath: "covers/12.jpeg" },
    { songName: "32 Ke Fire", filePath: "songs/13.mp3", coverPath: "covers/13.jpeg" },
    { songName: "Warning", filePath: "songs/14.mp3", coverPath: "covers/14.jpeg" },
    { songName: "1987", filePath: "songs/15.mp3", coverPath: "covers/15.jpeg" },
    { songName: "Moj", filePath: "songs/16.mp3", coverPath: "covers/16.jpeg" },
    { songName: "1800 Shooter", filePath: "songs/17.mp3", coverPath: "covers/17.jpeg" },
    { songName: "Sharp Shooter", filePath: "songs/18.mp3", coverPath: "covers/18.jpeg" },
    { songName: "60 Mukadme - Masoom Sharma", filePath: "songs/19.mp3", coverPath: "covers/19.jpeg" },
    { songName: "Marda Pe Case", filePath: "songs/20.mp3", coverPath: "covers/20.jpeg" },
    { songName: "Matak Matak", filePath: "songs/21.mp3", coverPath: "covers/21.jpeg" },
    { songName: "Bhirad Ladgi", filePath: "songs/22.mp3", coverPath: "covers/22.jpeg" },
    { songName: "Davai", filePath: "songs/23.mp3", coverPath: "covers/23.jpeg" },
    { songName: "Tuition Badmashi Kaa", filePath: "songs/24.mp3", coverPath: "covers/24.jpeg" },
    { songName: "Byah ke Lawenge - Masoom Sharma", filePath: "songs/25.mp3", coverPath: "covers/25.jpeg" },
    { songName: "Bateu Haryane Te - Masoom Sharma", filePath: "songs/26.mp3", coverPath: "covers/26.jpeg" },
    { songName: "Ram Ne Lootegi - Masoom Sharma", filePath: "songs/27.mp3", coverPath: "covers/27.jpeg" },
    { songName: "Baitha Balad Kade Laat Maar Ke Thaya Na Karte", filePath: "songs/28.mp3", coverPath: "covers/28.jpeg" },
    { songName: "Blender - Masoom Sharma", filePath: "songs/29.mp3", coverPath: "covers/29.jpeg" },
    { songName: "2 Khatole - Masoom Sharma", filePath: "songs/30.mp3", coverPath: "covers/30.jpeg" },
];

// Initialize
let songIndex = 10;
let audioElement = new Audio(songs[songIndex].filePath);
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

// Set song details on UI
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// Play/Pause Main Button
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});

// Progress Bar
audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

// Make all icons play again
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
};

// Song Item Play Button
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        let index = parseInt(e.target.id) - 10;
        makeAllPlays();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = songs[index].filePath;
        masterSongName.innerText = songs[index].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        songIndex = index;
    });
});

// Next
document.getElementById('next').addEventListener('click', () => {
    songIndex = (songIndex + 1) % songs.length;
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});

// Previous
document.getElementById('previous').addEventListener('click', () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});
