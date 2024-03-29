let theme = "numbers";
let players = 1;
let size = "4x4";

function setTheme(e) {
    let elements = document.querySelectorAll(".theme");

    elements.forEach((element) => {
        element.classList.remove("active");
    });

    document.getElementById(e.target.id).classList.add("active");

    theme = e.target.id;
}

function setPlayer(e) {
    let elements = document.querySelectorAll(".players");

    elements.forEach((element) => {
        element.classList.remove("active");
    });
    document.getElementById(e.target.id).classList.add("active");

    players = e.target.id;
}

function setSize(e) {
    let elements = document.querySelectorAll('.size');

    elements.forEach((element) => {
        element.classList.remove("active");
    });
    document.getElementById(e.target.id).classList.add("active");

    size = e.target.id;
}

function startGame() {
    localStorage.setItem("theme", theme)
    localStorage.setItem("players", players);
    localStorage.setItem("turn", 0);
    localStorage.setItem("size", size[0]);

    location.href = "./game.html"
}

addEventListener("theme", "click", setTheme);
addEventListener("players", "click", setPlayer);
addEventListener("size", "click", setSize);