var SliderWidget = (function(){

    function updateFields(me){
        var slider = me.closest(".filter__slider"),
            from = slider.find(".filter__slider-input_from"),
            to = slider.find(".filter__slider-input_to");

        var values = me.slider("option", "values");
        from.val(values[0]);
        to.val(values[1]);
    }

    return {
        init: function(){
                $(".filter__slider-element").each(function() {
                    var me = $(this),
                        min = parseInt(me.data("slider-min")),
                        max = parseInt(me.data("slider-max"));

                    me.slider({
                      range: true,
                      min: min,
                      max: max,
                      values: [ min, max ],
                      slide: function() {
                          updateFields(me);
                      },
                      create: function(){
                          updateFields(me);
                      }
                    });
                    //$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
                    //  " - $" + $( "#slider-range" ).slider( "values", 1 ) );
                });
            }
    }
}());

var RatingWidget = (function(){

    function setStars(rating){
        var starsArray=[];

        for (var i =0; i < 5; ++i){
            var starClassName = "products__rating-stars-item";
            if (i < rating){
                starClassName += " products__rating-stars-item_filled";
            }

            var liStar = $("<li>",{
                class: starClassName
            });

            starsArray.push(liStar);
        }

        return starsArray;
    }

    function appendStarts(rating, parent){
        var ul = $("<ul>",{
            class: "products__rating-stars",
            html: setStars(rating)
        });

        var amount = $("<div>",{
            class: "products__rating-amount",
            text: rating
        });

        parent.append([ul, amount]);
    }

    return {
        init: function(){
             $(".products__rating").each(function() {
                 var me = $(this),
                     rating = parseInt(me.data("rating"));

                 appendStarts(rating, me);
             });
        }
    }
}());

var ViewWidget = (function(){

    var initClasses = "";
    var sortViewItemClass = ".sort__view-item";

    function changeState(me){

        var item = me.closest(sortViewItemClass),
            view = item.data("view"),
            itemList = $(".products__list"),
            modifier = "products__list_",
            viewStateClass = modifier + view;

        if (initClasses == ""){
            initClasses = itemList.attr("class");
        }

        changeActiveClass(me);
        itemList.attr("class", initClasses + " " + viewStateClass);
    }

    function changeActiveClass(me){
        me
            .closest(sortViewItemClass).addClass("active")
            .siblings().removeClass("active");
    }

    return {
        init: function(){
             $(".sort__view-link").on("click", function(e) {
                 e.preventDefault();

                 changeState($(this));
             });
        }
    }
}());

var Slideshow = (function(){

    function changeImage(me){
        var container = me.closest(".products__slideshow"),
            path = me.find("img").attr("src"),
            display = container.find(".products__slideshow-img");

        me
            .closest(".products__slideshow-item").addClass("active")
            .siblings().removeClass("active");

        display.fadeOut(function(){
            $(this).attr("src", path).fadeIn();
        });
    }

    return {
        init: function(){
             $(".products__slideshow-link").on("click", function(e) {
                 e.preventDefault();

                 var me = $(this);

                 changeImage(me);
             });
        }
    }
}());

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