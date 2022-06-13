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


 const player1 = document.querySelector('.play-list1'); //Плеер
const audio1 = document.querySelector('.audio1'); //Аудио
const play1 = document.querySelector('.play-btn1'); // Кнопка
const ProgressContainer1 = document.querySelector('.ProgressContainer1'); //Прогрес бар
const Progress1 = document.querySelector('.Progress1'); //Прогрес бар (Полоса)


function playSong1(){
   play1.classList.add('playsong1')
   audio.play()
 }
 
 function pauseSong1(){
   play1.classList.remove('playsong1')
   audio.pause()
 }
 
 play1.addEventListener('click', () => {
   const isPlaying = play1.classList.contains('playsong1')
   if(isPlaying){
     pauseSong1()
   }else{
     playSong1()
   }
 })
 
 function updateProgress1(e) {
   const {duration, currentTime} = (e.srcElement)
   const progressProcent = (currentTime / duration ) * 100
   Progress1.style.width = `${progressProcent}%`
 }
 audio1.addEventListener('timeupdate', updateProgress)