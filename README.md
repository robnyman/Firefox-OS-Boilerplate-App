# Firefox OS Boilerplate App

This is a demo app for Firefox OS, loosely based on [fxosstub](https://github.com/Jaxo/fxosstub), meant to act as a simple boilerplate for getting started with apps for Firefox OS.

It will give you a button to install it in Firefox OS - on a device, in the [Firefox OS Simulator](https://addons.mozilla.org/en-US/firefox/addon/firefox-os-simulator/) ([Simulator Introduction](https://hacks.mozilla.org/2012/12/firefox-os-simulator-1-0-is-here/)) and in certain [Nightly versions of Firefox](http://nightly.mozilla.org/).

It is a showcase of [Web Activities](https://hacks.mozilla.org/2013/01/introducing-web-activities/), WebAPI usage, adding offline support and more in Firefox OS!

To add your own icon, I recommend using the [Firefox OS app icons style guide](http://www.mozilla.org/en-US/styleguide/products/firefoxos/icons/).


## Preview

To test/install this app, download the code and run it on a web server, or navigate to [Firefox OS Boilerplate App](http://robnyman.github.com/Firefox-OS-Boilerplate-App/) in Firefox on a device or in the Firefox OS Simulator. 

Alternatively, install it in the Firefox OS Simulator Dashboard by providing either of these URLs:

* [http://robnyman.github.com/Firefox-OS-Boilerplate-App/](http://robnyman.github.com/Firefox-OS-Boilerplate-App/)
* [http://robnyman.github.com/Firefox-OS-Boilerplate-App/manifest.webapp](http://robnyman.github.com/Firefox-OS-Boilerplate-App/manifest.webapp)

**Note:** If you use the Add Directory option in the Simulator, make sure to change `"launch_path": "/Firefox-OS-Boilerplate-App/index.html"` to `"launch_path": "index.html"` since it runs it as a packaged app directly from the root folder of the Firefox OS Boilerplate App.


## installPackage - Packaged Apps

It also supports `installPackage` to install a ZIP version of your app with all files packaged. This also gives you access to a few extra APIs, due to a higher security clearance.
The repository contains two sample things to make this possible:

* A mini manifest - the package.manifest file
- A ZIP version of the app

To enable this, please go to the js/base.js file and change two lines, as described in the comments.
Basically, these are the steps needed for packaged apps:

- Alter the mini manifest (package.manifest) and make sure the "package_path" is absolute
- ZIP all app content (not containing folder), including regular manifest
- Developer name and info HAS to match between mini manifest and the regular one
- Have an installPackage call in JavaScript pointing to the mini manifest
- Turn on Developer Mode in the Firefox OS Simulator (Settings > Device Information > More Information > Developer > Developer mode)
- Add type property (e.g." type" : "privileged") in the manifest if you want access to certain APIs (just asking for permissions isn't sufficient)