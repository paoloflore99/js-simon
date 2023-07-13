
//-----------------------------------
// setTimeout(function()  {
//     console.log("funziona/////")
// }, 3000);


// setInterval(function()  {
//     console.log("setInterval  si ripere ")
// }, 60000);

// //--------------------

// setTimeout(onTimeout, 2000)
// function onTimeout() {
//     console.log("vaaa ?")
    
// }



//---------pomeriggio--------------
// console.log("va");
// function generaNumero(num){
//     const array = [];
    
//     for(let i =1; i<=num; i++){
//         array.push(i)
//     }
//     return array
// }
// const array = generaNumero(100)
// for(let i = 0; i<array.lemgth; i++){
//     array[i]+=1
// }
// console.log(array)
//---------------------------------
//
// Da quante ore è composto un giorno? 24
// Da quanti minuti è composta un’ora? 60 
// Da quanti secondi è composto un minuto? 60
// Da quanti millisecondi è composto un secondo? 1000
// Quanti millisecondi mi separano da domani alle 9:30?  
// 1 ora e 3.600.000 millisecondi

const orarioAttuale = document.getElementById("ora")

//prima imposto la proprieda new date che prende lorario dal pc e poi si attivano tutti i getminuti secondi ore
let now = new Date();

orarioAttuale.innerHTML = now .getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

setInterval(function () {

    now = new Date();
    
    //li permette di ciclare le informazioni in base ai milli secondi che metti prims delle parentesi tonda
    //a ogni cambiamento si ricrea sempre html
    orarioAttuale.innerHTML = now .getHours() + ":" + now.getMinutes();
}, 100);





// function up(params) {
    
// }







// const difference = document.getElementById("taimer")


// const taimer = Target.getTime() - now.getTime();

// if (difference < 0 ){
//     countdownContiner.innerHTML + "tempo"
// }

// let msec = difference;
// const hh = Math.floor(msec / 1000 / 60)
// msec -= hh * 1000 * 60;
// const mm = Math.floor(msec / 1000 / 60)
// msec -= mm * 1000 * 60;

// countdownContiner.innerHTML = hh + ":" + mm;//palesemte copiato da florian



