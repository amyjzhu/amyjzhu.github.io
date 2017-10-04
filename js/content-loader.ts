import * as path from "path";
import {moveBackgroundPiece} from "./background-loader";

var $ = require("jquery");


export default function invoke() {
    $(document).ready(function () {

        loadHomeElements();
        resizeNavbarPadding();
        resizeNavbarWidth();

        animateBackground();

      //  readyNavbar();
       // addLinksToTabs();

        //scrollChanger();
    });

}


// === refactor or remove

$('#hobbies').click(function(event) {
    $('html, body').animate({
        scrollTop: $("#hobbies-content").offset().top
    }, 2000);


    // This will prevent the default action of the anchor
    event.preventDefault();

    // Failing the above, you could use this, however the above is recommended
    return false;

});



///====



/*
function addLinksToTabs() {
    addLink("#about", "stuff.txt");
    addLink("#hobbies", "hobbies.txt");
}
*/



function resizeNavbarPadding() {
    $("#nav-menu").resize(function () {
        $('.header-padding').height($("#nav-menu").height() + 40);
    });

    if ($("#nav-menu").height() > $('.header-padding').height()) $('.header-padding').height($("#nav-menu").height() + 40);

}

function resizeNavbarWidth() {
    $("#navElement").width($(".floater-box").width());

    let menu : any = document.getElementById("navElement");
    if (menu) {
        menu.style.maxwidth = (document.getElementById("content-box") || menu).style.width;
    }
}

function animateBackground() {
    moveBackgroundPiece("cliff");
    setTimeout(() => {
        moveBackgroundPiece("clouds");
        setTimeout(() => {
        moveBackgroundPiece("hill");
        }, 500)
    }, 500);
}


// want my content to scroll into frame

// check that element height plus top height is inside scroll, else fade load new content



function scrollChanger() {
    let sections = $("section");
    let nav = $("nav");
    let navHeight = nav.outerHeight(); // also account for padding piece...

    $(window).on("scroll", (that : any) => {
        let cursorPos = $(that).scrollTop();

        sections.each((self : any) => {
            //   let self : any = this;
            let top = $(self).offset().top - navHeight;

            let bottom = top + $(self).outerHeight();

            if (cursorPos >= top && cursorPos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(self).addClass('active');
                nav.find('a[href="#' + $(self).attr('id') + '"]').addClass('active');
            }
        });
    });
}


// ======================



function readyNavbar() {
    $('ul li').each(function(i : any, element : any) {
        element.onClick = () => { deactivatePills(element.id) };
    });
}

function loadContent(element : any) {
    $("#content-box").html = "whoa!";
}

function deactivatePills(id : string) {
    $('ul li').each(function(i : any, element: any) {
        if (element.id === id) {
            element.classList.toggle("active", "");
        }

        loadContent(element);
    })

}

/*

function addLink(element : string, fileName : string) {
    $(element).click(function() {
        $("#element" + "-content").load(path.resolve(__dirname, "../assets/" + fileName));
        console.log("Ahah");
    });
}
*/

function loadHomeElements() {
    $(".floater-box").click(function() {
        $("#contact-content").load(path.join(__dirname, "../assets/home.txt"));
    })
}
