# College Event Management System

A responsive, modern web application for managing college events where students can view upcoming events, register for events, and view event schedules.

## Project Overview

This is a complete frontend implementation of a College Event Management System built with **Bootstrap 5**, **HTML5**, **CSS3**, and **JavaScript**. The system provides a user-friendly interface for students to explore events, register for them, and access important event information.

## Features

### ✨ Core Features
- **Responsive Design** - Works seamlessly on all devices (mobile, tablet, desktop)
- **Event Management** - View, filter, and search for events
- **User Registration** - Simple and intuitive registration form
- **Event Schedule** - Interactive event schedule with timeline view
- **Photo Gallery** - Responsive image gallery with filtering
- **FAQ Section** - Comprehensive FAQ with accordion component
- **Contact Management** - Contact form and coordinator details
- **Local Storage** - Form submissions saved to browser storage

### 🎨 Bootstrap Components Used
- **Navbar** - Sticky navigation with responsive menu
- **Carousel** - Hero section slider with call-to-action
- **Cards** - Event cards with consistent styling
- **Forms** - Validated registration and contact forms
- **Tables** - Responsive event schedule table with striping and hover effects
- **Accordion** - FAQ section with collapsible items
- **Alerts** - Success and error messages
- **Buttons** - Various button styles (primary, outline, etc.)
- **Grid System** - Responsive layout using Bootstrap grid
- **Modal Support** - Ready for modal implementations

## Project Structure

```
College_Event_Management_System/
├── index.html              # Home page with hero section
├── events.html             # Events listing page with 6+ event cards
├── registration.html       # Event registration form
├── schedule.html           # Event schedule with table and timeline
├── gallery.html            # Photo gallery with filtering
├── faq.html                # FAQ section with accordion
├── contact.html            # Contact form and coordinator details
├── styles.css              # Custom CSS styling
├── script.js               # JavaScript for validation and interactivity
└── README.md               # Project documentation
```

## Pages Description

### 1. **Home Page (index.html)**
- Navigation bar with links to all pages
- Hero carousel with multiple event highlights
- Event highlights section with benefits
- Upcoming events preview
- Call-to-action section
- Footer with contact information

**Key Sections:**
- Navbar with sticky positioning
- Responsive carousel with gradient backgrounds
- Event cards preview
- Social media links in footer

### 2. **Events Page (events.html)**
- Complete list of all events (6+ cards)
- Filter events by category
- Search functionality
- Month-based filtering
- Responsive event cards with details

**Events Included:**
- Technical Quiz
- Hackathon
- Poster Presentation
- Coding Contest
- Project Expo
- Cultural Fest

### 3. **Registration Page (registration.html)**
- Comprehensive registration form with fields:
  - Student Name
  - Roll Number
  - Branch
  - Email
  - Mobile Number
  - Event Selection (multiple events)
  - Terms & Conditions checkbox
- Form validation with error messages
- Success notification
- Registration guidelines section

### 4. **Schedule Page (schedule.html)**
- Event schedule table with:
  - Date
  - Time
  - Event Name
  - Venue
  - Status
  - Registration Action
- Responsive table design (table-striped, table-hover)
- Multiple months display (December 2024, January 2025)
- Timeline view of events
- Visual status badges

### 5. **Gallery Page (gallery.html)**
- Responsive image gallery (12+ items)
- Category filtering (All, Technical, Cultural, Sports)
- Image cards with hover effects
- Gallery overlay with event details
- Gallery statistics section

### 6. **FAQ Page (faq.html)**
- Comprehensive FAQ using Bootstrap accordion
- 10+ frequently asked questions covering:
  - How to register
  - Registration fees
  - Multiple event participation
  - Required documents
  - Prizes and rewards
  - Cancellation policy
  - Event updates
  - Password recovery
  - Team registrations
  - Event rescheduling
- Expandable/collapsible items
- Support contact information

### 7. **Contact Page (contact.html)**
- Contact form with:
  - Name, Email, Phone
  - Subject selection
  - Message textarea
  - Agreement checkbox
- Contact information cards (Address, Phone, Email, Hours)
- Event coordinator details (4 coordinators)
- Social media links section
- Location/Map placeholder

## Technical Details

### Technologies Used
- **HTML5** - Semantic markup
- **CSS3** - Custom styling and animations
- **Bootstrap 5.3.0** - Responsive framework
- **JavaScript (ES6+)** - Form validation and interactivity
- **Font Awesome 6.0.0** - Icons
- **Local Storage** - Data persistence

### Features Implemented

#### Form Validation
- Student name validation (minimum 3 characters)
- Roll number format validation
- Email format validation
- Mobile number validation (10 digits)
- Event selection requirement
- Terms & conditions requirement

