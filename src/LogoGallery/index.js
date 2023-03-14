import React from "react";
import {Typography,Box,Grid} from '@mui/material';

// import MSSAFETY from "../ressources/MS SAFETY.png"
// let tempgallery = () => {

// }

function LogoGallery ({updateShopInfo,shops}) {
  
    return shops === null ? <div></div> : 
      <><Typography sx={{mt: 3}} fontSize={20}>Choisir un magasin pour voir les informations qui le concerne</Typography>
      <Grid sx={{mb: 3}} container spacing={1} justifyContent="center"
      alignItems="center">
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
      </>
    
}

export default LogoGallery;
