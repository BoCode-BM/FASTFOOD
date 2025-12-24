document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');

            console.log('Form submission prevented.');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);

            // Here you would typically send the form data to a server.
            // For example, using fetch() to send a POST request to a server-side script.
            /*
            fetch('/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message,
                }),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('Merci pour votre message ! Il a été envoyé.');
                contactForm.reset();
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Une erreur s'est produite. Veuillez réessayer.');
            });
            */

            // For this example, we'll just show an alert and reset the form.
            alert('Merci pour votre message ! Il a été envoyé (simulation).');
            contactForm.reset();
        });
    }
});

// Google Map Initialization
function initMap() {
    // Remplacer par l'adresse de votre restaurant
    const restaurantAddress = { lat: 48.8584, lng: 2.2945 }; // Coordonnées pour la Tour Eiffel (exemple)
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: restaurantAddress,
    });
    new google.maps.Marker({
        position: restaurantAddress,
        map: map,
        title: "Notre Restaurant",
    });
}
