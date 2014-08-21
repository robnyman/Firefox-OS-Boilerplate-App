# Firefox OS Boilerplate App

This is a demo app for Firefox OS, loosely based on [fxosstub](https://github.com/Jaxo/fxosstub), meant to act as a simple boilerplate for getting started with apps for Firefox OS.

It will give you a button to install it in Firefox OS - on a device, in the [App Manager](https://developer.mozilla.org/en-US/Firefox_OS/Using_the_App_Manager) and in certain [Nightly versions of Firefox](http://nightly.mozilla.org/).

It is a showcase of:

* [Web Activities](https://hacks.mozilla.org/2013/01/introducing-web-activities/)
* [WebAPI usage](https://hacks.mozilla.org/2013/02/using-webapis-to-make-the-web-layer-more-capable/)
* Adding offline support and more in Firefox OS!

To add your own icon, I recommend using the [Firefox OS app icons style guide](http://www.mozilla.org/en-US/styleguide/products/firefox-os/icons/).

The Firefox OS Boilerplate App apply the Gaia style of Firefox OS, but note that there is no obligation to add the same look, and feel to your application: Firefox OS applications are web applications, so no need to follow a UI guideline.

For up-to-date information on building Open Web Apps, visit the [App Center on MDN](https://developer.mozilla.org/en-US/Apps).


## Preview

To test/install this app, the recommended way is to download it or clone/fork this repository and run it in the [App Manager](https://developer.mozilla.org/en-US/Firefox_OS/Using_the_App_Manager) (`Tools > Web Developer > App Manager` or go to the URL `about:app-manager` in Firefox) by clicking Add Packaged App and browse to where your local repository is.

Alternatively, you can test-run it from GitHub by installing it in the App Manager Dashboard - click Add Hosted App - by providing this URL:

* [http://robnyman.github.io/Firefox-OS-Boilerplate-App/manifest-hosted.webapp](http://robnyman.github.io/Firefox-OS-Boilerplate-App/manifest-hosted.webapp)

## For Packaged Apps

You can test packaged apps in version 2 and higher of the App Manager, by using the Add Directory button. If you want to access privileged APIs - such as deviceStorage, cross-domain XMLHttpRequest etc - you need to set type and permissions in the manifest file. E.g.

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
        "systemXHR":{},
        "contacts": {
            "description" : "Reading out contacts",
            "access": "readcreate"
        }
    }


All options to test packaged apps are outlined in the [How to install packaged apps in Firefox OS – options and tools](https://hacks.mozilla.org/2013/03/how-to-install-packaged-apps-in-firefox-os-options-and-tools/) article

## Contribute

### Localization (L10n)

#### Get a Transifex account 

Transifex is the platform that we use to manage the localization workflow.

[Sign up](https://www.transifex.com/signup/) for a Transifex account and visit the [Firefox OS Boilerplate project](https://www.transifex.com/projects/p/firefox-os-boilerplate/).

![](https://support.cdn.mozilla.net/media/uploads/gallery/images/2013-09-27-08-46-21-087973.png)

#### Find your language

Click on the language that you want to localize and click the ![](https://support.cdn.mozilla.net/media/uploads/gallery/images/2013-09-27-08-57-01-bc2228.png) button

If your language is not listed, click the ![](https://support.cdn.mozilla.net/media/uploads/gallery/images/2013-09-27-08-58-27-05ceb1.png) button.

#### Start translating! 

Select the project you want to translate and hit the ![](https://support.cdn.mozilla.net/media/uploads/gallery/images/2013-09-27-09-13-50-99ae4f.png) button. 

When your translation is complete, we'll pull it into this repository.