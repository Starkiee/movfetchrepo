document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("movieForm");
    const movieDetailsDiv = document.getElementById("movieDetails");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const movieName = document.getElementById("movieName").value;
        fetchMovieDetails(movieName);
    });

    function fetchMovieDetails(movieName) {
        const apiKey = "59934ca8";
        const apiUrl = "http://www.omdbapi.com/?i=tt3896198&apikey=59934ca8";

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                if (data.Response === "True") {
                    const details = `
                        <h2>${data.Title} (${data.Year})</h2>
                        <p><strong>Director:</strong> ${data.Director}</p>
                        <p><strong>Plot:</strong> ${data.Plot}</p>
                        <img src="${data.Poster}" alt="${data.Title} Poster" />
                    `;
                    movieDetailsDiv.innerHTML = details;
                } else {
                    movieDetailsDiv.innerHTML = "<p>Movie not found.</p>";
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }
});
