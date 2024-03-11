function callAlert(){
   window.alert("Hello world!");
}

function bigImg(x) {
    x.height = "250";
    x.width = "250";
}
  
  function normalImg(x) {
    x.height = "200";
    x.width = "200";
}

function FocusFunction(x) {
  x.style.backgroundColor = "yellow";
}

function FocusFunctionReset(x) {
  x.style.backgroundColor="white";
}

function menuFunction() {
    var dropdown = document.getElementById("myDropdown");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

$(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideToggle("slow");
    });
});


$(document).ready(function(){
    $("#cater1, #cater2, #cater3").click(function(){
        $(this).animate({
            opacity: 1.0,
            width: "+=10px", 
            height: "+=10px" 
        }).siblings().animate({
            opacity: 0.25,
            width: "-=10px", 
            height: "-=10px" 
        });
    });
    $(document).click(function(event) {
        if (!$(event.target).closest('#cater1, #cater2, #cater3').length) {
            $("#cater1, #cater2, #cater3").animate({
                opacity: 1.0,
                width: "initial",
                height: "initial" 
            });
        }
    });
});
