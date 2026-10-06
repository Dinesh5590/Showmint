# TIXORA - Online Ticket Booking System

## Modules
### User Module
- Signup and persistent account storage using Local Storage
- User/Admin role selection on both Login and Signup
- Mobile number login
- Login required before using the website
- Location search and location selection
- Browse Movies, Concerts and Events
- Search experiences
- Seat selection
- Ticket booking
- Digital ticket
- My Bookings
- Logout

### Admin Module
- Admin login
- Dashboard
- Total events/users/bookings/revenue
- Add events
- Delete events
- Manage event details

## Technologies
HTML, CSS and JavaScript only.
CSS Grid and Flexbox are used for the UI.
Local Storage is used for users, current session, events, location and bookings.

## Admin Login
Mobile: 9999999999
Password: admin123

## Important
Once a user signs up, the account remains saved in the browser's Local Storage.
The user must log in to access the application.
The selected location is also saved in Local Storage and remains after refreshing the page.

## Run
Extract the ZIP and open index.html in a browser.


Ticket Download:
After booking, users can download a standalone HTML ticket or use Print / Save as PDF from the ticket screen.


## Real-Time Events
ShowMint now includes a **Real-Time Events** section powered by the real-time API Discovery API.
The API can search events by city and returns current event listings, dates, venues, images and event links.

### Setup
1. Create a real-time API Developer account and obtain a Discovery API key.
2. Login to ShowMint as Admin.
3. Open Admin Dashboard.
4. Paste the API key into **Live Event API** and save it.
5. Open **🔴 Live Events**.
6. Select a location and press **Refresh Events**.

The API key is stored in browser Local Storage for this frontend-only college project.
real-time API states that its Discovery API supports browser CORS and requires an API key.


Updated version: real-time event/API integration has been removed. The site now includes 12 movies, 12 concerts, and 12 events by default.
