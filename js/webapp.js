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

var pickImage = document.querySelector("#pick-image");
if (pickImage) { 
    pickImage.onclick = function () {
         // alert(MozActivity);
         var activity = new MozActivity({
             name: "pick",
             data: {
                 type: ["image/png", "image/jpg", "image/jpeg"]
              }
         });

        activity.onsuccess = function () { 
            var img = document.createElement("img");
            img.src = window.URL.createObjectURL(this.result.blob);
            var imagePresenter = document.querySelector("#image-presenter");
            imagePresenter.appendChild(img);
            imagePresenter.style.display = "block";
        };

         activity.onerror = function () { 
            alert("Can't view the image!");
        };
    }
}

var pickAnything = document.querySelector("#pick-anything");
if (pickAnything) { 
    pickAnything.onclick = function () {
         // alert(MozActivity);
         var activity = new MozActivity({
             name: "pick"
         });

        activity.onsuccess = function () { 
            var img = document.createElement("img");
            if (this.result.blob.type.indexOf("image") != -1) {
                img.src = window.URL.createObjectURL(this.result.blob);
                document.querySelector("#image-presenter").appendChild(img);
            }
        };

         activity.onerror = function () { 
            console.log("An error occurred");
        };
    }
}

var dial = document.querySelector("#dial");
if (dial) { 
    dial.onclick = function () {
        var activity = new MozActivity({
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
        var activity = new MozActivity({
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
        var activity = new MozActivity({
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

var record = document.querySelector("#record");
if (record) { 
    record.onclick = function () {
        var activity = new MozActivity({
            name: "record" // Possibly capture in future versions
        });
    }
}

var share = document.querySelector("#share");
if (share) { 
    share.onclick = function () {
        var activity = new MozActivity({
            name: "share"
        });
    }
}

var viewURL = document.querySelector("#view-url");
if (viewURL) { 
    viewURL.onclick = function () {
        var activity = new MozActivity({
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
        var activity = new MozActivity({
            name: "new", // Possibly compose-mail in future versions
            data: {
                url: "mailto:example@example.org"
            }
        });
    }
}

var saveBookmark = document.querySelector("#save-bookmark");
if (saveBookmark) { 
    saveBookmark.onclick = function () {
        var activity = new MozActivity({
            name: "save-bookmark",
            data: {
                type: "url",
                url: "http://robertnyman.com"
             }
        });
    }
}

var reload = document.querySelector("#reload");
if (reload) { 
    reload.onclick = function () {
        location.reload(true);
    };
}