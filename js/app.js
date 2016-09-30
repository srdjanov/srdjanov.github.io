var app = angular.module("app",  ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: '/pages/landing.html',
        title: 'Welcome'
    })
    .when('/cv', {
        templateUrl: '/pages/cv.html',
        title: 'CV'
    })
    .when('/portfolio', {
        templateUrl: '/pages/portfolio/portfolio.html',
        title: 'Portfolio'
    })
    .when('/portfolio/animated-icons', {
        templateUrl: '/pages/portfolio/animated-icons.html',
        title: 'Animated icons'
    })
});

app.controller('MainController', ['$scope', '$location', function ($scope, $location){
    $scope.nav = function (hash) {
        $location.path(hash);
    }
}]);

app.controller('PortfolioController', ['$scope', function($scope){
    $scope.filter = [];
    
    $('.tag').click(function ($this){
        var tagText = $(this).text();
        
        if($scope.filter.includes(tagText)){
            return;
        }else{
            $scope.filter.push(tagText);
            
            $('.portfolio-box-item').hide();
            
            $('.tag').each( function(){
                if($(this).text() === tagText){
                    $(this).parent().show();
                }
            });
            
            var $filterListItem = $("<li><span class='tag-filter'>" + tagText + "</span></li>")
            $("#filterList").append($filterListItem);
        }
    });
    
}]);

app.run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        if (current.hasOwnProperty('$$route')) {
            $rootScope.title = current.$$route.title;
        }
    });
}]);

function toggleSkill(targetId, element) {
    $('.tags > li > span').removeClass('active')
    $(element).addClass('active');
    $('.skill-list > li').each(function(index) {
        if ($(this).attr('id') == targetId) {
            $(this).show(50);
        }
        else {
            $(this).hide(50);
        }
    });
}

function scrollToSection(target) {
    $('html, body').animate({
        scrollTop: $("#" + target).offset().top
    }, 500);
};




