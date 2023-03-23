function changeText(){

    var textsArray = ["SIT 726","SIT 737", "SIT 719","SIT 725"];
    var number = getRandomNumberBetween(0,textsArray.length - 1);

    console.log("Index: ", number);

    document.getElementById("units").innerHTML = textsArray[number];

};

function getRandomNumberBetween(min,max){

    return Math.floor(Math.random()*(max-min+1)+min)
}