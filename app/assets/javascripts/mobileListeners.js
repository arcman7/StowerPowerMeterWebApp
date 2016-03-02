var locationArray = window.location.href.split('/');
var protocol      = locationArray[0];
var domain        = locationArray[2];
var route         = locationArray[3];
var pageOrder     = ['drainage','stats','store'];

$(document).on("pagecreate",function(){

  tapListener();

});//end document pagecreate

function tapListener(callback,divClass){
  $(".tap").on("tap",function(){
    //callback
    console.log("tap fired!");
  });

  if(divClass){
    $('.'+divClass).on("tap",function(){
      //callback
    console.log("tap fired!");

    })
  }
}

//moon stats sun
function leftSwipe(callback,divClass){
  var currentIndex = pageOrder.indexOf(route);
  $("body").on("swipeleft",function(){
    //alert("You swiped left!");
    console.log('you swiped left!')
    if(currentIndex !== 0){
        var nextUrl = protocol + '//' + domain + '/' + pageOrder[currentIndex-1];
        window.location.replace(nexUrl);
    }
  });
}

function rightSwipe(callback,divClass){
  var currentIndex = pageOrder.indexOf(route);
  $("body").on("swipeleft",function(){
    //alert("You swiped left!");
    console.log('you swiped right!')
    if(currentIndex !== 2){
        var nextUrl = protocol + '//' + domain + '/' + pageOrder[currentIndex+1];
        window.location.replace(nexUrl);
    }
  });
}
