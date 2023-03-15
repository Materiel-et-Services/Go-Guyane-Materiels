import React from "react";
import {Typography,Box,Container,Stack} from '@mui/material';
import GMGROUPE from "../ressources/GUYANEMAT.png";

function Header () {
    return (
      <Stack spacing={1} justifyContent="center"
      alignItems="center">
      <Box
        component="img"
        className="App-logo"
        sx={{
          height: "100%",
          width: "90%",
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
          
        }}
        alt="Logo Guyane Matériels"
        src={GMGROUPE}
      />
        {/* <Typography variant="h1" component="h2">
        Guyane Matériels
      </Typography> */}
      <Typography variant="p">
      Présent depuis plus de trente ans sur le marché guyanais, Guyane Matériels commercialise à travers les magasins Matériels et Services les marques internationales telles que Hitachi Construction, Bell, Ammann, Putzmeister, pour la gamme lourde, Hikoki, Metabo, Facom, Benza, pour la gamme industrie, Wolf et Etesia pour les espaces verts.
       Bolt&Ladder est le spécialiste de la fixation et des moyens d’accès en hauteur.
Prestations et Services et MS Loc Guyane nous permettent d'offrir à nos clients une prise en charge totale de leurs besoins, de l'achat à la maintenance.
Notre service pièces détachées dispose de 12 000 références en stock permanent, répondant ainsi aux besoins les plus urgents de nos clients.
      </Typography>
      </Stack>
    )
}

export default Header;

// <Box
//         component="img"
//         sx={{
//           height: 233,
//           width: 350,
//           maxHeight: { xs: 233, md: 167 },
//           maxWidth: { xs: 350, md: 250 },
//         }}
//         alt="The house from the offer."
//         src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
//       />