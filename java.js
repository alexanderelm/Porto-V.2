var zIndex = 10;

function bringForward (id){
  zIndex++;
  $("#"+id  ).css('z-index', zIndex);
}

  $( "#window2").resizable();

  $( "#window, #window2, #popup, .kompetencer").draggable();

  $(document).ready(function(){
    $("#popup").css("display", "block");
  });

function CloseOpen(n){
  $("#"+n).toggle();
}

var TypedVal = 0;

function OpenWindow(n){
  zIndex++;
  $("#"+n).css('z-index', zIndex);
  $("#"+n).css("display", "block");
  if(n=="window" && TypedVal == 0){
    TypedVal = 1;
    var typed = new Typed('#cmd', {
      strings: ('cmd'),
      startDelay: 300,
      typeSpeed: 30,
    });
  }
}


function FullScreen() {
  if ((document.fullScreenElement && document.fullScreenElement !== null) ||
   (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if (document.documentElement.requestFullScreen) {
      document.documentElement.requestFullScreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullScreen) {
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
  }
}
