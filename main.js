var timeShift = 0;


function changeValue(elementId, newValue){
    if(newValue < 10)
        newValue = "0" + newValue;
    document.getElementById(elementId).innerHTML = newValue;
}

function updateClock(){
    var date = new Date();

    changeValue("hours", date.getHours());
    changeValue("minutes", date.getMinutes() + timeShift);
    changeValue("seconds", date.getSeconds());

    if(date.getHours() == 0)
        setDate();

    setTimeout(updateClock, 1000);
}

function setDate(){
    var daysOfWeek = new Array("neděle", "pondělí", "úterý", "středa", "čtvrtek", "pátek", "sobota");
    var monthsOfYear = new Array("ledna", "února", "března", "dubna", "května", "června", "července", "srpna", "září", "října", "listopadu", "prosince");
    var date = new Date();

    var currentDate = "" + daysOfWeek[date.getDay()] + " " + date.getDate() + ". " + monthsOfYear[date.getMonth()] + " " + date.getFullYear();

    changeValue("date", currentDate)
}

setDate();
updateClock()