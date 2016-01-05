var Slideshow = (function(){

    function changeImage(me){
        var container = me.closest(".products__slideshow"),
            path = me.find("img").attr("src"),
            display = container.find(".products__slideshow-img");

        me
            .closest(".products__slideshow-item").addClass("active")
            .siblings().removeClass("active");

        display.fadeOut(200, function(){
            $(this).attr("src", path).fadeIn(200);
        });
    }

    function setActiveColor(me){
        me
            .closest(".filter__colors-item").addClass("active")
            .siblings().removeClass("active");
    }

    return {
        init: function(){
             $(".products__slideshow-link").on("click", function(e) {
                 e.preventDefault();

                 var me = $(this);

                 changeImage(me);
             });

            $(".filter__colors-item").on("click", function(e) {
                 e.preventDefault();

                 var me = $(this);

                 setActiveColor(me);
             });
        }
    }
}());