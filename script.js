 const yesBtn = document.getElementById('yesBtn');
 const noButton = document.getElementById('noBtn');
 const gifContainer = document.getElementById('gifContainer');
 const audio = document.getElementById('valentineAudio');
 

 noBtn.addEventListener('mouseover', function(e) {
     const maxX = window.innerWidth - this.offsetWidth;
     const maxY = window.innerHeight - this.offsetHeight;
     
     const newX = Math.random() * maxX;
     const newY = Math.random() * maxY;
     
     this.style.position = 'fixed';
     this.style.left = newX + 'px';
     this.style.top = newY + 'px';
 });
 

 yesBtn.addEventListener('click', function() {
     gifContainer.style.display = 'block';
     
     setTimeout(() => {
         gifContainer.style.opacity = '1';
     }, 4);
     
     audio.play();
     
     setTimeout(() => {
         gifContainer.style.opacity = '0';
         
         setTimeout(() => {
             gifContainer.style.display = 'none';
         }, 500);
     }, 2000);
 });