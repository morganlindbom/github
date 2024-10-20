



document.addEventListener('DOMContentLoaded', function() {
    // Hämta alla länkar med klassen no-reload-link
    const noReloadLinks = document.querySelectorAll('.no-reload-link');

    // Loopa över varje länk och lägg till en click-event
    noReloadLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Stoppar sidladdningen
            alert(link.textContent + ' klickad, men sidan laddas inte om!');
            // Du kan lägga till ytterligare funktionalitet här om du vill
        });
    });

    // Hämta hjärtikonen och lägg till click-event
    const likeLink = document.getElementById('likeLink');
    const likeIcon = document.getElementById('likeIcon');

    if (likeLink && likeIcon) {
        let isLiked = false; // Börja som ej gillad (svart/grå)

        likeLink.addEventListener('click', function(event) {
            event.preventDefault(); // Stoppar sidladdningen
            alert('like ikonen klickad, men sidan laddas inte om!');
            if (isLiked) {
                likeIcon.style.color = 'grey'; // Ändra till grå
            } else {
                likeIcon.style.color = 'red'; // Ändra till röd
            }
            isLiked = !isLiked; // Växla tillstånd
        });
    }

    // Hämta bild 3 och lägg till click-event
    const cartLink = document.getElementById('cartLink');
    if (cartLink && cartIcon) {
        cartLink.addEventListener('click', function(event) {
            event.preventDefault(); // Stoppar sidladdningen
            alert('Varukorgsikonen klickad, men sidan laddas inte om!');
            // Du kan lägga till funktionalitet för varukorgen här
        });
    };

    document.getElementById('heart-card-1').addEventListener('click', function(event) {
        event.preventDefault(); // Stoppar sidladdningen
        alert('Produktkort 1, Hjärta, klickad, Sidan laddas inte om, men hjärtat byter färg!');
        // Check current color and toggle between red and gray
        if (this.style.color === 'red') {
            this.style.color = 'gray';  // Change to gray
        } else {
            this.style.color = 'red';   // Change to red
        }
    });
    
    // Select all accordion toggle elements
    const accordionToggles = document.querySelectorAll(".accordion-toggle");

    accordionToggles.forEach(toggle => {
        // Add a click event listener to each toggle
        toggle.addEventListener("click", function () {
            // Get the next sibling element (the accordion content)
            const content = this.nextElementSibling;

            // Toggle the 'active' class
            content.classList.toggle("active");

            // Check if the content is already open
            if (content.style.maxHeight) {
                // Close the content
                content.style.maxHeight = null;
            } else {
                // Open the content
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });


});
    



