
   document.querySelector('#silly-sausage').innerHTML =
     "<span style='font-size:20px; font-weight:bold; color:red;' onmouseover='this.style.color=getRandomColor()'>Tom is a silly sausage</span>";

     function getRandomColor(){
       let c= '#';
       let letters = '0123456789ABCDEF';

       for (let i = 0; i < 6; i++) {
           c += letters[Math.floor(Math.random() * 16)];
       }

       return c;
   }

<div id="silly-sausage"></div>