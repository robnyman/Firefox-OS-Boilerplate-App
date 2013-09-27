// Install app
if (navigator.mozApps) {
    var checkIfInstalled = navigator.mozApps.getSelf();
    checkIfInstalled.addEventListener("success", function() {
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
            install.addEventListener("click", function() {
                var installApp = navigator.mozApps.install(manifestURL);
                installApp.addEventListener("success", function(data) {
                    install.style.display = "none";
                });
                installApp.addEventListener("error", function() {
                    alert("Install failed\n\n:" + installApp.error.name);
                });
            });
        }
    });
}
else {
    console.log("Open Web Apps not supported");
}

// Reload content
var reload = document.querySelector("#reload");
if (reload) {
    reload.addEventListener("click", function() {
        location.reload(true);
    });
}