import React from "react";
import {Typography,Box,Grid} from '@mui/material';
import MSSAFETY from "../ressources/MSSAFETY.png"
let tempgallery = [MSSAFETY,MSSAFETY,MSSAFETY,MSSAFETY,MSSAFETY,MSSAFETY]

function LogoGallery () {
    return (
      <Grid container>
        {
          tempgallery.map((imageItem,index) => {
            return (
              <Grid item  key={index} xs={4}>
        
      
      <img src={imageItem} width="90%" >
        
      </img>
      
        </Grid>
            )
          })
        }
        
      </Grid>
      
    )
}

export default LogoGallery;
