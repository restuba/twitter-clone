import React from 'react'
import SelectMenus from './assets/components/SelectMenus'
import Navbar from './assets/components/Navbar';
import ListProfile from './assets/components/ListProfile';
import { GlobalProvider } from './assets/context/Context';

function App() {
  return(
    <div className="main h-full bg-secondary">
      <Navbar />
      <SelectMenus/>
      <main className="p-4 md:px-8 text-center">
        <ListProfile />
      </main>
    </div>
  )
}

export default GlobalProvider(App);
