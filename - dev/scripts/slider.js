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