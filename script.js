var i=0
colores = [3]
    colores[1]= Math.floor(Math.random()*16777215).toString(16);
    colores[2]= Math.floor(Math.random()*16777215).toString(16);
    colores[3]= Math.floor(Math.random()*16777215).toString(16);
function oprimir(){
    i=i+1
    if (i==3) {
        i=0
    }
    document.getElementById("botonsaurio").style.backgroundColor = "#" + colores[i]
}