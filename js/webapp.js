(function () {

    // deviceStorage, pictures
    var deviceStoragePictures = document.querySelector("#device-storage-pictures"),
        deviceStoragePicturesDisplay = document.querySelector("#device-storage-pictures-display"),
        listAllImages = true,
        counter = 0;
    if (deviceStoragePictures && deviceStoragePicturesDisplay) {
        deviceStoragePictures.onclick = function () {
            var deviceStorage = navigator.getDeviceStorage("pictures"),
                cursor = deviceStorage.enumerate(); 

            deviceStoragePicturesDisplay.innerHTML = "<h4>Result from deviceStorage - pictures</h4>";
             
              cursor.onsuccess = function() { 
                if (!cursor.result)  {
                    deviceStoragePicturesDisplay.innerHTML += "No more files";
                }
                
                var file = cursor.result,
                    filePresentation,
                    wrapper = document.createElement("div"),
                    strong,
                    text,
                    br,
                    p,
                    img;

                strong = document.createElement("strong");
                text = document.createTextNode((++counter) + ". " + file.name + ": ");
                text2 = document.createTextNode(parseInt(file.size / 1024, 10) + "kb");
                br = document.createElement("br");
                p = document.createElement("p");
                img = document.createElement("img");
                img.src = window.URL.createObjectURL(file);

                strong.appendChild(text);
                wrapper.appendChild(strong);
                wrapper.appendChild(text2);
                wrapper.appendChild(br);
                p.appendChild(img);
                wrapper.appendChild(p);

                deviceStoragePicturesDisplay.appendChild(wrapper);

                /*
                    innerHTML approach - crashes as well:
                    filePresentation = "<strong>" + (++counter) + ". " + file.name + ":</strong> " + parseInt(file.size / 1024, 10) + "kb<br>";
                    filePresentation += "<p><img src='" + window.URL.createObjectURL(file) + "' alt=''></p>";
                    deviceStoragePicturesDisplay.innerHTML += filePresentation;
                */

                /*
                    Counter example. Replace the above with this, and it never stops counting:

                    filePresentation = ++counter;
                    deviceStoragePicturesDisplay.innerHTML = filePresentation;                    
                */
                cursor.continue();

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