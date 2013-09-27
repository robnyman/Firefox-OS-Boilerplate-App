(function () {
    var appCache = window.applicationCache;
    if (appCache) {
        appCache.addEventListener("updateready", function() {
            if (confirm("The app has been updated. Do you want to download the latest files? \nOtherwise they will be updated at the next reload.")) {
                location.reload(true);
            }
        });

        var displayStatus = document.querySelector("#online-status");
        if (displayStatus) {
            // Using this, since navigator.onLine is very inconcistent and unreliable
            appCache.addEventListener("error", function() {
                displayStatus.className = "offline";
                displayStatus.title = "Offline";
            });
        }
    }
})();