document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;

        if (!name || !email || !message) {
            event.preventDefault();
            alert("All fields must be filled out!");
        }
    });

    function updatePrice(id, delta) {
        var priceElement = document.getElementById(id);
        var currentPrice = parseInt(priceElement.innerText);

        var newPrice = currentPrice + delta;
        if (newPrice < 0) {
            newPrice = 0;
        }

        priceElement.innerText = newPrice;
    }

    window.increasePrice = function(id) {
        updatePrice(id, 1);
    };

    window.decreasePrice = function(id) {
        updatePrice(id, -1);
    };
});
