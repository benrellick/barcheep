document.addEventListener("deviceready", init, false);
var gaPlugin;

function onDeviceReady() {
    gaPlugin = window.plugins.gaPlugin;
    gaPlugin.init(successHandler, errorHandler, "UA-12345678-1", 10);
}