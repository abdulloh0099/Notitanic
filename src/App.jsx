import React from 'react'
import "./App.css"
import headerlogo from "./assets/header-logo.png"
import avatar from "./assets/Gleb.png"
import hometitle from "./assets/title.png"
const App = () => {
  return (
    <div>
      <header>
          <group-1 className="header-logo">
            <img src={headerlogo} className="header-img" />
            <h1 className="header-h1">notitanic</h1>
          </group-1>
          <group-2 className="pages">
            <h1 className="page-h1">Home</h1>
            <h1 className="page-h1">About me</h1>
            <h1 className="page-h1">Portfolio</h1>
            <h1 className="page-h1">Contact</h1>
          </group-2>
      </header>
      <home-page>
        <img src={hometitle} className="home-title" />
        <img src={avatar} className="home-avatar" />
      </home-page>
    </div>
  )
}

export default App
