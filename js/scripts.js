let visited = localStorage.getItem("visited");

window.onload = function () {

    if (visited !== "yes") {
        localStorage.setItem("visited", "yes");
    }

};

function toggleVisibility(target, state) {

    document.getElementById(target).style.visibility = state;

}