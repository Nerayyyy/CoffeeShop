# Complete Routes Guide - Blend & Co. Coffee Shop SPA

## 🗺️ Application Route Map

```
┌─────────────────────────────────────────────────────────────┐
│                     BLEND & CO. SPA                         │
│                  (React Router v6)                          │
└─────────────────────────────────────────────────────────────┘

📱 MAIN ROUTES (Basic Navigation)
├─ / (Home)
│  ├─ Hero section with background image
│  ├─ "Book Now" button → Event booking modal
│  ├─ Customer reviews section
│  └─ Scroll reveal animations
│
├─ /menu (Menu)
│  ├─ Tabbed interface (Coffee, Pastries, Cold Drinks)
│  ├─ Menu items grid with images
│  ├─ Links to nested routes (see below ↓)
│  └─ Active tab highlighting
│
├─ /about (About)
│  ├─ Company information
│  ├─ Location details
│  ├─ Google Maps integration
│  └─ Toggle map button
│
├─ /apply (Apply)
│  ├─ Team photos gallery
│  ├─ "Apply Now" button → Application modal
│  └─ Job application form
│
└─ /contact (Contact)
   ├─ Contact form
   ├─ Image + form layout
   └─ Form validation

🔗 NESTED ROUTES (Dynamic Routing)
├─ /menu/:category (Menu Detail)
   ├─ /menu/coffee → Coffee selection details
   ├─ /menu/pastries → Pastries details
   └─ /menu/cold → Cold drinks details
   │
   └─ Features:
      ├─ Dynamic content based on URL parameter
      ├─ Available items list
      ├─ Category descriptions
      └─ Multiple back navigation options

🔒 PROTECTED ROUTES (Authentication Required)
└─ /admin (Admin Panel)
   ├─ Login prompt (password: admin123)
   ├─ Admin dashboard
   ├─ Statistics display
   ├─ Admin features list
   └─ Logout button

❌ FALLBACK ROUTE (404 Handler)
└─ /* (Any Invalid URL)
   ├─ Custom 404 page
   ├─ "Page Not Found" message
   └─ Multiple navigation options:
      ├─ Programmatic: navigate('/')
      └─ Declarative: <Link to="/">
```

---

## 🎯 Route Details

### 1. Home Route: `/`
**Component**: `Home.js`
**Features**:
- Hero section with call-to-action
- Event booking modal (React state)
- Customer reviews grid
- Scroll animations

**Navigation From**: All pages
**Navigation To**: All pages

---

### 2. Menu Route: `/menu`
**Component**: `Menu.js`
**Features**:
- Three tabs: Coffee, Pastries, Cold Drinks
- Grid layout for menu items
- Links to nested detail pages
- State-managed tab switching

**Links to Nested Routes**:
- "View Coffee Details →" → `/menu/coffee`
- "View Pastries Details →" → `/menu/pastries`
- "View Cold Drinks Details →" → `/menu/cold`

---

### 3. Menu Detail Routes: `/menu/:category`
**Component**: `MenuDetail.js`
**Dynamic Routes**:

#### `/menu/coffee`
- Coffee selection information
- Available items: Espresso, Cappuccino, Latte, Americano, Mocha
- Back navigation buttons

#### `/menu/pastries`
- Pastries information
- Available items: Red Velvet Cake, Biscoff Cake, Croissant, Danish, Muffins
- Back navigation buttons

#### `/menu/cold`
- Cold beverages information
- Available items: Iced Coffee, Iced Latte, Cold Brew, Frappuccino, Iced Mocha
- Back navigation buttons

**URL Parameter**: `category` (extracted with `useParams()`)
**Navigation**: 
- Link: `<Link to="/menu">`
- Programmatic: `navigate('/menu')`

---

### 4. About Route: `/about`
**Component**: `About.js`
**Features**:
- Company story and mission
- Location information (BGC, Taguig, Manila)
- Google Maps embed
- Toggle button to show/hide map

---

### 5. Apply Route: `/apply`
**Component**: `Apply.js`
**Features**:
- Team workspace gallery (3 images)
- "Apply Now" button
- Job application modal
- Form with validation:
  - Full name
  - Email
  - Phone number
  - Position selection
  - Experience description

---

### 6. Contact Route: `/contact`
**Component**: `Contact.js`
**Features**:
- Split layout (image + form)
- Contact form with validation:
  - Name (required)
  - Email (format validation)
  - Message (min 10 characters)
- Success notifications

---

