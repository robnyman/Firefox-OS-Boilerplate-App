// Install app
var checkIfInstalled = navigator.mozApps.getSelf();
checkIfInstalled.onsuccess = function () {
    if (checkIfInstalled.result) {
    // Already installed
    }
    else {
        var install = document.querySelector("#install"),
            manifestURL = location.href.substring(0, location.href.lastIndexOf("/")) + "/manifest.webapp";
        install.className = "show";
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

// Reload content
var reload = document.querySelector("#reload");
if (reload) {
    reload.onclick = function () {
        location.reload(true);
    };
}