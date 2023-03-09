import React from "react";
import {Typography,Box,Grid} from '@mui/material';




function ShopTabs ({shop}) {
  
    return (shop === null ? <p>Choisir un magasin pour voir les informations qui le concerne</p> : <p>{shop.Title}</p>)
}

export default ShopTabs;
