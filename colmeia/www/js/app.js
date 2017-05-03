    angular
        .module('colmeia', ['ionic', 'ui.utils.masks', 'chart.js', 'ion-datetime-picker','ui.grid', 'ui.grid.selection', 'ui.grid.infiniteScroll'])
        .run(Run);

function Run($ionicPlatform) {
    $ionicPlatform.ready(function () {

        if (window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }

    })
}