#### Interactivity
- Event filtering and search
- Gallery filtering by category
- Form submission with success messages
- Smooth scrolling navigation
- Mobile-responsive navigation menu
- Carousel auto-rotation

#### Data Management
- Registration data saved to localStorage
- Contact messages saved to localStorage
- Export functionality for admin
- Console utility functions for debugging

#### Responsive Design
- Mobile-first approach
- Breakpoints for mobile (576px), tablet (768px), desktop
- Responsive typography
- Responsive grid layouts
- Touch-friendly interface

### CSS Features
- CSS Grid for gallery layout
- CSS Flexbox for responsive layouts
- CSS Animations and transitions
- CSS Variables for consistent theming
- Custom scrollbar styling
- Print-friendly styles

### JavaScript Functionality
- Form validation with custom error messages
- Event filtering and searching
- Gallery category filtering
- Local storage data management
- Smooth scroll behavior
- Mobile menu toggle
- Input formatting (mobile number)
- Date and time formatting utilities
- Console debugging tools

## How to Use

### Opening the Website
1. Open any HTML file in your web browser (index.html is the home page)
2. Navigate using the top navbar to different sections

### Registering for Events
1. Click on "Registration" in the navbar
2. Fill in all required fields
3. Select one or more events
4. Check the terms & conditions
5. Click "Submit Registration"
6. You'll see a success message (data saved to browser storage)

### Viewing Events
1. Go to "Events" page from navbar
2. Use filters to find specific events
3. Search by event name
4. Filter by category or month
5. Click "Register Now" to register

### Checking Schedule
1. Navigate to "Events" > "Schedule" (or add a link)
2. View events by month in table format
3. Check the timeline view

### Exploring Gallery
1. Go to "Gallery" from navbar
2. Use category filters to sort photos
3. Hover over gallery items for details

### Contacting Support
1. Go to "Contact" page
2. Fill the contact form
3. View event coordinator details
4. Follow social media links

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Responsive Breakpoints

- **Mobile (< 576px)** - Optimized for phones
- **Tablet (576px - 768px)** - Optimized for tablets
- **Desktop (≥ 768px)** - Full layout experience

## Installation & Deployment

### Local Setup
1. Download all files to a folder
2. Open `index.html` in your browser
3. No server or installation required (static files)

### Deployment Options
- **GitHub Pages** - Upload to GitHub repository
- **Netlify** - Drag and drop folder
- **Vercel** - Connect GitHub repository
- **Any Web Host** - Upload files via FTP

## Customization

### Changing Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    /* ... other colors ... */
}
```

### Adding New Events
Edit event cards in `events.html` and `index.html`

### Modifying Coordinator Details
Update coordinator information in `contact.html`

### Changing Images
Replace gradient backgrounds with actual image URLs

## Data Storage

All form submissions are stored in the browser's localStorage:

### Registration Data
- Stored in: `eventRegistrations`
- Contains: name, rollNumber, branch, email, mobile, events, timestamp

### Contact Messages
- Stored in: `contactMessages`
- Contains: name, email, phone, subject, message, timestamp

**Note:** Data is cleared when browser cache is cleared.

## JavaScript Console Tools

Open browser console (F12) and use:
```javascript
displayStoredRegistrations()  // View all registrations
displayStoredMessages()       // View all contact messages
exportRegistrations()         // Export registrations as JSON
clearAllData()                // Clear all stored data
```

## Future Enhancements

- Backend database integration
- Email notifications
- Payment integration for paid events
- Admin dashboard
- Email confirmation system
- Event reminders
- User profile management
- Event ratings and reviews
- Video gallery support
- Real map integration
- Multi-language support

## Browser DevTools Tips

### Testing Responsive Design
1. Open DevTools (F12)
2. Click "Toggle device toolbar" (Ctrl+Shift+M)
3. Select different device sizes
4. Test all features on different screen sizes

### Testing Data Storage
1. Open DevTools → Application tab
2. Check "Local Storage"
3. View stored registration and contact data

## Performance Tips

- Images are placeholder gradients (lightweight)
- No external dependencies except Bootstrap and Font Awesome (loaded from CDN)
- CSS animations use GPU-accelerated properties
- Form validation happens client-side (instant feedback)

## Support & Maintenance

- Check console for debugging messages
- All form data is validated before submission
- Responsive design automatically adapts to screen size
- Mobile menu closes after navigation

## License

This project is created for educational purposes.

## Author

Created as part of Full Stack Development Training

## Version

1.0.0 - Initial Release (2024)

---

## Quick Start Guide

1. **Home Page** → Click any "Register Now" button
2. **Events Page** → Browse and filter events
3. **Registration** → Fill form and submit
4. **Schedule** → View event dates and times
5. **Gallery** → Browse event photos
6. **FAQ** → Find answers to questions
7. **Contact** → Send message or find coordinator

**Enjoy managing your college events! 🎉**
