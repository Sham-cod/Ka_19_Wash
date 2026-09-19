# KA19WASH — Premium Doorstep Car Wash Website

A responsive, professional KA19WASH car-wash website built with plain **HTML, CSS and JavaScript**. The project keeps the existing visual direction while applying the requested content and layout changes.

## 1. What's included

- Responsive desktop, tablet and mobile layout
- KA19WASH fixed navigation/header
- Hero section with **Book via WhatsApp** as the only hero CTA
- Services section with:
  - Bucket Wash
  - Interior Cleaning
  - Exterior Cleaning
  - Deep Car Cleaning
  - Premium Car Care — Coming Soon
- Service-card hover effects
- Packages section with prices hidden
- How It Works section
- **Why Choose KA19WASH?** section
- Before & After section
- Service Area section
- FAQ placed on the right side of Service Area
- Customer Reviews Coming Soon section
- Contact/footer section
- WhatsApp booking flow with a booking form
- Local image assets so the website works without a separate image folder download

## 2. Folder structure

```text
ka19wash/
├── index.html
├── style.css
├── script.js
├── README.md
├── IMAGE-SOURCES.txt
├── preview-1.png
└── assets/
    └── images/
        ├── hero.jpg
        ├── exterior.jpg
        ├── interior.jpg
        ├── deep-clean.jpg
        ├── coming-soon.jpg
        ├── wheel-package.jpg
        ├── basic-package.jpg
        ├── standard-package.jpg
        ├── premium-package.jpg
        ├── cta-bg.jpg
        └── before-*.jpg
```

## 3. How to run the website

### Option A — simplest

1. Extract the ZIP.
2. Open the `ka19wash` folder.
3. Double-click `index.html`.
4. The site opens in your browser.

### Option B — recommended in VS Code

1. Install **Visual Studio Code**.
2. Open the `ka19wash` folder in VS Code.
3. Install the **Live Server** extension.
4. Right-click `index.html`.
5. Select **Open with Live Server**.

This is recommended while editing because browser changes refresh automatically.

## 4. Important: WhatsApp number

The WhatsApp number is already configured as:

**8105324126**

Open `script.js` and look at the top:

```js
const CONFIG = {
  whatsappNumber: '918105324126',
  phoneNumber: '+91 81053 24126',
  businessName: 'KA19WASH',
  serviceArea: 'Katipala, Krishnapura, Chokkabettu',
  instagramUrl: '#',
  facebookUrl: '#'
};
```

### WhatsApp format

Keep the WhatsApp number in this format:

```text
918105324126
```

Do **not** add `+`, spaces or hyphens inside `whatsappNumber`.

## 5. Add Instagram and Facebook links later

When the social-media links are ready, edit these two lines in `script.js`:

```js
instagramUrl: '#',
facebookUrl: '#'
```

Example:

```js
instagramUrl: 'YOUR_INSTAGRAM_LINK',
facebookUrl: 'YOUR_FACEBOOK_LINK'
```

The Instagram and Facebook icons are already included in the Contact/Footer sections.

## 6. Change phone number

Change:

```js
phoneNumber: '+91 81053 24126'
```

The visible phone number in the Contact section is automatically updated from this setting.

## 7. Change the service area

Change:

```js
serviceArea: 'Katipala, Krishnapura, Chokkabettu'
```

The service-area text shown elsewhere can also be edited directly in `index.html` if you want to change the displayed list.

## 8. Services

Open `index.html` and search for:

```html
<section class="section" id="services">
```

Each service is an individual:

```html
<article class="service-card reveal">
```

### Current services

1. Bucket Wash
2. Interior Cleaning
3. Exterior Cleaning
4. Deep Car Cleaning
5. Premium Car Care — Coming Soon

**Prices are intentionally not displayed.**

## 9. Packages

Open `index.html` and search for:

```html
<section class="section section-soft" id="packages">
```

Package prices have been removed from the visible design.

The current package names and feature lists remain in place.

## 10. About section

The About area contains the existing **How It Works** content followed by:

**Why Choose KA19WASH?**

The duplicate **Why KA19WASH** heading has been removed.

The remaining Why Choose cards have been kept.

## 11. Service Area + FAQ

The Service Area section remains on the left.

The previous **Your Car Deserves Better** CTA box has been removed.

The FAQ now occupies the right side of the same section.

FAQ uses an accordion interaction: click a question to open its answer.

## 12. Hero section

The hero keeps the existing headline, supporting copy, background image and styling.

The **Book Now** hero button has been removed.

The remaining CTA is:

**Book via WhatsApp**

## 13. Header

The logo and colors are retained.

The header menu items are:

- Home
- Services
- Packages
- About
- FAQ
- Contact

The navigation text has been increased slightly for easier reading.

The header's Book Now button has been removed as requested.

## 14. Contact section

Current details:

- Phone: **8105324126**
- WhatsApp: **8105324126**
- Instagram: **KA_19_Wash** — link placeholder until provided
- Facebook: **KA_19_Wash** — link placeholder until provided
- Location: **Katipala, Krishnapura, Chokkabettu**

Contact text has been made slightly larger for readability.

## 15. Booking system

There is no backend or database in this version.

When a customer selects a service:

1. A booking form opens.
2. The customer enters name, phone, location, date, time and notes.
3. JavaScript creates a formatted WhatsApp message.
4. WhatsApp opens with the booking details ready to send.

The booking buttons inside service/package cards use the same WhatsApp flow.

## 16. Changing images

All local images are inside:

```text
assets/images/
```

If you replace an image, keep the same filename and the HTML does not need to be changed.

For example, to replace the hero image:

```text
assets/images/hero.jpg
```

Use a high-resolution landscape image for the best result.

## 17. Recommended image sizes

For best quality:

- Hero: around 1600×900 or larger
- Service/package images: around 1600×900 or larger
- Before/after images: around 1600×1800 or larger
- CTA/background images: around 1600×600 or larger

Avoid very small images because they may look soft on large screens.

## 18. Changing colors

Open `style.css` and edit the variables near the top:

```css
:root {
  --yellow: #ffd000;
  --ink: #071018;
}
```

The current design uses a dark automotive theme with yellow accents.

## 19. Responsive design

The website includes breakpoints for:

- Desktop
- Laptop/tablet
- Mobile
- Small mobile screens

The Services and Packages cards automatically stack on smaller screens.

The Service Area and FAQ also stack vertically on mobile for easier reading.

## 20. Before launch checklist

- [ ] Confirm WhatsApp number
- [ ] Confirm phone number
- [ ] Add Instagram link
- [ ] Add Facebook link
- [ ] Test every WhatsApp button
- [ ] Test booking form
- [ ] Test mobile navigation
- [ ] Test FAQ accordion
- [ ] Check all images
- [ ] Test Chrome desktop
- [ ] Test Android/iPhone browser
- [ ] Check spelling and business details

## 21. Important editing rule

If you only want to change business information, edit `script.js` first.

If you want to change section content or structure, edit `index.html`.

If you want to change appearance, spacing, responsive behavior or hover effects, edit `style.css`.

## 22. No installation required

This is a plain HTML/CSS/JavaScript project. There is currently no Node.js, npm, database or backend requirement.

You can run it directly from `index.html` or with Live Server in VS Code.
