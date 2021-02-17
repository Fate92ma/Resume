$(document).ready(function () { // Start Coding Here

    // Tabs

    $(".tabs li").click(function () {
        var tab = $(this).attr("tab");
        $("#about , #resume, #works, #posts, #contact").hide();
        $("#" + tab).fadeIn();
    });

    $("[tab]").on("click", function () {
        $('[tab]').removeClass('active1');
        $(this).addClass('active1');
    });

}); // End Code