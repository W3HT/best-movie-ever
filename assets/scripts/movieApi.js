var actorsList = $("#movie-actors")
var directorsList = $("#movie-directors")
var moviePoster = $("#movie-poster")
var movieTitle = $("#movie-title")
var moviePlot = $("#movie-plot")
var movieReleaseDate = $("#release-date")
var movieAwards = $("#movie-awards")


const apiUrl = "https://www.omdbapi.com/?t="
const inputTitle = "The+Matrix"
const apiKey = "&apikey=859c383f"



function fetchMovieInfo() {
    fetch(apiUrl + inputTitle + apiKey)
    .then(function (res) {
        if(res.ok){
            res.json().then(function(data){
                renderPoster(data)
            })
        }
    })
}
fetchMovieInfo()

function renderPoster(data){
    console.log(data)
    moviePoster.attr("src", data.Poster)
    movieTitle.text(data.Title)
    moviePlot.text(data.Plot)
    movieAwards.text(data.Awards)
    var directorsArray = data.Director.split(", ")
    for(var i=0; i<directorsArray.length; i++){
        var listDirector = $("<li>").text(directorsArray[i])
        directorsList.append(listDirector)
    }
    var actorsArray = data.Actors.split(", ");
    for(var i=0; i<actorsArray.length; i++){
        var listActors = $("<li>").text(actorsArray[i])
        actorsList.append(listActors)
    }
    
    
}