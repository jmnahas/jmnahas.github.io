function oprimir(){
    colores = [3]
    colores[1]= Math.floor(Math.random()*16777215).toString(16);
    colores[2]= Math.floor(Math.random()*16777215).toString(16);
    colores[3]= Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("botonsaurio").style.color = "#" + colores[1]
}