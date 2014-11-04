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
			title: '74HC00 Non et 2',
			image: 'img/74HC00.jpg'
		},
		{
			url: 'img/74HC02.jpg',
			title: '74HC02 Non ou 2',
			image: 'img/74HC02.jpg'
		},
		{
			url: 'img/74HC04.jpg',
			title: '74HC04 Inverseur',
			image: 'img/74HC04.jpg'
		},
		{
			url: 'img/74HC08.jpg',
			title: '74HC08 Et 2',
			image: 'img/74HC08.jpg'
		},
		{
			url: 'img/74HC10.jpg',
			title: '74HC10 Non et 3',
			image: 'img/74HC10.jpg'
		},
		{
			url: 'img/74HC20.jpg',
			title: '74HC20 Non et 4',
			image: 'img/74HC20.jpg'
		},
		{
			url: 'img/74HC32.jpg',
			title: '74HC32 ou 2',
			image: 'img/74HC32.jpg'
		},
        {
			url: 'img/74HC74.jpg',
			title: '74HC74 Flip-flop D',
			image: 'img/74HC74.jpg'
		},
        {
			url: 'img/74HC86.jpg',
			title: '74HC86 Ou exclusif 2',
			image: 'img/74HC86.jpg'
		},
        {
			url: 'img/74HC112.jpg',
			title: '74HC112 Flip-flop JK',
			image: 'img/74HC112.jpg'
		},
        {
			url: 'img/74HC151.jpg',
			title: '74HC151 Multiplexeur 8-3',
			image: 'img/74HC151.jpg'
		},
        {
			url: 'img/74HC164.jpg',
			title: '74HC164 Registre à décalage',
			image: 'img/74HC164.jpg'
		},
        {
			url: 'img/74HC191.jpg',
			title: '74HC191 Compteur binaire CB4CLED',
			image: 'img/74HC191.jpg'
		},
        {
			url: 'img/74HC238.jpg',
			title: '74HC238 Démultiplexeur 3-8',
			image: 'img/74HC238.jpg'
		},
	];


}
