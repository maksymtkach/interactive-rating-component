const submit = document.getElementById("submit-button");
const ratingState = document.getElementById("rating-state");
const thankYouState = document.getElementById("thank-you-state");
const ratingButtonsSet = document.getElementsByClassName("rating-button");
const infoMessage = document.getElementById("info-message");
thankYouState.style.display = "none";
let ratingValue = -1;

submit.addEventListener("click", showAppreciation);

for (const ratingButton of ratingButtonsSet) {
    ratingButton.addEventListener("click", (e) => {
        for (const rb of ratingButtonsSet) {
            rb.classList.remove('active');
        }

        ratingButton.classList.add('active');

        changeRatingValue(ratingButton.textContent);
    });
}
 

function showAppreciation() {
    if (ratingValue == -1) {
        alert("You haven't selected any rating");
        return;
    }
    printResultMessage();
    ratingState.style.display = "none";
    thankYouState.style.display = "flex";
}

function changeRatingValue(rating){
    ratingValue = rating;
}

function printResultMessage() {
    infoMessage.textContent = "You selected " + ratingValue + " out of 5";

}