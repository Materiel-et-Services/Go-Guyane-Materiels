import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import LogoGallery from "./LogoGallery";
import ShopTabs from "./ShopTabs";
import shops from "./ressources/datamagasin.json"

import React,{useState} from 'react';

shops = shops.body.d.results



function App() {

const [shop,setShop] = useState(null)
  
const seeShopInfo = () => {
  console.log("ca marche")
  return setShop(shops[0])
}

  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <LogoGallery getShopInfo={seeShopInfo}></LogoGallery>
        <ShopTabs shop={shop}></ShopTabs>
      </header>
    </div>
  );
}

export default App;
