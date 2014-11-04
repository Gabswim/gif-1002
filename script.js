// Define a new module for our app
var app = angular.module("instantSearch", []);

// Create the instant search filter

app.filter('searchFor', function(){

	// All filters must return a function. The first parameter
	// is the data that is to be filtered, and the second is an
	// argument that may be passed with a colon (searchFor:searchString)

	return function(arr, searchString){

		if(!searchString){
			return arr;
		}

		var result = [];

		searchString = searchString.toLowerCase();

		// Using the forEach helper method to loop through the array
		angular.forEach(arr, function(item){

			if(item.title.toLowerCase().indexOf(searchString) !== -1){
				result.push(item);
			}

		});

		return result;
	};

});

// The controller

function InstantSearchController($scope){

	

	$scope.items = [
		{
			url: 'img/74HC00.jpg',
			title: '74HC00',
			image: 'img/74HC00.jpg'
		},
		{
			url: 'img/74HC02.jpg',
			title: '74HC02',
			image: 'img/74HC02.jpg'
		},
		{
			url: 'img/74HC04.jpg',
			title: '74HC04',
			image: 'img/74HC04.jpg'
		},
		{
			url: 'img/74HC08.jpg',
			title: '74HC08',
			image: 'img/74HC08.jpg'
		},
		{
			url: 'img/74HC10.jpg',
			title: '74HC10',
			image: 'img/74HC10.jpg'
		},
		{
			url: 'img/74HC20.jpg',
			title: '74HC20',
			image: 'img/74HC20.jpg'
		},
		{
			url: 'img/74HC32.jpg',
			title: '74HC32',
			image: 'img/74HC32.jpg'
		},
        {
			url: 'img/74HC74.jpg',
			title: '74HC74',
			image: 'img/74HC74.jpg'
		},
        {
			url: 'img/74HC86.jpg',
			title: '74HC86',
			image: 'img/74HC86.jpg'
		},
        {
			url: 'img/74HC112.jpg',
			title: '74HC112',
			image: 'img/74HC112.jpg'
		},
        {
			url: 'img/74HC151.jpg',
			title: '74HC151',
			image: 'img/74HC151.jpg'
		},
        {
			url: 'img/74HC164.jpg',
			title: '74HC164',
			image: 'img/74HC164.jpg'
		},
        {
			url: 'img/74HC191.jpg',
			title: '74HC191',
			image: 'img/74HC191.jpg'
		},
        {
			url: 'img/74HC238.jpg',
			title: '74HC238',
			image: 'img/74HC238.jpg'
		},
	];


}