### 7. Admin Route: `/admin` 🔒
**Component**: `AdminPanel.js`
**Protection**: `ProtectedRoute` wrapper
**Access**: Requires authentication

**Login**:
- Password: `admin123`
- Login prompt for unauthorized users
- Session management

**Features**:
- Dashboard with statistics
- Admin features list
- Logout button (programmatic navigation)

**Navigation**: 
- After logout: `navigate('/')`

---

### 8. Not Found Route: `/*` ❌
**Component**: `NotFound.js`
**Trigger**: Any invalid URL
**Features**:
- Large "404" display
- Friendly error message
- Two navigation options:
  1. **Programmatic**: Button using `navigate('/')`
  2. **Declarative**: Link using `<Link to="/">`

**Examples of URLs that trigger 404**:
- `/random-page`
- `/does-not-exist`
- `/menu/invalid-category`
- Any other undefined route

---

## 🎨 Navigation Methods Demonstrated

### 1. Declarative Navigation (Link Component)
```jsx
import { Link } from 'react-router-dom';

<Link to="/menu">Menu</Link>
<Link to="/menu/coffee">Coffee Details</Link>
```

**Used in**:
- Header navigation
- Footer links
- Menu detail pages
- 404 page

---

### 2. Programmatic Navigation (useNavigate Hook)
```jsx
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();
navigate('/');
navigate('/menu');
```

**Used in**:
- Admin logout button
- 404 "Go Home" button
- Menu detail back button
- After form submissions

---

### 3. Dynamic Routing (useParams Hook)
```jsx
import { useParams } from 'react-router-dom';

const { category } = useParams();
// category = 'coffee' | 'pastries' | 'cold'
```

**Used in**:
- MenuDetail component
- Extracts `:category` from URL
- Displays different content based on parameter

---

## 🔐 Protected Route Implementation

### How It Works:

1. **Route Definition**:
```jsx
<Route 
  path="/admin" 
  element={
    <ProtectedRoute>
      <AdminPanel />
    </ProtectedRoute>
  } 
/>
```

2. **Authentication Check**:
- If authenticated → Show `AdminPanel`
- If not authenticated → Show `LoginPrompt`

3. **Login Process**:
- User enters password
- Correct password: `admin123`
- Authentication state updated
- Page reloads to show admin content

4. **Logout Process**:
- Click "Logout" button
- Authentication state cleared
- Programmatic navigation to home: `navigate('/')`

---

## 🧭 Navigation Flow Examples

### Example 1: Browse Menu Categories
```
1. Click "Menu" in header → /menu
2. Click "View Coffee Details" → /menu/coffee
3. Click "Back to Menu" → /menu
4. Click "View Pastries Details" → /menu/pastries
5. Click "Back to Menu" → /menu
```

### Example 2: Access Protected Area
```
1. Navigate to /admin (manually or via link)
2. See login prompt
3. Enter password: admin123
4. Access granted → Admin dashboard
5. Click "Logout" → Navigate to /
```

### Example 3: Handle Invalid Route
```
1. Type invalid URL: /invalid-page
2. See 404 error page
3. Click "Go Home (Programmatic)" or "Go Home (Link)"
4. Navigate to / (home page)
```

---

## 📋 Quick Route Testing

### Copy-paste these URLs to test:

**Main Routes**:
- http://localhost:3000/
- http://localhost:3000/menu
- http://localhost:3000/about
- http://localhost:3000/apply
- http://localhost:3000/contact

**Dynamic Routes**:
- http://localhost:3000/menu/coffee
- http://localhost:3000/menu/pastries
- http://localhost:3000/menu/cold

**Protected Route**:
- http://localhost:3000/admin (password: admin123)

**404 Testing**:
- http://localhost:3000/random
- http://localhost:3000/does-not-exist
- http://localhost:3000/test123

---

## 🎯 Summary

**Total Routes**: 8 main routes
- **Basic Routes**: 5 (Home, Menu, About, Apply, Contact)
- **Dynamic Routes**: 3 (Menu categories)
- **Protected Routes**: 1 (Admin)
- **Fallback Routes**: 1 (404)

**Navigation Methods**: 3
- Link components (declarative)
- useNavigate hook (programmatic)
- URL parameters (dynamic)

**Interactive Features**: 10+
- Event booking modal
- Job application modal
- Feedback modal
- Menu tabs
- Map toggle
- Contact form
- Newsletter form
- Protected route authentication
- 404 error handling
- Scroll effects

---

**All routes are working without page reloads! 🎉**

