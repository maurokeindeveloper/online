function createBar(bar_id) {
    for (i = 0; i <= 16; i++) {
        let div = document.createElement("div");
        div.className = "e";
        bar_id.appendChild(div);
    }
}

nticx = document.getElementById("nticx")
createBar(nticx);
literatura = document.getElementById("literatura")
createBar(literatura);
practicas = document.getElementById("practicas")
createBar(practicas);
html = document.getElementById("html")
createBar(html);
javascript = document.getElementById("javascript")
createBar(javascript);
python = document.getElementById("python")
createBar(python);

let conts = [-1, -1, -1, -1, -1, -1]
let isIn = false;

function skillsEffect() {
    var skills = document.getElementById("skills")
    var skill_distance = window.innerHeight - skills.getBoundingClientRect().top;
    if (skill_distance >= 300 && isIn == false) {
        isIn = true;
        const intervalNticx = setInterval(function () {
            renderBar(nticx, 16, 0, intervalNticx);
        }, 100);
        const intervalLiteratura = setInterval(function () {
            renderBar(literatura, 16, 1, intervalLiteratura);
        }, 100);
        const intervalPracticas = setInterval(function () {
            renderBar(practicas, 15, 2, intervalPracticas);
        }, 100);
        const intervalHtml = setInterval(function () {
            renderBar(html, 13, 3, intervalHtml);
        }, 100);
        const intervalJavascript = setInterval(function () {
            renderBar(javascript, 13, 4, intervalJavascript);
        }, 100);
        const intervalPython = setInterval(function () {
            renderBar(python, 13, 5, intervalPython);
        }, 100);
    }
}

function renderBar(bar_id, num, index, interval) {
    conts[index]++
    x = conts[index];
    if (x < num) {
        let elements = bar_id.getElementsByClassName("e");
        elements[x].style.backgroundColor = "#940253";
    } else {
        clearInterval(interval)
    }
}

window.onscroll = function () {
    skillsEffect();
}

//sidebar menu 
var visible_menu = false;
let menu = document.getElementById("nav");
function showHideMenu() {
    if (visible_menu == false) {
        menu.style.display = "block";
        visible_menu = true;
    }
    else {
        menu.style.display = "none";
        visible_menu = false;
    }
}

//hide menu once a choice was made 
let links = document.querySelectorAll("nav a");
for (var x = 0; 0 < links.length; x++) {
    links[x].onclick = function () {
        menu.style.display = "none";
        visible_menu = false;
    }
}