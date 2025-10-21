# Blend & Co. Coffee Shop - React SPA

A fully functional Single Page Application (SPA) built with React and React Router DOM for a coffee shop business. This application features smooth navigation, dynamic routing, protected routes, and modern UI/UX design.

## 🚀 Features Implemented

### 1. **Single Page Application (SPA)**
- Built with React and React Router DOM
- 5 main sections: Home, Menu, About, Apply, Contact
- Smooth navigation without page reloads
- Fixed header with dynamic background on scroll

### 2. **React Router Features**

#### Basic Routing
- `/` - Home page with booking modal and customer reviews
- `/menu` - Menu page with tabbed interface
- `/about` - About page with location and map
- `/apply` - Careers page with application form
- `/contact` - Contact page with contact form

#### Dynamic Routing (Nested Routes)
- `/menu/:category` - Dynamic menu detail pages
  - `/menu/coffee` - Coffee selection details
  - `/menu/pastries` - Pastries details
  - `/menu/cold` - Cold drinks details

#### Protected Routes
- `/admin` - Protected admin panel (requires authentication)
- Demo password: `admin123`
- Features login prompt for unauthorized access

#### 404 Page
- Custom 404 Not Found page
- Programmatic navigation back to home
- Displays for any invalid routes

### 3. **Programmatic Navigation**
- Multiple examples throughout the app
- `useNavigate()` hook for programmatic routing
- Both Link components and navigate() function demonstrated
- Back buttons using programmatic navigation

### 4. **Interactive Features**
- **Modals**: Event booking, job application, feedback
- **Forms**: Contact form, booking form, application form, newsletter
- **Tabbed Interface**: Menu categories with smooth switching
- **Toggle Map**: Show/hide Google Maps integration
- **Scroll Effects**: Reveal animations on scroll
- **Dynamic Navbar**: Background changes on scroll

### 5. **Component Structure**
```
src/
├── components/
│   ├── Header.js          # Navigation header
│   ├── Footer.js          # Footer with newsletter & feedback
│   └── ProtectedRoute.js  # Authentication wrapper
├── pages/
│   ├── Home.js           # Landing page with reviews
│   ├── Menu.js           # Menu with tabs & nested route links
│   ├── MenuDetail.js     # Dynamic menu category details
│   ├── About.js          # About & location page
│   ├── Apply.js          # Job application page
│   ├── Contact.js        # Contact form page
│   ├── AdminPanel.js     # Protected admin area
│   └── NotFound.js       # 404 error page
├── App.js                # Main routing configuration
├── App.css               # All styling (preserved from original)
└── index.js              # React entry point
```

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Step 1: Navigate to Project Directory
```bash
cd coffee-shop-spa
```

### Step 2: Install Dependencies
```bash
npm install
```

This will install:
- React
- React DOM
- React Router DOM
- All other required dependencies

### Step 3: Start Development Server
```bash
npm start
```

The application will open automatically at `http://localhost:3000`

## 🎯 How to Use the Application

### Navigation
1. Use the header navigation to switch between pages
2. No page reloads - all navigation is instant
3. Footer links also provide navigation

### Dynamic Routing Examples
1. Go to the **Menu** page
2. Click on "View Coffee Details →" buttons at the top
3. This demonstrates dynamic routing with URL parameters
4. Use "Back to Menu" buttons to return (both Link and programmatic)

### Protected Route Example
1. Try to access `/admin` directly in the URL
2. You'll see a login prompt
3. Enter password: `admin123`
4. Access granted to admin panel
5. Click "Logout" to return to unauthenticated state

### 404 Page Example
1. Navigate to any invalid route (e.g., `/invalid-page`)
2. You'll see the custom 404 page
3. Use either button to return home:
   - "Go Home (Programmatic)" - uses `navigate('/')`
   - "Go Home (Link)" - uses `<Link to="/">`

