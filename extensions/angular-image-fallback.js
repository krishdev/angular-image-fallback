/**
 * angular-image-fallback
 * (c) 2016 Krishnakumar Rajendran
 * license: MIT 
 * github: https://github.com/krishdev/imgFallBack
 */

(function () {
    angular.module('imgFallback', [])
        .factory('imgService', ['$http', '$location', function ($http, $location) {
            return {
                checkForPage: function (url) {
                    return $http.head(url);
                }
            }
    }])        
        .directive('fallbackHide', ['imgService', function (imgService) {
            return {
                restrict: 'A',
                link: function (scope, elem, attrs) {
                    var imgSrc = attrs.ngSrc;
                    var isPageExists = function () {
                        imgService.checkForPage(imgSrc).then(function successCallback(response) {
                            var responseTxt = response.status;
                            if (responseTxt != 200) {
                                elem.hide();
                            }
                        }, function errorCallback(response) {
                            elem.hide();
                        });
                    }
                    isPageExists();
                }
            };
    }])
    .directive('fallbackDefault', ['imgService', function (imgService) {
            return {
                restrict: 'A',
                link: function (scope, elem, attrs) {
                    var imgSrc = attrs.ngSrc;
                    var isPageExists = function () {
                        var defaultImg = "http://xpenology.org/wp-content/themes/qaengine/img/default-thumbnail.jpg";
                        imgService.checkForPage(imgSrc).then(function successCallback(response) {
                            var responseTxt = response.status;
                            if (responseTxt != 200) {
                                attrs.src = defaultImg;
                            }
                        }, function errorCallback(response) {
                            elem.attr("src",defaultImg);
                        });
                    }
                    isPageExists();
                }
            };
    }]);

})();
