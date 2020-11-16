//  Floating Labels
$(function () {
    var onClass = "on";
    var showClass = "show";

    $("input, select, textarea")
        .bind("checkval", function () {
            var label = $(this).prev("label");

            if (this.value !== "") label.addClass(showClass);
            else label.removeClass(showClass);
        })
        .on("keyup", function () {
            $(this).trigger("checkval");
        })
        .on("focus", function () {
            $(this)
                .prev("label")
                .addClass(onClass);
        })
        .on("blur", function () {
            $(this)
                .prev("label")
                .removeClass(onClass);
        })
        .trigger("checkval");

    $("select")
        .on("change", function () {
            var $this = $(this);

            if ($this.val() == "") $this.addClass("watermark");
            else $this.removeClass("watermark");

            $this.trigger("checkval");
        })
        .change();
});

// Mmenu
document.addEventListener(
    "DOMContentLoaded", () => {
        const menu = new MmenuLight(
            document.querySelector("#headerNav"),
            "(max-width: 992px)"
        );

        const navigator = menu.navigation();
        const drawer = menu.offcanvas();

        document.querySelector("a[href='#headerNav']")
            .addEventListener("click", (evnt) => {
                evnt.preventDefault();
                drawer.open();
            });
    }
);

// Header animation
var offset = $("header").offset();
checkOffset();

$(window).scroll(function () {
    checkOffset();
});

function checkOffset() {
    if ($(document).scrollTop() > offset.top) {
        $('header').addClass('scrolling');
    } else {
        $('header').removeClass('scrolling');
    }
}


// loader
var loader = function () {
    setTimeout(function () {
        if ($("#ftco-loader").length > 0) {
            $("#ftco-loader").removeClass("show");
        }
    }, 1);
};
loader();