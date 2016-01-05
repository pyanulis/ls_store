var Accordeon = (function(){

    function openSection(me){
        var container = me.closest(".filter__item"),
            content = container.find(".filter__content"),
            other = me.closest(".filter").find(".filter__content");

        if(!container.hasClass("active")){
            other.slideUp().closest(".filter__item").removeClass("active");

            container.addClass("active");
            content.stop(true, true).slideDown();
        }else{
            container.removeClass("active");
            content.stop(true, true).slideUp();
        }
    }

    return {
        init: function(){
             $(".filter__title-link").on("click", function(e) {
                 e.preventDefault();

                 var me = $(this);

                 openSection(me);
             });
        }
    }
}());