(function () {
    /*
        WebActivities:

            configure
            costcontrol/balance
            costcontrol/data_usage
            costcontrol/telephony
            dial
            new (type: "websms/sms", "webcontacts/contact") (add-contact, compose-mail?)
            open
            pick (type: "image/png" etc)
            record (capture?)
            save-bookmark
            share
            test
            view (type: "url" etc. "text/html"?)
    */

    // WebActivities
    var pickImage = document.querySelector("#pick-image");
    if (pickImage) { 
        pickImage.onclick = function () {
            var pick = new MozActivity({
                name: "pick",
                data: {
                    type: ["image/png", "image/jpg", "image/jpeg"]
                 }
            });

            pick.onsuccess = function () { 
                var img = document.createElement("img");
                img.src = window.URL.createObjectURL(this.result.blob);
                var imagePresenter = document.querySelector("#image-presenter");
                imagePresenter.appendChild(img);
                imagePresenter.style.display = "block";
            };

            pick.onerror = function () { 
                alert("Can't view the image!");
            };
        }
    }

    var pickAnything = document.querySelector("#pick-anything");
    if (pickAnything) { 
        pickAnything.onclick = function () {
             var pickAny = new MozActivity({
                 name: "pick"
             });

            pickAny.onsuccess = function () { 
                var img = document.createElement("img");
                if (this.result.blob.type.indexOf("image") != -1) {
                    img.src = window.URL.createObjectURL(this.result.blob);
                    document.querySelector("#image-presenter").appendChild(img);
                }
            };

            pickAny.onerror = function () { 
                console.log("An error occurred");
            };
        }
    }

    var record = document.querySelector("#record");
    if (record) { 
        record.onclick = function () {
            var rec = new MozActivity({
                name: "record" // Possibly capture in future versions
            });

            rec.onsuccess = function () { 
                var img = document.createElement("img");
                img.src = window.URL.createObjectURL(this.result.blob);
                var imagePresenter = document.querySelector("#image-presenter");
                imagePresenter.appendChild(img);
                imagePresenter.style.display = "block";
            };

            rec.onerror = function () { 
                alert("No taken picture returned");
            };
        }
    }

    var dial = document.querySelector("#dial");
    if (dial) { 
        dial.onclick = function () {
            var call = new MozActivity({
                name: "dial",
                data: {
                    number: "+46777888999"
                }
            });
        }
    }

    var sendSMS = document.querySelector("#send-sms");
    if (sendSMS) { 
        sendSMS.onclick = function () {
            var sms = new MozActivity({
                name: "new", // Possible compose-sms in future versions
                data: {
                    type: "websms/sms",
                    number: "+46777888999"
                }
            });
        }
    }

    var addContact = document.querySelector("#add-contact");
    if (addContact) { 
        addContact.onclick = function () {
            var newContact = new MozActivity({
                name: "new", // Possibly add-contact in future versions
                data: {
                    type: "webcontacts/contact",
                    params: { // Will possibly move to be direct properties under "data"
                        giveName: "Robert",
                        familyName: "Nyman",
                        tel: "+44789",
                        email: "robert@mozilla.com",
                        address: "San Francisco",
                        note: "This is a note",
                        company: "Mozilla"
                    }
                }
            });
        }
    }

    var share = document.querySelector("#share");
    if (share) { 
        share.onclick = function () {
            var sharing = new MozActivity({
                name: "share",
                data: {
                    //type: "url", // Possibly text/html in future versions,
                    number: 1,
                    url: "http://robertnyman.com"
                }
            });
        }
    }

    var shareImage = document.querySelector("#share-image"),
        imgToShare = document.querySelector("#image-to-share");
    if (shareImage && imgToShare) {
        shareImage.onclick = function () {
            var blob = new Blob([imgToShare], {type: "text/png"});
            var sharingImage = new MozActivity({
                name: "share",
                data: {
                    type: "image/*",
                    number: 1,
                    blobs: [blob]
                }
            });
        }
    }

    var viewURL = document.querySelector("#view-url");
    if (viewURL) { 
        viewURL.onclick = function () {
            var openURL = new MozActivity({
                name: "view",
                data: {
                    type: "url", // Possibly text/html in future versions
                    url: "http://robertnyman.com"
                }
            });
        }
    }

    var composeEmail = document.querySelector("#compose-email");
    if (composeEmail) { 
        composeEmail.onclick = function () {
            var createEmail = new MozActivity({
                name: "new", // Possibly compose-mail in future versions
                data: {
                    type : "mail",
                    url: "mailto:example@example.org"
                }
            });
        }
    }

    var saveBookmark = document.querySelector("#save-bookmark");
    if (saveBookmark) { 
        saveBookmark.onclick = function () {
            var savingBookmark = new MozActivity({
                name: "save-bookmark",
                data: {
                    type: "url",
                    url: "http://robertnyman.com",
                    name: "Robert's talk",
                    icon: "http://robertnyman.com/favicon.png"
                 }
            });
        }
    }

    // Notifications
    var addNotification = document.querySelector("#add-notification");
    if (addNotification) {
        addNotification.onclick = function () {
            var notification = navigator.mozNotification.createNotification(
                "See this", 
                "This is a notification"
            );
             notification.show();
        };
    }

    // Lock orientation
    var lockOrientation = document.querySelector("#lock-orientation");
    if (lockOrientation) {
        lockOrientation.onclick = function () {
            /*
                Possible values:
                    "landscape", 
                    "portrait"
                    "landscape-primary"
                    "landscape-secondary"
                    "portrait-primary"
                    "portrait-secondary" 
            */
            var portraitLock = screen.mozLockOrientation("portrait");
            if (portraitLock) {
                alert("Orientation locked to portrait");
            }
        };
    }

    // Vibration
    var vibrate = document.querySelector("#vibrate");
    if (vibrate) {
        vibrate.onclick = function () {
            var vibrating =  navigator.vibrate(2000);
            /*
                Possible values:
                    On/off pattern:
                     navigator.vibrate([200, 100, 200, 100]);
                    Turn off vibration
                     navigator.vibrate(0);
            */
        };
    }

    // Check connection
    var checkConnection = document.querySelector("#check-connection"),
        connectionDisplay = document.querySelector("#connection-display");

    if (checkConnection && connectionDisplay) {
        checkConnection.onclick = function () {
            var connection = window.navigator.mozConnection,
                online = "<strong>Connected:</strong> " + (connection.bandwidth),
                metered = "<strong>Metered:</strong> " + connection.metered; 

            connectionDisplay.innerHTML = "<h4>Result from Check connection</h4>" + online + "<br>" + metered;
            connectionDisplay.style.display = "block";
        };
    }

    // Check battery
    var checkBattery = document.querySelector("#check-battery"),
        batteryDisplay = document.querySelector("#battery-display");
    if (checkBattery && batteryDisplay) {
        checkBattery.onclick = function () {
            var battery = navigator.battery,
                batteryLevel = Math.round(battery.level * 100) + "%",
                charging = battery.charging,
                chargingTime = parseInt(battery.chargingTime / 60, 10),
                dischargingTime = parseInt(battery.dischargingTime / 60, 10),
                batteryInfo;

            batteryInfo = "<h4>Result from Check battery</h4><strong>Battery level:</strong> " + batteryLevel + "<br>";
            batteryInfo += "<strong>Battery charging:</strong> " + charging + "<br>";
            batteryInfo += "<strong>Battery charging time:</strong> " + chargingTime + "<br>";
            batteryInfo += "<strong>Battery discharging time:</strong> " + dischargingTime;

            batteryDisplay.innerHTML = batteryInfo;
            batteryDisplay.style.display = "block";
        };
    }

    // Geolocation
    var geolocation = document.querySelector("#geolocation"),
        geolocationDisplay = document.querySelector("#geolocation-display");
    if (geolocation && geolocationDisplay) {
        geolocation.onclick = function () {
            navigator.geolocation.getCurrentPosition(function (position) {
                geolocationDisplay.innerHTML = "<strong>Latitude:</strong> " + position.coords.latitude + ", <strong>Longitude:</strong> " + position.coords.longitude;
                geolocationDisplay.style.display = "block";
            },
            function (position) {
                geolocationDisplay.innerHTML = "Failed to get your current location";
                geolocationDisplay.style.display = "block";
            });
        };
    }

    // Ambient light
    var ambientLight = document.querySelector("#ambient-light"),
        ambientLightDisplay = document.querySelector("#ambient-light-display");
    if (ambientLight && ambientLightDisplay) {
        ambientLight.onclick = function () {
            ambientLightDisplay.style.display = "block";
            window.ondevicelight = function (event) {
                // Read out the lux value
                var lux = "<strong>Ambient light: </strong>" + event.value + " lux";
                ambientLightDisplay.innerHTML = lux;
            };
        };
    }

    // Proximity
    var proximity = document.querySelector("#proximity"),
        proximityDisplay = document.querySelector("#proximity-display");
    if (proximity && proximityDisplay) {
        proximity.onclick = function () {
            proximityDisplay.style.display = "block";
            window.ondeviceproximity = function (event) {
                // Check proximity, in centimeters
                var prox = "<strong>Proximity: </strong>" + event.value + " cm<br>";
                prox += "<strong>Min value supported: </strong>" + event.min + " cm<br>";
                prox += "<strong>Max value supported: </strong>" + event.max + " cm";
                proximityDisplay.innerHTML = prox;
            };
        };
    }

    // Device Orientation
    var deviceOrientation = document.querySelector('#device-orientation'),
        deviceOrientationDisplay = document.querySelector('#device-orientation-display');

    if (deviceOrientation && deviceOrientationDisplay) {
        deviceOrientation.onclick = function() {
            deviceOrientationDisplay.style.display = "block";
            window.ondeviceorientation = function (event) {
                var orientedTo = (event.beta > 45 && event.beta < 135) ? "top" : (event.beta < -45 && event.beta > -135) ? "bottom" : (event.gamma > 45) ? "right" : (event.gamma < -45) ? "left" : "flat";
                var orientation = "<strong>Absolute: </strong>" + event.absolute + "<br>"
                                + "<strong>Alpha: </strong>" + event.alpha + "<br>"
                                + "<strong>Beta: </strong>" + event.beta + "<br>"
                                + "<strong>Gamma: </strong>" + event.gamma + "<br>"
                                + "<strong>Device orientation: </strong>" + orientedTo;

                deviceOrientationDisplay.innerHTML = orientation 
            };
        }
    }

    // Cross domain XHR
    var crossDomainXHR = document.querySelector("#cross-domain-xhr"),
        crossDomainXHRDisplay = document.querySelector("#cross-domain-xhr-display");
    if (crossDomainXHR && crossDomainXHRDisplay) {
        crossDomainXHR.onclick = function () {
            var xhr = new XMLHttpRequest({mozSystem: true});
            xhr.open("GET", "http://robnyman.github.com/Firefox-OS-Boilerplate-App/README.md", true);
            xhr.onreadystatechange = function () {
                if (xhr.status === 200 && xhr.readyState === 4) {
                    crossDomainXHRDisplay.innerHTML = "<h4>Result from Cross-domain XHR</h4>" + xhr.response;
                    crossDomainXHRDisplay.style.display = "block";
                }
            }

            xhr.onerror = function () {
                crossDomainXHRDisplay.innerHTML = "<h4>Result from Cross-domain XHR</h4><p>Cross-domain XHR failed</p>";
                crossDomainXHRDisplay.style.display = "block";
            };
            xhr.send();
        };
    }

    // deviceStorage, pictures
    var deviceStoragePictures = document.querySelector("#device-storage-pictures"),
        deviceStoragePicturesDisplay = document.querySelector("#device-storage-pictures-display");
    if (deviceStoragePictures && deviceStoragePicturesDisplay) {
        deviceStoragePictures.onclick = function () {
            var deviceStorage = navigator.getDeviceStorage("pictures"),
                cursor = deviceStorage.enumerate(); 

            deviceStoragePicturesDisplay.innerHTML = "<h4>Result from deviceStorage - pictures</h4>";
             
              cursor.onsuccess = function() { 
                if (!cursor.result)  {
                    deviceStoragePicturesDisplay.innerHTML = "No files";
                }
                
                var file = cursor.result,
                    filePresentation; 

                filePresentation = "<strong>" + file.name + ":</strong> " + parseInt(file.size / 1024, 10) + "kb<br>";
                filePresentation += "<p><img src='" + window.URL.createObjectURL(file) + "' alt=''></p>";
                deviceStoragePicturesDisplay.innerHTML += filePresentation;

                deviceStoragePicturesDisplay.style.display = "block";
             };

              cursor.onerror = function () {
                console.log("Error");
                deviceStoragePicturesDisplay.innerHTML = "<h4>Result from deviceStorage - pictures</h4><p>deviceStorage failed</p>";
                deviceStoragePicturesDisplay.style.display = "block";
            };
        };
    }
})(); 
