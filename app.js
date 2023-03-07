// function countdown(num){
//    let timer= setInterval( function(){
//    num--;
//    if (num<=0){
//        clearInterval(timer);
//        console.log("DONE!");
//     }else{
//        console.log(num)
//     }
//    },1000)
// }

// countdown(6);

function randomGame (){
   let num;
   let counter=0;
   let timer=setInterval(function(){
       num = Math.random()
       counter++;
       if (num>0.75){
           clearInterval(timer);
           console.log("number of attempts: " + counter);
       }
   },1000)
}

randomGame();