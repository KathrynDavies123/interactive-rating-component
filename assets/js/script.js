let submitbutton = document.querySelector(".submitbutton");

let ratingbutton = document.querySelectorAll(".ratingbutton");

ratingbutton.forEach(function (item) {
  item.addEventListener("click", function (event) {
    event.preventDefault();
    ratingbutton.forEach(function (item) {
      item.classList.remove("active");
    });
    item.classList.add("active");
    let selectedRating = item.innerText;
    document.querySelector(
      ".ratingselection"
    ).innerText = `You selected ${selectedRating} out of 5`;
    submitbutton.addEventListener("click", function (event) {
      event.preventDefault();
      document.querySelector(".ratingcomponent").style.display = "none";
      document.querySelector(".thankyoucomponent").style.display = "flex";
    });
  });
});
