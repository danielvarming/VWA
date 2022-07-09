// dropdown_menu() shows the dropdown menu if the user clicks MENU or the hamburger next to it.

var menu_displayed = false;

function dropdown_menu() {
    if (menu_displayed) {
        document.getElementById("dropdown_menu").style.display = "none";
        menu_displayed = false;
    }
    else {
        document.getElementById("dropdown_menu").style.display = "block";
        menu_displayed = true;
    }
}

//