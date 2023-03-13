import React from "react";
import {Typography,Box,Container} from '@mui/material';
import GMGROUPE from "../ressources/GUYANEMAT.png";

function Header () {
    return (
      <Container>
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
      Notre appartenance au réseau Socoda apporte à nos clients des offres compétitives et la garantie d'une qualité de service. Présent depuis plus de trente ans sur le marché guyanais, Matériels et Services commercialise les marques internationales telles que Hitachi Construction, Bell, Ammann, Putzmeister, pour la gamme lourde, Hikoki, Metabo, Facom, Benza, pour la gamme industrie, Wolf et Etesia pour les espaces verts. Bolt&Ladder est le spécialiste de la fixation et des moyens d’accès en hauteur.
Prestations et Services et MS Loc Guyane nous permettent d'offrir à nos clients une prise en charge totale de leurs besoins, de l'achat à la maintenance.
Notre service pièces détachées dispose de 12 000 références en stock permanent, répondant ainsi aux besoins les plus urgents de nos clients.
      </Typography>
      </Container>
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