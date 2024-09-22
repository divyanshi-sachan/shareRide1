import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import Navbar from './components/navbar';
import Signup from './components/Signup';
import SignInPage from './components/SignIn'; 
import Carpool from './components/carpooling'; 
import Home from './components/home';
import BookPage from './components/book';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import TermsAndConditionsPage from './components/Terms';
import Error from './components/Error';
const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_FRONTEND_API;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

function App() {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <Router>
        <Header />
        <ConditionalNavbar />
        <Routes>
          <Route path="/" element={<Carpool />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/home" element={<Home />}/>
          <Route path="/book" element={<BookPage />}/>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms" element={<TermsAndConditionsPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </ClerkProvider>
  );
}

function ConditionalNavbar() {
  const location = useLocation();
  return location.pathname === '/' ? <Navbar /> : null;
}

function Header() {
  return (
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
}
export default App;

