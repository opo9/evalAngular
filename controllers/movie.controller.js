mvApp.controller('MovieController', function(){
    this.movies = [
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
        }]
})