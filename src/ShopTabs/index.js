


import React from "react";
import { Typography, Box, Grid, Button, Container } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';

function ShopTabs({ shop }) {
  console.log(shop)
  if (!shop) return <div />;

  return (
    <Container maxWidth="lg" sx={{ mb: 2 }}>
      <Container sx={{ mb: 6 }}>
        <Typography variant="h4" gutterBottom>{shop.Title}</Typography>
        <Typography variant="body1" gutterBottom>{shop.Descriptif}</Typography>
        <Typography variant="h6" gutterBottom>{shop.Horaires}</Typography>
        <Typography variant="body1">{shop.Street}</Typography>
      </Container>
      <Grid container spacing={3} direction="column" alignItems="center">
        <Grid item xs={12} sm={8} md={6}>
          <Button fullWidth variant="contained" href={"tel:".concat(String(shop.T_x00e9_l_x00e9_phone))}>
            Appeler {shop.Title}
          </Button>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Button fullWidth variant="contained" href={"mailto:" + "commercial@matservgf.com"}>
            Envoyer un email à {shop.Title}
          </Button>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Button fullWidth variant="contained" href={"https://www.facebook.com/profile.php?id=100090642260998"} target="_blank">
            <FacebookIcon sx={{ mr: 1 }} /> Nous rejoindre sur Facebook
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ShopTabs;

// import React from "react";
// import {Typography,Box,Grid,Button,Container} from '@mui/material';
// import FacebookIcon from '@mui/icons-material/Facebook';

// function ShopTabs ({shop}) {
    
//     return (shop === null ? <div></div> : 
//     <Container sx={{mb: 2}}>
//     <Container sx={{mb: 6}}>
//         <Typography sx={{mb: 3}}>{shop.Title}</Typography>
//         <Typography sx={{mb: 4}}>{shop.Descriptif}</Typography>

//         <Typography sx={{mb: 3}}>{shop.Horaires}</Typography>
//         <article>
//         <Typography>{shop.Street}</Typography>
//         </article>
//     </Container>
//     <Grid container flexDirection="column" spacing={3}>
//         <Grid item justifyContent={"center"}>
//             <Button href={"tel:".concat(String(shop.T_x00e9_l_x00e9_phone))} variant="contained">Appeler {shop.Title}</Button>
//         </Grid>
//         <Grid item justifyContent={"center"}>
//             <Button href={"mailto:" + "bruno.sosin@matservgf.com"} variant="contained">Envoyer un email à {shop.Title}</Button>
//         </Grid>
//         <Grid item justifyContent={"center"}>
//             <Button href={"https://www.facebook.com/profile.php?id=100090642260998"} target="_blank" variant="contained"> <FacebookIcon></FacebookIcon> Nous rejoindre sur Facebook</Button>
//         </Grid>
//     </Grid>
//     </Container>
//     )
// }

// export default ShopTabs;
