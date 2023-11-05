/******************************** History Video *********************************/

let video = document.querySelector("#video");
let videoTotalTime = document.querySelector(".total-time");
let videoCurrentTime = document.querySelector(".current-time");
let play = document.querySelector("#play");
let pause = document.querySelector("#pause");
let mute = document.querySelector("#mute");
let mutedFlag = false;
let timer;

function showVideoTotalTime()
{
    let minutes = Math.floor(video.duration / 60).toFixed(0);
    let seconds = (video.duration % 60).toFixed(0);

    videoTotalTime.textContent=minutes + ":" + seconds.padStart(2, '0');
}

function showVideoCurrentTime()
{
    let minutes = Math.floor(video.currentTime / 60).toFixed(0);
    let seconds = (video.currentTime % 60).toFixed(0);

    videoCurrentTime.textContent=minutes + ":" + seconds.padStart(2, '0');
}

function playVideo()
{
    video.play();
    timer = setInterval(() => { showVideoCurrentTime() }, 1000);
}

function pauseVideo()
{
    video.pause();
    clearInterval(timer);
}

function muteVideo()
{
    if (false === mutedFlag)
    {
        mute.innerHTML = "<img src=\"../assets/images/unmute.svg\" alt=\"Silenciar video\"></img>"
        mutedFlag = true;
    }
    else
    {
        mute.innerHTML = "<img src=\"../assets/images/mute.svg\" alt=\"Silenciar video\"></img>"
        mutedFlag = false;
    }
    video.muted = mutedFlag;
}

window.addEventListener('load',showVideoTotalTime);
play.addEventListener('click',playVideo);
pause.addEventListener('click',pauseVideo);
mute.addEventListener('click',muteVideo);
