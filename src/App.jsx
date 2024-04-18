import Carte from './Principal';
import { MultipleItems, Pic } from './Principal';
import Reseaux from './Reseaux';
import ShowCard from './CarteMagasin';
import './App.css';
import React,{useState,useEffect,useRef,useLayoutEffect} from 'react';
import { Grid } from '@mui/material';



const shopsToKeep = ["MS SUPPORT","MS SAFETY","MS TOOLS","MS HEAVY","MS INDUSTRY","PRESTATIONS ET SERVICES","MS LOCATION","MS SUPPORT","BOLT AND LADDER COLLERY", "BOLT AND LADDER KOUROU","BOLT AND LADDER SUZINI"]
// shops = shops.body.d.results
// https://prod-20.brazilsouth.logic.azure.com:443/workflows/e233eb8317ff4a318d8e84ac1e3040a4/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=rT65bKZdt26Qt4QwfKfmSQoaspmO80YWtts30UD-DF8




function App() {
  const [shops,fetchShops] = useState(null)
// const inputRef = useRef(null)
const [shop,setShop] = useState(null)

useEffect(() => {
  
  if (shops === null) {
    fetch(import.meta.env.VITE_HERE_URL,{method:"POST"})
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
},[shops])

const shopTabsRef = useRef(null)
  
const updateActiveShopInfo = (e,index) => {
  e.stopPropagation();
  setShop(shops[index])
  shopTabsRef.current.scrollIntoView({ behavior: 'smooth' });
}



const [showElement, setShowElement] = useState(false);
const toggleElement = () => {
  if (!showElement) {
  setShowElement(!showElement);
}
}


  return shops === null ? <p>Chargement</p> :
  <div>


    <Pic></Pic>
    <Carte></Carte>
  <MultipleItems toggleElement={toggleElement} updateShopInfo={updateActiveShopInfo} shops={shops}></MultipleItems>
  {/* <MyCarousel toggleElement={toggleElement} updateShopInfo={updateActiveShopInfo} shops={shops}></MyCarousel> */}

<div ref={shopTabsRef}>
<ShowCard shop={shop} showElement={showElement} shops={shops}></ShowCard>
</div>
<Reseaux></Reseaux>
 </div>


}

export default App;
