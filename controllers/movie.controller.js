mvApp.controller('MovieController', function(){
    this.$onInit = function(){
            console.log("toto")
        }
    this.movies = [
        {
            title: "Title 1",
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