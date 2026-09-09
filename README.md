# Akmol Foam Website

Commercial website developed for **ТОО «Акмолинские пенопласты»**, a polystyrene foam supplier based in Astana, Kazakhstan.

The project was built as a real client website with a focus on clear product presentation, responsive design, practical lead generation, and a simple customer journey from product selection to order inquiry.

## Live Website

https://akmol.penoplast-astana.com/

---

## Overview

The website allows customers to:

- Explore available polystyrene foam products
- View current pricing
- Calculate estimated order costs
- Configure sheet dimensions and quantities
- Generate a prepared order request
- Send the request directly through WhatsApp
- View delivery, pickup, payment, and contact information

The site is designed for both desktop and mobile users and includes mobile-specific navigation and quick contact actions.

---

## Tech Stack

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Vercel**
- **Git / GitHub**

---

## Key Features

### Product Catalogue & Pricing

Product information and prices are presented in a structured format to help customers compare available materials and choose an appropriate option.

Shared business information and reusable product data are organized separately to make updates easier to maintain.

### Interactive Price Calculator

The calculator allows users to enter product parameters such as:

- Material
- Length
- Width
- Thickness
- Quantity

It then calculates an estimated order cost based on the selected product and dimensions.

### WhatsApp Order Flow

Instead of requiring a traditional backend form, the website generates a structured WhatsApp message containing the customer's order information.

This keeps the ordering process simple while matching the communication workflow already used by the business.

### Responsive Design

The interface was designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile

The mobile version includes dedicated navigation and quick-access contact controls.

### Delivery & Contact Integration

The website provides:

- Delivery information
- Pickup details
- Business hours
- Phone contact
- WhatsApp contact
- Map integration

---

## Project Structure

```text
app/
├── calculator/
├── delivery/
├── products/
├── layout.tsx
├── page.tsx
└── globals.css

components/
├── layout/
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── MobileBottomBar.tsx
│   └── SiteLayout.tsx
│
├── sections/
│   ├── CalculatorSection.tsx
│   ├── ContactsSection.tsx
│   ├── DeliverySection.tsx
│   ├── FAQSection.tsx
│   ├── HeroSection.tsx
│   ├── PricesSection.tsx
│   ├── ProductsSection.tsx
│   └── ...
│
└── shared/
    ├── Button.tsx
    ├── Container.tsx
    ├── PhoneButton.tsx
    └── SectionHeader.tsx

lib/
├── data.ts
└── site.ts
```

---

## Architecture

The project separates reusable UI, page sections, business data, and site configuration.

Business information and site configuration are centralized in `lib/site.ts`, while reusable product, pricing, FAQ, and other content is organized in `lib/data.ts`.
This makes the website easier to update without modifying individual UI components.

---

## Development

Clone the repository:

```bash
git clone https://github.com/drummax92/akmol-foam-website.git
cd akmol-foam-website
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

Create a production build:

```bash
npm run build
```

---

## Project Background

This project was developed for a real business rather than as a tutorial or coursework project.

The main goals were to:

- Translate real business requirements into a working web product
- Build a responsive interface for customers on different devices
- Create reusable components instead of duplicating UI
- Make product and business information easy to maintain
- Reduce friction between browsing products and contacting the business
- Deploy and maintain a production-ready website

---

## Author

**Maxim Sarukhanov**  
Computing Science student at Simon Fraser University

GitHub: [@drummax92](https://github.com/drummax92)
