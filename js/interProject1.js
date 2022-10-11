function calculateDrinks() {
    var BACStorage = parseFloat(sessionStorage.getItem("BAC"));
    if (!BACStorage) BACStorage = 0.000;
    var BACToAdd=calculateBACPer();
    document.getElementById("BACInteger").value=BACToAdd;
    var currentBAC = parseFloat(sessionStorage.getItem("BAC"));
    BACStorage+=parseFloat(BACToAdd);
    document.getElementById("BAC").innerText=BACStorage.toFixed(3);
    sessionStorage.setItem("BAC",BACStorage);
    var BACStorage = sessionStorage.getItem("BAC");

    if (currentBAC > 0.08) {
        alert("You are over the legal BAC to drive. Please drink water, eat some food, and wait!")
    }

    addTime(BACToAdd);
}

function calculateBACPer() {
    var sex="";
    var sexRate=0; //<--DJ
    var sexes=document.getElementsByName("sex");

    for (i=0; i < sexes.length; i++) {
        if (sexes[i].checked) sex=sexes[i].value;
    }

    switch (sex) {
        case "m":
            sexRate=0.68;
        break;
        case "f":
            sexRate=0.55;
        break;
        default:
            sexRate=-1; //starting value, reassign in case they somehow untoggle one of the radio buttons
        break;
    }

    var alcoholInBeer=14; //average amount of alcohol in a 5% beer. this is the standard for most calculation charts in the US
    var weightInGrams=document.getElementById("weight").value * 453.592;
    var BACPerDrink=alcoholInBeer / (weightInGrams * sexRate) * 100;

    if (weightInGrams==0) {
        BACPerDrink="Weight not given";
    }

    else if (BACPerDrink < 0) {
        BACPerDrink="Selection of sex not made";
    }

    else {
        var BACInteger=BACPerDrink.toFixed(3);
    }

    return BACInteger;
}

function addTime(BACPerDrink) {
    //function called by the button. this increments and sets the new time. the countdown is handled by the interval timer still
    var hoursToAdd=BACPerDrink / 0.016;
    var timeToAdd=60 * 60 * 1000 * hoursToAdd;
    var currentTimer=new Date(document.getElementById("time").innerText).getTime();
    currentTimer=new Date(currentTimer + timeToAdd); //60 seconds/minute * 10 minutes * 1000ms/s
    document.getElementById("time").innerText=currentTimer;
}