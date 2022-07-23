function tripfare(){
    var dist = parseInt(document.getElementById('distance').value)
    if(dist<=0){
        document.getElementById('distance').value = "Incorrect value";
    }

    var cap = parseInt(document.getElementById('capacity').value);
    if(cap<=0){
        document.getElementById('capacity').value = "Incorrect value";
    }
    if(dist>=1 && dist<=10){
        document.getElementById('rate').value = 1 * 100;
    }
    else if(dist>=10 && dist<=50){
        document.getElementById('rate').value = 1 * 300;
    }
    else if(dist>=50 && dist<=100){
        document.getElementById('rate').value = 1 * 500;
    }
    else if(dist>=100 && dist<=200){
        document.getElementById('rate').value = 1 * 1000;
    }
    else if(dist>=200 && dist<=300){
        document.getElementById('rate').value = 1 * 1200;
    }
    else if(dist>=300 && dist<=400){
        document.getElementById('rate').value = 1 * 1500;
    }
    else{
        document.getElementById('rate').value = "Bus can't go";
        document.getElementById('trip').value = cap * 0;
    }
    document.getElementById('trip').value = cap * document.getElementById('rate').value;

   
}
