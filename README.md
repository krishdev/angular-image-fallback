##Angular Image Fallback ngSrc

####Dependencies:

1. js
  * [jQuery](https://code.jquery.com/jquery-3.1.0.min.js)
  * [AngularJS](https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js)

------------------------------------------------------------------
##Steps to make it work:
1. ####Add the dependencies in head
 

  ```html
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angular_material/1.5.6/angular-material.min.js"></script>
    <script src=”http://krishdev.com/openSource/angular-image-fallback/imageFallBack.js”></script>
  </head>
  ```
2. ####Add the element in body
  
  ```html
  <body>
    <img fallback-default ng-src="{{scopeName}}">
  </body>
  ```
  ######Attributes -
  Custom Attribute | Type / Usage
------------ | -------------
fallback-default |	Replaces the missing image path with a default image.
fallback-hide |	Hides the element if the path of the image is wrong



## License
Image Fallback - Angular is licensed under the MIT license. (http://opensource.org/licenses/MIT)

## Contribution
Encourage improvements over Custom Banner Carousel. Would like to see the work on plunker before requesting a merge. Naming convensions should be camelCase.
