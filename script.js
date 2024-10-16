const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const message = document.getElementById("message");

noButton.addEventListener("mouseover", function() {
    const randomX = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.position = "absolute";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
});

yesButton.addEventListener("click", function() {
    message.textContent = "Рамазан таки знал (:";
});
