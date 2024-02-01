function getLottNumber(n){
    let array=[]
    for(let i=0; i<n; i++){
        let number;
        number=Math.ceil(Math.random()*35);
        while(array.includes(number)){
            number=Math.ceil(Math.random()*35);
        }
        array.push(number);
    }
    return array;
}
function getPowerBall(){
    return Math.ceil(Math.random()*20);
}
console.log("The Winning numbers is: ", getLottNumber(7));
console.log("The P'ball is: ", getPowerBall());

