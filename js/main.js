//  const playOne = document.querySelector('');
//  const playTwo = document.querySelector('');
//  const playTree = document.querySelector('');
//  const playFour = document.querySelector('');

$(".main").onepage_scroll({
  animationTime:  500,
  loop:  true,
});

$('.sliders').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  arrows: false
});




function playSong(){
  playOne.classList.add('playsong')
  audio.play()
}

function playSong(){
  playTwo.classList.add('playsong')
  audio.play()
}
function pauseSong(){
  play.classList.remove('playsong')
  audio.pause()
}

play.addEventListener('click', () => {
  const isPlaying = play.classList.contains('playsong')
  if(isPlaying){
    pauseSong()
  }else{
    playSong()
  }
})

function updateProgress(e) {
  const {duration, currentTime} = (e.srcElement)
  const progressProcent = (currentTime / duration ) * 100
  progress.style.width = `${progressProcent}%`
}
audio.addEventListener('timeupdate', updateProgress)



