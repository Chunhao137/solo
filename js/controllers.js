var app = angular.module( "Demo", [] );

        app.controller(
            "AppController",
            function( $scope ) {

                $scope.images = [
                    {
                        source: "images/dog1.jpg",
                      
                    },
                    {
                        source: "images/dog2.jpg",
                       
                    },
                    {
                        source: "images/dog3.jpg",
                    
                    },
                    {
                        source: "images/dog4.jpg",
                       
                    }
          
                ];
 
                $scope.image = getRandomImage();
 

                $scope.showImage = function( index ) {
 
                    $scope.image = $scope.images[ index - 1 ];
 
                };
 
 
                // ---
                // PRIVATE METHODS.
                // ---
 
 
                // I return a random image from the current collection.
                function getRandomImage() {
 
                    var imageCount = $scope.images.length;
 
                    var index = Math.floor(
                        ( Math.random() * imageCount * 2 ) % imageCount
                    );
 
                    return( $scope.images[ index ] );
 
                }
 
            }
        );
 

        app.directive(
            "bnFadeHelper",
            function() {
 
                function compile( element, attributes, transclude ) {
 
                    element.prepend( "<img class='fader' />" );
 
                    return( link );
 
                }
 
                function link( $scope, element, attributes ) {
 
                    var fader = element.find( "img.fader" );
                    var primary = element.find( "img.image" );
                    $scope.$watch(
                        "image.source",
                        function( newValue, oldValue ) {
                            if ( newValue === oldValue ) {
 
                                return;
 
                            }
                            if ( isFading() ) {
 
                                return;
 
                            }
 
                            initFade( oldValue );
 
                        }
                    );
                    function initFade( fadeSource ) {
 
                        fader
                            .prop( "src", fadeSource )
                            .addClass( "show" )
                        ;
 
                        primary.one( "load", startFade );
 
                    }
 
                    function isFading() {
 
                        return(
                            fader.hasClass( "show" ) ||
                            fader.hasClass( "fadeOut" )
                        );
 
                    }
 
                    function startFade() {
 
                        fader.width();
 
                        fader.addClass( "fadeOut" );
 
                        setTimeout( teardownFade, 250 );
 
                    }
 
                    function teardownFade() {
 
                        fader.removeClass( "show fadeOut" );
 
                    }
 
                }
 
                 return({
                    compile: compile,
                    restrict: "A"
                });
 
            }
        );