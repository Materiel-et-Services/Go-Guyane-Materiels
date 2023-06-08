import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import LogoGallery from "./LogoGallery";
import ShopTabs from "./ShopTabs";
import Map from "./Map";

import React,{useState,useEffect,useRef,useLayoutEffect} from 'react';
const shopsToKeep = ["MS SUPPORT","MS SAFETY","MS TOOLS","MS HEAVY","BOLT AND LADDER KOUROU","MS INDUSTRY","PRESTATIONS ET SERVICES","MS LOCATION","MS SUPPORT","BOLT AND LADDER COLLERY","BOLT AND LADDER SUZINI"]
// shops = shops.body.d.results
// https://prod-20.brazilsouth.logic.azure.com:443/workflows/e233eb8317ff4a318d8e84ac1e3040a4/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=rT65bKZdt26Qt4QwfKfmSQoaspmO80YWtts30UD-DF8


function App() {
  const [shops,fetchShops] = useState(null)
// const inputRef = useRef(null)
const [shop,setShop] = useState(null)

useEffect(() => {
  
  if (shops === null) {
    fetch(process.env.REACT_APP_HERE_URL,{method:"POST"})
  .then((response) => {
    
    return response.json()
  }).then( (responseBody) => {
   let shopsList = responseBody.d.results.filter((element) => {
      return shopsToKeep.find((itemArray) => {
        return itemArray === element.Title
      })
   })
   fetchShops(shopsList)
  })
  }
})

const shopTabsRef = useRef(null)
  
const updateActiveShopInfo = (e,index) => {
  e.stopPropagation();
  setShop(shops[index])
  shopTabsRef.current.scrollIntoView({ behavior: 'smooth' });
}

  return shops === null ? <p>En chargement</p> :
    <div className="App">
      {/* <header className="App-header"> */}
        <Header id="pageHeader"></Header>
    {/* // </header> */}
     <LogoGallery  id="shopSelectorGallery" updateShopInfo={updateActiveShopInfo} shops={shops}></LogoGallery>
        <div ref={shopTabsRef}>
            <ShopTabs id="shopInfoViz" shop={shop}></ShopTabs>
        </div>
        <Map id="shopMaps" shop={shop} shopsList={shops}></Map>
    </div>
  ;
}

export default App;
