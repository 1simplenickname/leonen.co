let visited = localStorage.getItem("visited");
let launchNotificationSetting = localStorage.getItem("launchNotificationSetting");

window.onload = function () {

    if (visited !== "yes") {
        localStorage.setItem("visited", "yes");
    }

};

function toggleVisibility(target, state) {

    document.getElementById(target).style.visibility = state;

}