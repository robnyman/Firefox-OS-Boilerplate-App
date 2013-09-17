// Install app
if (navigator.mozApps) {
    var checkIfInstalled = navigator.mozApps.getSelf();
    checkIfInstalled.onsuccess = function () {
        if (checkIfInstalled.result) {
            // Already installed
            var installationInstructions = document.querySelector("#installation-instructions");
            if (installationInstructions) {
                installationInstructions.style.display = "none";
            }
        }
        else {
            var install = document.querySelector("#install"),
                manifestURL = location.href.substring(0, location.href.lastIndexOf("/")) + "/manifest.webapp";
            install.className = "show-install";
            install.onclick = function () {
                var installApp = navigator.mozApps.install(manifestURL);
                installApp.onsuccess = function(data) {
                    install.style.display = "none";
                };
                installApp.onerror = function() {
                    alert("Install failed\n\n:" + installApp.error.name);
                };
            };
        }
    };
}
else {
    console.log("Open Web Apps not supported");
}

// Reload content
var reload = document.querySelector("#reload");
if (reload) {
    reload.onclick = function () {
        location.reload(true);
    };
}

// Log visibility of the app
var logVisibility = document.querySelector("#log-visibility"),
    logVisibilityDisplay = document.querySelector("#log-visibility-display");
if (logVisibility && logVisibilityDisplay) {
    logVisibility.onclick = function () {
        logVisibilityDisplay.style.display = "block";
        logVisibilityDisplay.innerHTML = "I have focus!<br>"
        document.addEventListener("visibilitychange", function () {
            if (document.hidden) {
                console.log("Firefox OS Boilerplate App is hidden");
                logVisibilityDisplay.innerHTML += "Now I'm in the background<br>";
            }
            else {
                console.log("Firefox OS Boilerplate App has focus");
                logVisibilityDisplay.innerHTML += "I have focus!<br>";
            }
        });
    };
}