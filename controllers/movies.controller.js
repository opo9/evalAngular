mvApp.controller('MoviesController', ['$scope', function($scope){
    $scope.movies =
        [
            {
                /*image: "image.jpg",*/
                title: "Film title 1",
                description: "Description 1",
                grade: [
                    { star: 5 },
                    { star: 4 },
                    { star: 3 }
                ],
                comments: [
                    { user: "Bob", data: "Super" },
                    { user: "Jean", data: "Null" }
                ]
            },
            {
                /*image: "image.jpg",*/
                title: "Film title 2",
                description: "Description 2",
                grade: [
                    { star: 5 },
                    { star: 4 },
                    { star: 3 }
                ],
                comments: [
                    { user: "Bob", data: "Super" },
                    { user: "Jean", data: "Null" }
                ]
            },
            {
                /*image: "image.jpg",*/
                title: "Film title 3",
                description: "Description 3",
                grade: [
                    { star: 5 },
                    { star: 4 },
                    { star: 3 }
                ],
                comments: [
                    { user: "Bob", data: "Super" },
                    { user: "Jean", data: "Null" }
                ]
            },
            {
                /*image: "image.jpg",*/
                title: "Film title 4",
                description: "Description 4",
                grade: [
                    { star: 5 },
                    { star: 4 },
                    { star: 3 }
                ],
                comments: [
                    { user: "Bob", data: "Super" },
                    { user: "Jean", data: "Null" }
                ]
            },
            {
                /*image: "image.jpg",*/
                title: "Film title 4",
                description: "Description 2",
                grade: [
                    { star: 5 },
                    { star: 4 },
                    { star: 3 }
                ],
                comments: [
                    { user: "Bob", data: "Super" },
                    { user: "Jean", data: "Null" }
                ]
            },
            {
                /*image: "image.jpg",*/
                title: "Film title 4",
                description: "Description 4",
                grade: [
                    { star: 5 },
                    { star: 4 },
                    { star: 3 }
                ],
                comments: [
                    { user: "Bob", data: "Super" },
                    { user: "Jean", data: "Null" }
                ]
            }
        ];
    console.log($scope.movies);
}])