
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Shipment from './Components/Shipment/Shipment';
import { createContext, useState } from 'react';
import Category from './Components/Category/Category';

export const CategoryContext = createContext();

function App() {
  const [category ,setCategory] = useState(0)
  return (
    <CategoryContext.Provider value={[category,setCategory]}>
     <Header/>
     <Home/>
     <Shipment/>
     </CategoryContext.Provider>
  );
}

export default App;
