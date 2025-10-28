var timeShift = 0;

const alert = {
    warning: 1,
    error: 2,
    information: 3
}



function myAlert(message, typeOfAlert) {
    const panel = document.querySelector('.myAlertPanel');
    const alertDiv = document.createElement('div');
    alertDiv.classList.add('myAlert');

    switch (typeOfAlert) {
        case alert.warning:
            alertDiv.style.backgroundColor = '#f6a62dff';
            break;
        case alert.error:
            alertDiv.style.backgroundColor = '#f16156ff';
            break;
        case alert.information:
            alertDiv.style.backgroundColor = '#3996e2ff';
            break;
        default:
            alertDiv.style.backgroundColor = '#9E9E9E';
            break;
    }

    const p = document.createElement('p');
    p.textContent = message;
    alertDiv.appendChild(p);

    alertDiv.style.opacity = 0;
    alertDiv.style.transition = 'opacity 0.3s ease';

    panel.appendChild(alertDiv);

    
    requestAnimationFrame(() => {
        alertDiv.style.opacity = 1;
    });

    setTimeout(() => {
        alertDiv.style.opacity = 0;
        setTimeout(() => alertDiv.remove(), 300); // wait for fade-out
    }, 5000);
    
}


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

function updateTimeShift(){
    let input = Number.parseInt(document.getElementById("timeShiftInput").value);
    

    if(!Number.isInteger(input)){
        document.getElementById("settings").style.visibility="hidden";
        myAlert("Value in time shift isnt number", alert.error);
        return;
    }

    timeShift = input;
    myAlert("Time shift has been saved", alert.information)
    document.getElementById("settings").style.visibility="hidden";
}

function showSettings(){
    document.getElementById("settings").style.visibility="visible";
    console.log("Something happend")
}

setDate();
updateClock()