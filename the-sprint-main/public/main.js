const filterButton = document.querySelector(".filter")
const showTags = document.querySelector(".tags-small-screen")

filterButton.addEventListener("click", function() {
    showTags.classList.toggle("show");
  });