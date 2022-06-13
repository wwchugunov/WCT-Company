


$(".main").onepage_scroll({
  animationTime:  100,
  loop:  true,
});

$('.wrap-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  arrows: false
});
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








 

 // 1
 const player1 = document.querySelector('.play-list1'); //Плеер
 const audio1 = document.querySelector('.audio1'); //Аудио
 const play1 = document.querySelector('.play-btn1'); // Кнопка
 const ProgressContainer1 = document.querySelector('.ProgressContainer1'); //Прогрес бар
 const Progress1 = document.querySelector('.Progress1'); //Прогрес бар (Полоса)
 
 
 function playSong1(){
    play1.classList.add('playsong1')
    audio1.play()
  }
  
  function pauseSong1(){
    play1.classList.remove('playsong1')
    audio1.pause()
  }
  
  play1.addEventListener('click', () => {
    const isPlaying1 = play1.classList.contains('playsong1')
    if(isPlaying1){
      pauseSong1()
    }else{
      playSong1()
    }
  })
  
  function updateProgress1(e) {
    const {duration, currentTime} = (e.srcElement)
    const progressProcent1 = (currentTime / duration ) * 100
    Progress1.style.width = `${progressProcent1}%`
  }
  audio1.addEventListener('timeupdate', updateProgress1)
 
 // 1







  // 2
 const player2 = document.querySelector('.play-list2'); //Плеер
 const audio2 = document.querySelector('.audio2'); //Аудио
 const play2 = document.querySelector('.play-btn2'); // Кнопка
 const ProgressContainer2 = document.querySelector('.ProgressContainer2'); //Прогрес бар
 const Progress2 = document.querySelector('.Progress2'); //Прогрес бар (Полоса)
 
 
 function playSong2(){
    play2.classList.add('playsong2')
    audio2.play()
  }
  
  function pauseSong2(){
    play2.classList.remove('playsong2')
    audio2.pause()
  }
  
  play2.addEventListener('click', () => {
    const isPlaying2 = play2.classList.contains('playsong2')
    if(isPlaying2){
      pauseSong2()
    }else{
      playSong2()
    }
  })
  
  function updateProgress2(e) {
    const {duration, currentTime} = (e.srcElement)
    const progressProcent2 = (currentTime / duration ) * 100
    Progress2.style.width = `${progressProcent2}%`
  }
  audio2.addEventListener('timeupdate', updateProgress2)
 
 // 2

   // 3
   const player3 = document.querySelector('.play-list3'); //Плеер
   const audio3 = document.querySelector('.audio3'); //Аудио
   const play3 = document.querySelector('.play-btn3'); // Кнопка
   const ProgressContainer3 = document.querySelector('.ProgressContainer3'); //Прогрес бар
   const Progress3 = document.querySelector('.Progress3'); //Прогрес бар (Полоса)
   
   
   function playSong3(){
      play3.classList.add('playsong3')
      audio3.play()
    }
    
    function pauseSong3(){
      play3.classList.remove('playsong3')
      audio3.pause()
    }
    
    play3.addEventListener('click', () => {
      const isPlaying3 = play3.classList.contains('playsong3')
      if(isPlaying3){
        pauseSong3()
      }else{
        playSong3()
      }
    })
    
    function updateProgress3(e) {
      const {duration, currentTime} = (e.srcElement)
      const progressProcent3 = (currentTime / duration ) * 100
      Progress3.style.width = `${progressProcent3}%`
    }
    audio3.addEventListener('timeupdate', updateProgress3)
   
   // 3


