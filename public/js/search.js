function search() {
  const searchResult = document.getElementById("search-result");
  const searchTerm = document.getElementById("search-term");
  const keyword = document.getElementById("keyword");

  const movieData = document.getElementById("movie-data");
  const comments = document.getElementById("comments");

  movieData.style.visibility = "hidden";
  comments.style.visibility = "hidden";

  searchResult.style.display = "block";

  searchTerm.innerHTML = keyword.value;

  //querying the server for the keyword value

  return false;
}

window.onload = function() {
  const form = document.getElementById("search-form");

  form.onsubmit = () => search();
};