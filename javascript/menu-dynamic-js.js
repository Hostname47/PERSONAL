$("#mobile-logo").on("mousedown", function() {
    $("#mobile-logo").css("color", $("#mobile-logo span").css("color"))
});

$("#mobile-logo").on("mouseup", function() {
    console.log("mouse up")
    $("#mobile-logo").css("color", "white");
});

$("#nav-button").click(function() {
    let navContainer = $("#mobile-nav");

    if(navContainer.css("max-height") == "0px") {
        console.log("test");
        navContainer.css("max-height", "500px")
    }
    else {
        navContainer.css("max-height", "0px")
    }
})