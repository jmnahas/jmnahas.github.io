
window.onload = function () {
    window.onscroll = function () {
        if(window.scrollY> 30){
            document.body.classList.add("sticky-header");
            console.log("Marselo")
          }else{
            document.body.classList.remove("sticky-header");
            console.log("Horacio")
          }
    };
    document.getElementById("botonsaurio").style.backgroundColor= "#" + colores[i]
  };
colores = [2]
colores[0]= Math.floor(Math.random()*16777215).toString(16);
colores[1]= Math.floor(Math.random()*16777215).toString(16);
colores[2]= Math.floor(Math.random()*16777215).toString(16);
i=0

window.onscroll = function() {myFunction()};

function myFunction() {
  if (window.pageYOffset > 0) {
    document.getElementById("myHeader").classList.add("sticky");
  } else {
    document.getElementById("myHeader").classList.remove("sticky");
  }
}
function oprimir(){
    i=i+1
    if (i==3) {
        i=0
    }
    document.getElementById("botonsaurio").style.backgroundColor = "#" + colores[i]
}