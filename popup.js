document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("specialPopup").style.display = "block";
});

function closePopup() {
    document.getElementById("specialPopup").style.display = "none";
}

function orderNow() {
    window.location.href = "coffeeSelection.html"; // Replace with your order page URL
}

function subscribeNow() {
    window.location.href = "subcription.html"; // Replace with your subscription page URL
}
