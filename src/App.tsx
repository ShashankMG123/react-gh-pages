import React, { useState } from 'react';
import './App.css';
import Sidebar from './Components/SideBar/SideBar';
import MainContent from './Components/MainContent/MainContent';
import Resume from './Components/Resume/Resume';
import { NavBarOptions } from './Enums/NavBarEnum';
import NavBar from './Components/NavBar/NavBar';


function App() {
  function renderMainContent() {
    if(navLocation === NavBarOptions.About){
      return(<MainContent />)
    }
    else {
      return(<Resume />)
    }
  }

  function NavBarToggle(page: NavBarOptions) {
    console.log(page)
    setNavLocation(page)
  }

  const [navLocation, setNavLocation] = useState(NavBarOptions.About)
  return (
    <div className="App">
        <main>
          <Sidebar />
          <div className="main-content">
            <NavBar navOnClick={NavBarToggle} page={navLocation}/>
            {renderMainContent()}
          </div>
        </main>
    </div>
  );
}

export default App;