### Interactive Features
- **Book Event**: Click "Book Now" on home page
- **Apply for Job**: Click "Apply Now" on apply page
- **Contact Us**: Fill out form on contact page
- **Feedback**: Click "Feedback" in footer
- **Newsletter**: Subscribe in footer
- **Toggle Map**: Show/hide map on about page

## 🔒 Protected Routes

The application demonstrates protected routes using a simple authentication system:

- **Protected Route**: `/admin`
- **Demo Password**: `admin123`
- Features include:
  - Login prompt for unauthorized users
  - Redirect protection
  - Logout functionality
  - Session management

**Note**: This is a demo implementation. In production, use proper authentication with backend integration.

## 🎨 Design & Styling

- **Original CSS Preserved**: All your original styling from `style.css` has been maintained
- **Responsive Design**: Works on all screen sizes
- **Color Scheme**: Coffee shop theme with brown and cream tones
- **Animations**: Smooth transitions and hover effects
- **Modern UI**: Clean, professional design

## 📱 Pages Overview

### Home (`/`)
- Hero section with background image
- "Book Now" button opens event booking modal
- Customer reviews section
- Smooth scroll effects

### Menu (`/menu`)
- Tabbed interface for Coffee, Pastries, Cold Drinks
- Grid layout with images and prices
- Links to nested detail pages
- Scroll reveal animations

### Menu Details (`/menu/:category`)
- Dynamic routing based on category
- Detailed information about each category
- List of available items
- Multiple navigation options (demonstrates programmatic routing)

### About (`/about`)
- Company information
- Location details
- Google Maps integration with toggle
- Professional layout

### Apply (`/apply`)
- Team photos gallery
- Job application modal
- Form validation
- Success notifications

### Contact (`/contact`)
- Contact form with validation
- Image and form layout
- Email format checking
- Message length validation

### Admin Panel (`/admin`) - Protected
- Requires authentication
- Dashboard with statistics
- Admin features list
- Logout functionality

### 404 Not Found (`*`)
- Custom error page
- Multiple navigation options
- Clean, user-friendly design

## 🛠️ Technologies Used

- **React** (v18) - UI library
- **React Router DOM** (v6) - Routing and navigation
- **React Hooks** - useState, useEffect, useNavigate, useParams
- **CSS3** - Styling and animations
- **JavaScript (ES6+)** - Modern JavaScript features

## 📋 Available Scripts

- `npm start` - Run development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App (not recommended)

## 🌟 Key Features Demonstrated

### React Router Concepts
✅ BrowserRouter setup
✅ Routes and Route components
✅ Link component for navigation
✅ useNavigate() hook for programmatic navigation
✅ useParams() hook for dynamic routes
✅ Nested routes structure
✅ Protected routes with authentication
✅ 404 fallback route

### React Concepts
✅ Functional components
✅ React Hooks (useState, useEffect)
✅ Props and state management
✅ Event handling
✅ Conditional rendering
✅ Form handling and validation
✅ Component composition

## 🔗 Route Structure

```
/                          → Home page
/menu                      → Menu page
/menu/coffee              → Coffee details (nested)
/menu/pastries            → Pastries details (nested)
/menu/cold                → Cold drinks details (nested)
/about                     → About page
/apply                     → Careers page
/contact                   → Contact page
/admin                     → Admin panel (protected)
/*                         → 404 Not Found
```

## 📝 Notes

- All modals and interactive features converted to React
- No jQuery dependencies - pure React
- Original design maintained completely
- SEO-friendly routing
- Browser history support
- Fast and responsive

## 🚀 Deployment

To deploy this application:

1. Build the production version:
   ```bash
   npm run build
   ```

2. Deploy the `build` folder to your hosting service:
   - Netlify
   - Vercel
   - GitHub Pages
   - AWS S3
   - Any static hosting service

3. Configure your server for SPA routing (redirect all routes to index.html)

## 📧 Support

For any questions or issues, please contact us through the Contact page or open an issue in the repository.

---

**Built with ❤️ using React and React Router DOM**

© 2025 Blend & Co. All rights reserved.
