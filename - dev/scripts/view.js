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