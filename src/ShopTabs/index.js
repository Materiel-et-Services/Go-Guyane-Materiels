import React from "react";
import {Typography,Box,Grid,Button,Container} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';




function ShopTabs ({shop}) {
    
    return (shop === null ? <div></div> : 
    <Container sx={{mb: 2}}>
    <Container sx={{mb: 6}}>
        <Typography sx={{mb: 3}}>{shop.Title}</Typography>
        <Typography sx={{mb: 4}}>{shop.Descriptif}</Typography>

        <Typography sx={{mb: 3}}>Lundi au Vendredi {shop.Horaires}</Typography>
        <article>
        <Typography>{shop.Street}</Typography>
        </article>
    </Container>
    <Grid container flexDirection="column" spacing={3}>
        <Grid item justifyContent={"center"}>
            <Button href={"tel:".concat(String(shop.T_x00e9_l_x00e9_phone))} variant="contained">Appeler {shop.Title}</Button>
        </Grid>
        <Grid item justifyContent={"center"}>
            <Button href={"mailto:" + "bruno.sosin@matservgf.com"} variant="contained">Envoyer un email à {shop.Title}</Button>
        </Grid>
        <Grid item justifyContent={"center"}>
            <Button href={"https://www.facebook.com/profile.php?id=100090642260998"} target="_blank" variant="contained"> <FacebookIcon></FacebookIcon> Nous rejoindre sur Facebook</Button>
        </Grid>
    </Grid>
    </Container>
    )
}

export default ShopTabs;
