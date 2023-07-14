
/**
 * Seccion que muestra el div indicado y oculta los demas divs
 * @param {String} section : seccion que va a aparecer
 */

function showSection(section) {
    var sections = document.getElementsByClassName('section');

    for (var i = 0; i < sections.length; i++) {
        sections[i].hidden = true;
    }
    document.getElementById(section).hidden = false;
}

