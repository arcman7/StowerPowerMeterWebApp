 // All calculations based off strong wifi connection, bad/low phone signal

var color,timeLeft;

function urgency(timeLeft){
    if (timeLeft < 30)
        return "Red";
    if (timeLeft < 50)
        return "Orange";
    if (timeLeft < 250)
        return "Yellow";
    if (timeLeft < 400)
        return "Green";
    if (timeLeft > 400)
        return "Blue";
}

function timeTable(batteryLevel){
    var table = {};
    table["Internet on Wifi"] = 5.333333;
    table["Talk Time"]        = 7.111110667;
    table['Video playback']   = 5.333333;
    table['YouTube']          = 3.555555333;
    table['Audio playback']   = 18.6666655;
    table['Reading']          = 6.222221833;
    table['2D gaming']        = 3.555555333;
    table['3D gaming']        = 2.6666665;
    table['Photo Taking']     = 1.777777667;
    table['Video Recording']  = 1.777777667;
    table['GPS Navigation']   = 0.8888888333;
    table['Facetime']         = 1.777777667;
    table['Flashlight']       = 0.8888888333;
    table['Standby']          = 118.2222148;

    var timeTable = table;
    for(key in timeTable){
        timeTable[key] = Math.floor(timeTable[key]*batteryLevel);
    }
    return timeTable;
}

function htmlTimeTable(app,timeLeft){
    var strVar="";
    strVar += "     <li class=\"list-group-item time-left-group\">";
    strVar += "          <img class=\"pull-left\" src=\"https:\/\/weighmytruck.com\/img\/icon-app.png\">";
    strVar += "          "+app;
    strVar += "          <strong class=\"pull-right\" style='color:"+urgency(timeLeft)+"'>"+timeLeft+" minutes<\/strong>";
    strVar += "     <\/li>";
    return strVar;
}

function buildTimeList(container){
   var table = timeTable(55); //arbitrarily chosing 85% battery level
   for(key in table){
     container.append(htmlTimeTable(key,table[key]));
   }
}

$(document).on('ready',function(){
    if($('.time-left-group').length > 0){
        container = $('.time-left-group');
        container.html('');
        buildTimeList(container);
    }
});
