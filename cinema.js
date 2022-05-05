const movies = require("./database/catalogo.json")


function addMovie(movie){
    movies.push(movie)
    
}

function searchMovie(movieCode){
    //movies.code.find(movieCode) ? !movies.nowShowing
}

function changeStatus(movieCode){
    movies.find((movies) => (
        movies.code === movieCode ? !movies.code : null
))
}


function listMovies(){
    movies.forEach((movies) => {
        
        console.log("Filme: " + movies.title + "\nAtor Principal: " + movies.cast[0] + "\nEm exibição? " + movies.nowShowing)
    })
    
}

function listShowingMovies(){
    movies.forEach((movie) => {
        if(movie.nowShowing) {
            console.log(`
                Filme: ${movie.title}
                Ator Principal: ${movies.cast}
                Ano: ${movies.year}
                Duração: ${movies.runningTime}
            `)
        }
    })
}

listShowingMovies()