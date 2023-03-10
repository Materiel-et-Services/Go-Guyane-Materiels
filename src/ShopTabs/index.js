import React from "react";
import {Typography,Box,Grid,Button} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';




function ShopTabs ({shop}) {
    
    return (shop === null ? <p>Choisir un magasin pour voir les informations qui le concerne</p> : 
    <div>
    <div>
        <Typography>{shop.Title}</Typography>
        <Typography>{shop.Descriptif}</Typography>

        <Typography>Lundi au Vendredi {shop.Horaires}</Typography>
        <article>
        <Typography>{shop.Street}</Typography>
        </article>
    </div>
    <Grid container>
        <Grid item justifyContent={"center"}>
            <Button href={"tel:".concat(String(shop.T_x00e9_l_x00e9_phone))} variant="contained">Appeler {shop.Title}</Button>
        </Grid>
        <Grid item justifyContent={"center"}>
            <Button href={"mailto:" + "bruno.sosin@matservgf.com"} variant="contained">Envoyer un email à {shop.Title}</Button>
        </Grid>
        <Grid item justifyContent={"center"}>
            <Button href={"https://www.facebook.com/profile.php?id=100090642260998"} variant="contained"> <FacebookIcon></FacebookIcon> Nous rejoindre sur Facebook</Button>
        </Grid>
    </Grid>
    </div>
    )
}

export default ShopTabs;
