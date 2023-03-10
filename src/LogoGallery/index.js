import React from "react";
import {Typography,Box,Grid} from '@mui/material';

// import MSSAFETY from "../ressources/MS SAFETY.png"
// let tempgallery = () => {

// }

function LogoGallery ({updateShopInfo,shops}) {
  console.log(shops)
    return shops === null ? <div></div> : 
      <Grid container>
        {
          shops.map((imageItem,index) => {
            return (
              <Grid item  key={index} xs={4} onClick={updateShopInfo}>
        
      
      <img data-id={index} src={window.location.origin + '/img/' + imageItem.Title + ".png"} width="90%" >
        
      </img>
      
        </Grid>
            )
          })
        }
        
      </Grid>
      
    
}

export default LogoGallery;
