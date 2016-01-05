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