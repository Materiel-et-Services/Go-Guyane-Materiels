import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import LogoGallery from "./LogoGallery";
import ShopTabs from "./ShopTabs";


import React,{useState,useEffect,useRef} from 'react';
const shopsToKeep = ["MS SUPPORT","MS SAFETY","MS TOOLS","MS HEAVY","BOLT AND LADDER KOUROU","MS INDUSTRY","PRESTATIONS ET SERVICES","MS LOCATION","MS SUPPORT","BOLT AND LADDER COLLERY","BOLT AND LADDER SUZINI"]
// shops = shops.body.d.results
// https://prod-20.brazilsouth.logic.azure.com:443/workflows/e233eb8317ff4a318d8e84ac1e3040a4/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=rT65bKZdt26Qt4QwfKfmSQoaspmO80YWtts30UD-DF8


function App() {
  const [shops,fetchShops] = useState(null)
// const inputRef = useRef(null)
const [shop,setShop] = useState(null)

useEffect(() => {
  console.log(shop)
  if (shops === null) {
    fetch("https://prod-20.brazilsouth.logic.azure.com:443/workflows/e233eb8317ff4a318d8e84ac1e3040a4/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=rT65bKZdt26Qt4QwfKfmSQoaspmO80YWtts30UD-DF8",{method:"POST"})
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
  
const updateActiveShopInfo = (e) => {
  
  return setShop(shops[e.target.dataset.id])
}

  return shops === null ? <p>En chargement</p> :
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <LogoGallery  updateShopInfo={updateActiveShopInfo} shops={shops}></LogoGallery>
        <ShopTabs shop={shop}></ShopTabs>
      </header>
    </div>
  ;
}

export default App;
