console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('0.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');


let songs = [
    {songName: "Avengers Endgame Theme", filePath: "0.mp3", coverPath: "Users/Aishik Das/Music/Avengers Endgame.jpeg"},
    {songName: "Spiderman No Way Home Theme", filePath: "1.mp3", coverPath: "Users/AishAishik Das/Music/No Way Home.jpg"},
    {songName: "Come and Get Your Love - Guardians", filePath: "2.mp3", coverPath: "Users/Aishik Das/Music/Guardians.jpeg"},
    {songName: "Blinding Lights - Ms Marvel", filePath: "3.mp3", coverPath: "Users/Aishik Das/Music/Ms Marvel.png"},
    {songName: "Run It - Shang Chi", filePath: "4.mp3", coverPath: "Users/Aishik Das/Music/Shang Chi.jpeg"},
    {songName: "Day N Nite - Moon Knight", filePath: "5.mp3", coverPath: "Users/Aishik Das/Music/Moon Knight.jpeg"},
    {songName: "Daredevil Theme", filePath: "6.mp3", coverPath: "Users/Aishik Das/Music/Daredevil.jpeg"},
    {songName: "Multiverse of Madness Theme", filePath: "7.mp3", coverPath: "Users/Aishik Das/Music/Doctor Strange.jpeg"}
]

audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{ 
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
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
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
        if(audioElement.paused || audioElement.currentTime<=0){
            audioElement.play();
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
            gif.style.opacity = 1;
        }
        else{ 
            audioElement.pause();
            masterPlay.classList.remove('fa-circle-pause');
            masterPlay.classList.add('fa-circle-play');
            gif.style.opacity = 0;
        }
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        audioElement.src = `${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
    })
})

Array.from(document.getElementsByClassName('songItemPause')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        console.log(e.target);
        makeAllPause();
        songIndex = parseInt(e.target.id);
        audioElement.src = `${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.pause();
    })
})


document.getElementById('next').addEventListener('click', ()=>{
    if (songIndex >= 7){ 
         songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    
})

document.getElementById('previous').addEventListener('click', ()=>{
    if (songIndex <= 0){ 
         songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    
})

