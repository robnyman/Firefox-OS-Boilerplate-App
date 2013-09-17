# Firefox OS Boilerplate App

This is a demo app for Firefox OS, loosely based on [fxosstub](https://github.com/Jaxo/fxosstub), meant to act as a simple boilerplate for getting started with apps for Firefox OS.

It will give you a button to install it in Firefox OS - on a device, in the [Firefox OS Simulator](https://addons.mozilla.org/en-US/firefox/addon/firefox-os-simulator/) ([Simulator Introduction](https://hacks.mozilla.org/2012/12/firefox-os-simulator-1-0-is-here/)) and in certain [Nightly versions of Firefox](http://nightly.mozilla.org/).

It is a showcase of:

* [Web Activities](https://hacks.mozilla.org/2013/01/introducing-web-activities/)
* [WebAPI usage](https://hacks.mozilla.org/2013/02/using-webapis-to-make-the-web-layer-more-capable/)
* Adding offline support and more in Firefox OS!

To add your own icon, I recommend using the [Firefox OS app icons style guide](http://www.mozilla.org/en-US/styleguide/products/firefoxos/icons/).


## Preview

To test/install this app, the recommended way is to download it or clone/fork this repository and run it in the [Firefox OS Simulator](https://addons.mozilla.org/en-US/firefox/addon/firefox-os-simulator/) by clicking Add Directory.

Alternatively, you can test-run it from GitHub by installing it in the Firefox OS Simulator Dashboard by providing this URL:

* [http://robnyman.github.io/Firefox-OS-Boilerplate-App/](http://robnyman.github.io/Firefox-OS-Boilerplate-App/)

## For Packaged Apps

You can test packaged apps in version 2 and higher of the Firefox OS Simulator, by using the Add Directory button. If you want to access privileged APIs - such as deviceStorage, cross-domain XMLHttpRequest etc - you need to set type and permissions in the manifest file. E.g.

    {
        "version": "1",
        "name": "Firefox OS Boilerplate App",
        "type" : "privileged"
        …

And:

    "permissions": {
        "device-storage:pictures": {
            "access": "readcreate"
        },
        "systemXHR":{}
    }


All options to test packaged apps are outlined in the [How to install packaged apps in Firefox OS – options and tools](https://hacks.mozilla.org/2013/03/how-to-install-packaged-apps-in-firefox-os-options-and-tools/) article