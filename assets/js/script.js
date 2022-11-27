let submitbutton = document.querySelector(".submitbutton");

let ratingbutton = document.getElementsByClassName("ratingbutton");

for (let i = 0; i < ratingbutton.length; i++) {
    ratingbutton[i].addEventListener("click", function (event) {
      event.preventDefault();
      ratingbutton[i].classList.toggle("active");
      let selectedRating = ratingbutton[i].innerText;
      document.querySelector(
        ".ratingselection"
      ).innerText = `You selected ${selectedRating} out of 5`;
    });
  }

submitbutton.addEventListener("click", function (event) {
  event.preventDefault();
  document.querySelector(".ratingcomponent").style.display = "none";
  document.querySelector(".thankyoucomponent").style.display = "block";
});
