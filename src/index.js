// Import react
import React from 'react';
import ReactDOM from 'react-dom/client'; 
import MyApp from './App'


// Get a reference to div with ID root
const el = document.getElementById('root');

// Tell react to take control of that element
const root = ReactDOM.createRoot(el);

// Show the component on the screen.
root.render(<MyApp />);