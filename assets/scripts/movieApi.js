var actorsList = $("#movie-actors")
var directorsList = $("#movie-directors")
var moviePoster = $("#movie-poster")
var movieTitle = $("movie-title")
var moviePlot = $("movie-plot")
var movieReleaseDate = $("release-date")


const apiUrl = "http://www.omdbapi.com/?t="
const moveTitle = "The+Matrix"
const apiKey = "&apikey=859c383f"



function fetchMovieInfo() {
    fetch(apitUrl + movieTitle + apikey)
    .then(function (res) {
        if(res.ok){
            res.json().then(function(data){
                renderMovieReview(data)
            })
        }
    })
}
fetchMovieInfo()

function renderPoster(data){
    moviePoster.attr("src", data.Poster)
    movieTitle.text(data.Title)
    moviePlot.text(data.Plot)
    movieReleaseDate.text(data.Released)
    var directorsArray = data.Director;
    for(var i=0; i<directorsArray.length; i++){
        var listDirector = $("<li>").text(directorsArray[i].Director)
        directorsList.append(listDirector)
    }
    var actorssArray = data.Actors;
    for(var i=0; i<actorsArray.length; i++){
        var listActors = $("<li>").text(actorsArray[i].Actors)
        actorsList.append(listActor)
    }
    
}