function setTimeoutPromisified(duration) {
    return new Promise(function (resolve) {
        setTimeout(resolve, duration);
    });
}
function callback() {
    console.log("3 second has passed");
}
setTimeoutPromisified(5000).then(callback);
