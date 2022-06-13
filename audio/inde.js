const player = document.querySelector('.play-list'); //Плеер
const audio = document.querySelector('.audio'); //Аудио
const play = document.querySelector('.play-btn'); // Кнопка
const ProgressContainer = document.querySelector('.ProgressContainer'); //Прогрес бар
const Progress = document.querySelector('.Progress'); //Прогрес бар (Полоса)


function playSong(){
   play.classList.add('playsong')
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
   Progress.style.width = `${progressProcent}%`
 }
 audio.addEventListener('timeupdate', updateProgress)