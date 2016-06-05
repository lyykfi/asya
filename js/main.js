// Initialize app
var myApp = new Framework7();

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    material: true,
    swipePanel: 'left'
});

//myApp.openPanel("left");
$$(".panel-left a").on("click", function() {
    myApp.closePanel();
});

var toggler = document.getElementById("hesed_toggler");
var isTogle = false;

toggler.addEventListener("click", function() {
    isTogle = !isTogle;
    document.getElementById("hesed_items").classList.toggle("show", isTogle);
});

$$(document).on("click", "a.external", function(event) {
    myApp.popup('.popup-frame');
    event.stopPropagation();
    event.preventDefault();

    document.getElementById("frame").setAttribute("src", event.target.getAttribute("href"));
    document.getElementById("frame").setAttribute("height", parseInt(window.innerHeight, 10) - 100);
    return false;
});
