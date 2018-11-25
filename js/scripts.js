let visited = localStorage.getItem("visited");
let launchNotificationSetting = localStorage.getItem("launchNotificationSetting");

let launchNotificationsText = document.getElementById("launchNotificationsText");
let launchNotificationButton = document.getElementById("launchNotificationsButton");

window.onload = function () {

    if (visited !== "yes") {
        localStorage.setItem("visited", "yes");
    }

};

function toggleVisibility(target, state) {

    document.getElementById(target).style.visibility = state;

}

function notificationButtonClick() {

    if (launchNotificationButton.innerHTML === "Enable notifications") {

        console.log("Launch notifications enabled by user");

        new window.Notification('Notifications enabled', {

            body: 'You\'ll get a notification when I launch the site',
            icon: 'img/icons/notifications/leonenco.png'

        });

        OneSignal.push(() => {

            OneSignal.registerForPushNotifications();
            OneSignal.setSubscription(true);

        });

        launchNotificationsText.classList.add("fadeOut");
        launchNotificationButton.classList.add("fadeOut");

        setTimeout(function () {

            launchNotificationsText.innerHTML = "To not be notified when I launch the site,\n" + "<br>\n" + "use the button below";
            localStorage.setItem("launchNotificationSetting", "enabled");
            launchNotificationButton.innerHTML = "Disable notifications";

            setTimeout(function () {

                launchNotificationsText.classList.remove("fadeOut");
                launchNotificationButton.classList.remove("fadeOut");

                launchNotificationsText.classList.add("fadeIn");
                launchNotificationButton.classList.add("fadeIn");

                setTimeout(function () {

                    launchNotificationsText.classList.remove("fadeIn");
                    launchNotificationButton.classList.remove("fadeIn");

                }, 500);

            }, 5);

        }, 500);

    } else if (launchNotificationButton.innerHTML === "Disable notifications") {

        console.log("Launch notifications disabled by user");

        new window.Notification('Notifications disabled', {

            body: 'You won\'t get a notification when I launch the site',
            icon: 'img/icons/notifications/leonenco.png'

        });

        OneSignal.push(() => {

            OneSignal.setSubscription(false);

        });

        launchNotificationsText.classList.add("fadeOut");
        launchNotificationButton.classList.add("fadeOut");

        setTimeout(function () {

            launchNotificationsText.innerHTML = "To be notified when I launch the site,\n" + "<br>\n" + "use the button below";
            localStorage.setItem("launchNotificationSetting", "disabled");
            launchNotificationButton.innerHTML = "Enable notifications";

            setTimeout(function () {

                launchNotificationsText.classList.remove("fadeOut");
                launchNotificationButton.classList.remove("fadeOut");

                launchNotificationsText.classList.add("fadeIn");
                launchNotificationButton.classList.add("fadeIn");

                setTimeout(function () {

                    launchNotificationsText.classList.remove("fadeIn");
                    launchNotificationButton.classList.remove("fadeIn");

                }, 500);

            }, 5);

        }, 500);
    }

}