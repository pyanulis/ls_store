$(document).ready(function(){

    ViewWidget.init();

    Slideshow.init();

    Accordeon.init();

    if ($(".products__rating").length){
        RatingWidget.init();
    }

    var select = $(".sort__select-elem");
    if (select.length){
        select.select2({
            minimumResultsForSearch: Infinity
        });
    }

    if ($(".filter__slider-element").length){
        SliderWidget.init();
    }

    $(".filter__reset").on("click", function(e){
        e.preventDefault();

        var me = $(this),
            container = me.closest(".filter__item"),
            checkboxes = container.find("input:checkbox");

        checkboxes.each(function(){
            $(this).removeProp("checked");
        });
    });

    $(".attention__text").columnize({
        width: 500
    });
});