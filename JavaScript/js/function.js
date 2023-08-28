/*
document.getElementById('boton').onclick = function(){
    console.log("Capturamos el evento click");
    document.getElementById("demo").innerHTML = "Probando primer javascript";
}

document.addEventListener('click', function(){
    console.log("Hola mundo desde EventListener");
    document.getElementById("demo").innerHTML = "Probando primer event listenner";
});
*/

document.getElementById('boton').addEventListener('click', function(){
    console.log("Hola mundo desde EventListener");
    document.getElementById("demo").innerHTML = "Probando primer event listenner";
});

document.getElementById('boton_color').addEventListener('click', function(){
    document.body.style.backgroundColor = '#FF0000';
});

document.getElementById('boton_default').addEventListener('click', function(){
    document.body.style.backgroundColor = '#0000FF';
});

document.getElementById('boton_ocultar').addEventListener('click', function(){
    document.getElementById("demo").style.display = "none";
});

const collection = document.getElementsByClassName('prueba');
for(let i = 0; i < collection.length; i++){
    collection[i].style.backgroundColor = "green";
}
