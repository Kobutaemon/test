$("#submitButton").click(function() {
    $(document).ready(function(){
        $("#slider").bxSlider({
            infiniteLoop: false,
            auto: false
        });
      });
    $("#overlay-img").removeClass("d-none")
    $("#overlay-img").css("z-index", "999999")
})