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


function afTable(){
    var table = {};
    table["Internet on Wifi"] = "fa fa-wifi";
    table["Talk Time"]        = "fa fa-phone";
    table['Video playback']   = "fa fa-play";
    table['YouTube']          = "fa fa-play-circle";
    table['Audio playback']   = "fa fa-music";
    table['Reading']          = "fa fa-book";
    table['2D gaming']        = "fa fa-gamepad";
    table['3D gaming']        = "fa fa-gamepad";
    table['Photo Taking']     = "fa fa-camera";
    table['Video Recording']  = "fa fa-video-camera";
    table['GPS Navigation']   = "fa fa-location-arrow";
    table['Facetime']         = "fa fa-users";
    table['Flashlight']       = "fa fa-lightbulb-o";
    table['Standby']          = "fa fa-power-off";

    return table;
}

function htmlTimeTable(app,timeLeft){
   var iconTable = afTable();
   var iconClass = iconTable[app];
   var strVar="";
   strVar += "     <li class=\"list-group-item time-left-item\">";
   strVar += "          <i class='pull-left "+iconClass+"' ></i>";
   strVar += "          <strong class=\"pull-right\" style='color:"+urgency(timeLeft)+"'>"+timeLeft+" minutes<\/strong>";
   strVar += "     <\/li>";
   return strVar;
}

function htmlTimeTableHour(app,timeLeft,minutes){
   var iconTable = afTable();
   var iconClass = iconTable[app];
   var strVar="";
   strVar += "     <li class=\"list-group-item time-left-item\">";
   strVar += "          <i class='pull-left "+iconClass+"' ></i>";
   strVar += "          "+app;
   strVar += "          <strong class=\"pull-right\" style='color:"+urgency(minutes)+"'>"+timeLeft+" hours<\/strong>";
   strVar += "     <\/li>";
   return strVar;
}

$(document).on('ready',function(){
    if($('.time-left-group').length > 0){
        container = $('.time-left-group');
        container.html('');
        buildTimeList(container);
    }
});
