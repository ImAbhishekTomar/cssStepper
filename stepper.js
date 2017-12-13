
$(function () {
    $(".mdl-stepper-step").hover(function () {
        $(".mdl-comment").hide();
        var comment = "";
        var data = $(this).attr("data-comment");
        if (typeof data !== typeof undefined && data !== false) {
            comment = data;
            $(".mdl-comment").show();
        } else {
            comment = "";
            $(".mdl-comment").hide();
        }
        $(".mdl-comment").html(comment);
    });
})
