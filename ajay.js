console.log("Welcome to DJ YADAV");

// Initialize the Variables
let songIndex = 30;
let audioElement = new Audio('31.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
   
    {songName: "Solid Body ", filePath: "songs./31.mp3", coverPath: "covers./31.jpeg"},
    {songName: "Moka_Soka", filePath: "songs./32.mp3", coverPath: "covers./32.jpeg"},
    {songName: "Moto", filePath: "songs./12.mp3", coverPath: "covers./33.jpeg"},
    {songName: "Suthri Si Chori", filePath: "songs./13s./14.mp3", coverPath: "covers./34.jpeg"},
    {songName: "Husband_Bawla", filePath: "songs./15.mp3", coverPath: "covers./35.jpeg"},
    {songName: "Bhang_Ka_Barota", filePath: "songs./17.mp3", coverPath: "covers./36.jpeg"},
    {songName: "Soldier", filePath: "songs./16.mp3", coverPath: "covers./37.jpeg"},
    {songName: "Tik_Tok", filePath: "songs./18.mp3", coverPath: "covers./38.jpeg"},
    {songName: "Uncle", filePath: "songs./19.mp3", coverPath: "covers./39.jpeg"},
    {songName: "Love_You_Moto", filePath: "songs./20.mp3", coverPath: "covers./40.jpeg"},
    {songName: "Kamar_Teri_Left_Right_Halle", filePath: "songs./21.mp3", coverPath: "covers./41.jpeg"},
    {songName: "Bahu_Kale_K", filePath: "songs./22.mp3", coverPath: "covers./42.jpeg"},
    {songName: "Fauji", filePath: "songs./23.mp3", coverPath: "covers./43.jpeg"},
    {songName: "Bhabhi", filePath: "songs./24.mp3", coverPath: "covers./44.jpeg"},
    {songName: "Kaliya_Murad", filePath: "songs./25.mp3", coverPath: "covers./45.jpeg"},
    {songName: "Mehnga_Perfume", filePath: "songs./26.mp3", coverPath: "covers./46.jpeg"},
    {songName: "Olha Mein Patola", filePath: "songs./27.mp3", coverPath: "covers./47.jpeg"},
    {songName: "Lamba Lamba Ghunghat - Ajay Hooda", filePath: "songs./28.mp3", coverPath: "covers./48.jpeg"},
    {songName: "Age Gap - Ajay Hooda", filePath: "songs./29.mp3", coverPath: "covers./49.jpeg"},
    {songName: "Patange - Ajay Hooda ", filePath: "songs./30.mp3", coverPath: "covers./50.jpeg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id)-10;
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=29){
        songIndex = 10
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=10){
        songIndex = 10
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})