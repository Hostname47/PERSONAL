$("#mobile-logo").on("mousedown", function() {
    $("#mobile-logo").css("color", $("#mobile-logo span").css("color"))
});

$("#mobile-logo").on("mouseup", function() {
    console.log("mouse up")
    $("#mobile-logo").css("color", "white");
});