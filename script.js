
window.onload = function () {
    window.onscroll = function () {
        if(document.body.scrollTop > 30){
            document.getElementsByTagName("body").addClass("sticky-header");
            console.log("Marselo")
          }else{
            document.getElementsByTagName("body").removeClass("sticky-header");
            console.log("Horacio")
          }
    };
    document.getElementById("botonsaurio").style.backgroundColor= "#" + colores[i]
  };
colores = [2]
colores[0]= Math.floor(Math.random()*16777215).toString(16);
colores[1]= Math.floor(Math.random()*16777215).toString(16);
colores[2]= Math.floor(Math.random()*16777215).toString(16);


function oprimir(){
    i=i+1
    if (i==3) {
        i=0
    }
    document.getElementById("botonsaurio").style.backgroundColor = "#" + colores[i]
}