/* ==========================================================
   KA19WASH — EDITABLE BUSINESS SETTINGS
   Update the social links when they are ready.
   ========================================================== */

const CONFIG = {
  whatsappNumber: '919035166288',
  phoneNumber: '+91 9035 166 288',
  businessName: 'KA19WASH',
  serviceArea: 'Katipala, Krishnapura, Chokkabettu',
  instagramUrl: 'https://www.instagram.com/ka19_wash?rpxt=MWo4d280d2xrcmVmcQ%3D%3D&utm_source=qr',
  facebookUrl: 'https://www.facebook.com/profile.php?id=61594525077994&mibextid=wwXIfr&rdid=sUDRSZRlkfV6bLjZ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Cfs15DCoV%2F%3Fmibextid%3DwwXIfr#'
};


const $ = (selector, parent = document) =>
  parent.querySelector(selector);

const $$ = (selector, parent = document) =>
  [...parent.querySelectorAll(selector)];


/* ================= WHATSAPP ================= */

function whatsappUrl(message = '') {
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function openWhatsApp(message) {
  window.open(
    whatsappUrl(message),
    '_blank',
    'noopener,noreferrer'
  );
}

function generalWhatsAppMessage() {
  return `Hello ${CONFIG.businessName}! I would like to book a car wash.

Service: General Booking
Location: ${CONFIG.serviceArea}

Please share the available time slots.`;
}


/* ================= HEADER / SCROLL ================= */

const header = $('#header');
const progress = $('#topProgress');

window.addEventListener('scroll', () => {

  if (header) {
    header.classList.toggle(
      'scrolled',
      window.scrollY > 30
    );
  }

  if (progress) {

    const max =
      document.documentElement.scrollHeight -
      window.innerHeight;

    progress.style.width =
      `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;

  }

});


/* ================= MOBILE MENU ================= */

const menuToggle = $('#menuToggle');
const mobileNav = $('#mobileNav');

if (menuToggle && mobileNav) {

  menuToggle.addEventListener('click', () => {

    const open =
      mobileNav.classList.toggle('open');

    menuToggle.setAttribute(
      'aria-expanded',
      open ? 'true' : 'false'
    );

  });

}


$$('.mobile-nav a').forEach(link => {

  link.addEventListener('click', () => {

    if (mobileNav) {
      mobileNav.classList.remove('open');
    }

    if (menuToggle) {
      menuToggle.setAttribute(
        'aria-expanded',
        'false'
      );
    }

  });

});


/* ================= HERO WHATSAPP ================= */

const heroWhatsapp = $('#heroWhatsapp');

if (heroWhatsapp) {

  heroWhatsapp.addEventListener(
    'click',
    () => openWhatsApp(
      generalWhatsAppMessage()
    )
  );

}


/* ================= CONTACT WHATSAPP ================= */

const contactWhatsapp = $('#contactWhatsapp');

if (contactWhatsapp) {
  contactWhatsapp.href =
    whatsappUrl(generalWhatsAppMessage());
}


const footerWa = $('#footerWa');

if (footerWa) {
  footerWa.href =
    whatsappUrl(generalWhatsAppMessage());
}


const floatingWhatsapp = $('#floatingWhatsapp');

if (floatingWhatsapp) {
  floatingWhatsapp.href =
    whatsappUrl(generalWhatsAppMessage());
}


/* ================= SOCIAL LINKS ================= */

const socialLinks =
  $$('.social-placeholder');

socialLinks.forEach(link => {

  const text =
    link.textContent.trim().toLowerCase();

  const aria =
    link.getAttribute('aria-label')?.toLowerCase() || '';

  const isInstagram =
    text.includes('instagram') ||
    aria === 'instagram';

  const url =
    isInstagram
      ? CONFIG.instagramUrl
      : CONFIG.facebookUrl;

  if (url !== '#') {

    link.href = url;

    link.target = '_blank';
    link.rel = 'noopener noreferrer';

  } else {

    link.addEventListener(
      'click',
      event => event.preventDefault()
    );

  }

});


/* ================= BOOKING MODAL ================= */

const modal = $('#bookingModal');
const selectedService = $('#selectedService');
const dateInput = $('#customerDate');


/* Minimum booking date */

function setMinimumDate() {

  if (!dateInput) return;

  const today = new Date();

  const local =
    new Date(
      today.getTime() -
      today.getTimezoneOffset() * 60000
    )
      .toISOString()
      .split('T')[0];

  dateInput.min = local;
}

setMinimumDate();


/* Open booking */

function openBooking(service) {

  if (!modal || !selectedService) {
    return;
  }

  selectedService.textContent =
    service || 'General Booking';

  modal.classList.add('show');

  modal.setAttribute(
    'aria-hidden',
    'false'
  );

  document.body.style.overflow = 'hidden';

  setTimeout(() => {

    const nameInput =
      $('#customerName');

    if (nameInput) {
      nameInput.focus();
    }

  }, 50);

}


/* Close booking */

function closeBooking() {

  if (!modal) return;

  modal.classList.remove('show');

  modal.setAttribute(
    'aria-hidden',
    'true'
  );

  document.body.style.overflow = '';

}


/* Booking buttons */

$$('[data-booking]').forEach(button => {

  button.addEventListener(
    'click',
    () => openBooking(
      button.dataset.booking
    )
  );

});


/* Close modal */

$$('[data-close-modal]').forEach(el => {

  el.addEventListener(
    'click',
    closeBooking
  );

});


/* Escape key */

document.addEventListener(
  'keydown',
  event => {

    if (event.key === 'Escape') {
      closeBooking();
    }

  }
);


/* ================= BOOKING FORM ================= */

const bookingForm = $('#bookingForm');

if (bookingForm) {

  bookingForm.addEventListener(
    'submit',
    event => {

      event.preventDefault();

      const data = {

        service:
          selectedService?.textContent ||
          'General Booking',

        name:
          $('#customerName')?.value.trim() ||
          '',

        phone:
          $('#customerPhone')?.value.trim() ||
          '',

        location:
          $('#customerLocation')?.value.trim() ||
          '',

        date:
          $('#customerDate')?.value ||
          '',

        time:
          $('#customerTime')?.value ||
          '',

        notes:
          $('#customerNotes')?.value.trim() ||
          'None'

      };


      const message =
        `Hello ${CONFIG.businessName}! I would like to book a car wash.\n\n` +

        `*Service:* ${data.service}\n` +

        `*Name:* ${data.name}\n` +

        `*Phone:* ${data.phone}\n` +

        `*Location:* ${data.location}\n` +

        `*Preferred date:* ${data.date}\n` +

        `*Preferred time:* ${data.time}\n` +

        `*Notes:* ${data.notes}`;


      closeBooking();

      openWhatsApp(message);

    }
  );

}


/* ================= FAQ ACCORDION ================= */

$$('.faq-item button').forEach(button => {

  button.addEventListener(
    'click',
    () => {

      const item =
        button.parentElement;

      const wasOpen =
        item.classList.contains('open');


      $$('.faq-item').forEach(
        other =>
          other.classList.remove('open')
      );


      if (!wasOpen) {
        item.classList.add('open');
      }

    }
  );

});


/* ================= SCROLL REVEAL ================= */

const observer =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add(
            'visible'
          );

          observer.unobserve(
            entry.target
          );

        }

      });

    },
    {
      threshold:0.12
    }
  );


$$('.reveal').forEach(
  element =>
    observer.observe(element)
);


/* ================= PHONE DISPLAY ================= */

const phoneDisplay =
  $('#phoneDisplay');

if (phoneDisplay) {
  phoneDisplay.textContent =
    CONFIG.phoneNumber;
}