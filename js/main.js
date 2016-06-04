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
