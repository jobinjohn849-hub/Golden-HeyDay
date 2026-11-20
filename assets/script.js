
const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? '×' : '☰';
  });
}
document.quer








ySelectorAll('.nav-links a').forEach(link => {
  if (link.href === window.location.href) link.classList.add('active');
});
const enquiryForm = document.querySelector('#enquiryForm');
if (enquiryForm) {
  enquiryForm.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!this.reportValidity()) return;
    const data = new FormData(this);
    const message = [
      'Hello Golden Heyday Caterers, I would like to make an enquiry.',
      `Name: ${data.get('name')}`,
      `Phone: ${data.get('phone')}`,
      `Email: ${data.get('email') || 'Not provided'}`,
      `Event: ${data.get('event')}`,
      `Event date: ${data.get('date') || 'Not decided'}`,
      `Guests: ${data.get('guests') || 'Not specified'}`,
      `Location: ${data.get('location') || 'Not specified'}`,
      `Message: ${data.get('message') || 'No additional details'}`
    ].join('\\n');
    const whatsappURL = `https://wa.me/919388483565?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank', 'noopener,noreferrer');
    const status = document.querySelector('#formMessage');
    if (status) status.textContent = 'Your enquiry is ready in WhatsApp. Please press Send there to submit it.';
  });
}
