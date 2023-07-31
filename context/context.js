// Importing necessary modules and hooks
import { createContext, useContext, useState } from 'react'
 
// Creating a new context named GlobalContext
export const GlobalContext = createContext()
 
export const GlobalProvider = ({ children }) => {
    // Setting up the state variables using useState hook
    const [search, setSearch] = useState(''); // State for search value
    const [category, setCategory] = useState('all'); // State for category value
    const [navBar, setNavBar] = useState(false); // State for sidebar status
    
    // Creating an object containing the state variables
    const value = {
        setSearch,
        search,
        category,
        setCategory,
        navBar,
        setNavBar
    };
    
    // Providing the value object to all child components through the GlobalContext.Provider
    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    );
}
