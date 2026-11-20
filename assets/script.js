
// Mobile Navigation Toggle
const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');

if (toggle && links) {
    toggle.addEventListener('click', () => {
        const isOpen = links.classList.toggle('open');

        toggle.setAttribute('aria-expanded', String(isOpen));
        toggle.textContent = isOpen ? '×' : '☰';
    });
}

// Enquiry Form
const enquiryForm = document.getElementById('enquiryForm');

if (enquiryForm) {
    enquiryForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const email = document.getElementById('email').value.trim();
        const eventType = document.getElementById('event').value;
        const date = document.getElementById('date').value;
        const guests = document.getElementById('guests').value;
        const location = document.getElementById('location').value.trim();
        const message = document.getElementById('message').value.trim();

        const whatsappMessage = `
New Enquiry - Golden Heyday Caterers

Name: ${name}
Phone: ${phone}
Email: ${email}
Event Type: ${eventType}
Event Date: ${date}
Number of Guests: ${guests}
Location: ${location}
Message: ${message}
        `;

        const whatsappURL =
            'https://wa.me/919388483565?text=' +
            encodeURIComponent(whatsappMessage);

        window.open(whatsappURL, '_blank');
    });
}
