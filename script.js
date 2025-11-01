let playbtns = document.querySelectorAll('.play-btn');
let forwd=document.querySelectorAll('.fwd');
let img1=document.getElementById('img1')
let currentAudio=null;
let currentplayBtn=null;


playbtns.forEach(btn => {
    btn.addEventListener('click', function() {
        if (this.classList.contains('fa-play')) {
            this.classList.replace('fa-play', 'fa-pause');
           img1.style.opacity='1'
        } else {
            this.classList.replace('fa-pause', 'fa-play');
              img1.style.opacity='0'
        }
    });
});


forwd.forEach(btn =>{
    btn.addEventListener('click',function(){
        this.style.transition='all 0.1s ease-in-out';
        this.style.transform = 'scale(1.2)';

        setTimeout(() =>{
            this.style.transform = 'scale(1)';
        },200)
    })
})

function toggleAudio(audioId,imgid){
    let audio = document.getElementById(audioId);
  
    console.log(imge)
    if(audio.paused){
        audio.play()
        mainPlayBtn.classList.replace('fa-play', 'fa-pause');
       currentAudio = audio;
     
       
      
    }else{
        audio.pause();
        mainPlayBtn.classList.replace('fa-pause', 'fa-play');
        currentAudio = null;
    
       
    }
}


let progressBar = document.getElementById('bar');

document.querySelectorAll('audio').forEach(audio => {
    audio.addEventListener('timeupdate', () => {
        progressBar.value = (audio.currentTime / audio.duration) * 100;
        
    });

    progressBar.addEventListener('input', () => {
        audio.currentTime = (progressBar.value / 100) * audio.duration;
       
    });
});

let mainPlayBtn = document.getElementById('mainplay');
mainPlayBtn.addEventListener('click', function() {
    if (currentAudio) {
        toggleAudio(currentAudio.id, mainPlayBtn);
        playbtns.classList.replace('fa-play','fa-pause')
    }
});




