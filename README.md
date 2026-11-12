# ShowMint — React Online Ticket Booking System

This is the React version of ShowMint. It keeps the dark/pink design and includes user/admin modules, event management, venue-specific seat layouts, bookings and downloadable tickets.

## Run the project
1. Install Node.js (LTS).
2. Extract this folder and open it in VS Code.
3. Open the terminal in the project folder.
4. Run `npm install`
5. Run `npm run dev`
6. Open the local URL shown by Vite (usually http://localhost:5173).

## Demo login
- Admin: `9999999999` / `admin123`
- User: `8888888888` / `user123`

## React concepts implemented
- **JSX:** UI is written using JSX in `.jsx` files.
- **Functional components:** Header, EventCard, EventList, AuthModal, LocationModal, BookingModal, TicketModal and Admin.
- **Props:** Parent components pass event data and callback functions to child components.
- **State (`useState`):** Forms, selected seats, modal visibility, current ticket and edit form.
- **Effects (`useEffect`):** Persist events, users, current session, bookings, seats and location to Local Storage.
- **Context API (`createContext`, `useContext`):** Shared app data is provided by `AppProvider` and read with `useApp`.
- **Custom Hook:** `useLocalStorage` demonstrates reusable Local Storage state logic.
- **React Router:** Routes for Home, Movies, Concerts, Events, Search, My Bookings and Admin.
- **Conditional rendering:** Role-based pages, empty states, modal display, booked seats and add/update form states.
- **List rendering and keys:** Events, seats, locations and bookings are rendered with `.map()` and stable keys.
- **Event handling:** Form submit, input changes, seat selection, login, booking, editing and deleting.
- **Controlled forms:** Form values are managed by React state.
- **Derived data / `useMemo`:** Popular events, seat layouts and admin revenue calculations.
- **Component composition:** App combines reusable components into complete pages.

## Main folder structure
```
src/
  components/
    Header.jsx
    EventCard.jsx
    EventList.jsx
    AuthModal.jsx
    LocationModal.jsx
    BookingModal.jsx
    TicketModal.jsx
  hooks/
    useLocalStorage.js
  pages/
    Admin.jsx
  state/
    AppContext.jsx
  App.jsx
  main.jsx
  styles.css
```

## Features
- User signup/login and admin login.
- Add, update and delete events in Admin Dashboard.
- Search and browse movies, concerts and events.
- Theatre-specific seating capacity and layout.
- PVR: 120 seats; INOX: 126; Cinepolis: 140; AMB: 168; other venues receive deterministic layouts.
- Booked seats remain unavailable for the same event/venue/show.
- My Bookings and downloadable HTML tickets with customer, booking and payment-demo details.

## Important project limitations
This is a frontend college-project demonstration. Login credentials and data are stored in browser Local Storage, so this is not secure production authentication. Payment is marked as demo-paid; no real payment is collected. For a production app, use a backend API/database, secure authentication, payment gateway, server-side seat locking and QR-code validation.
