import React from "react";
import {Typography,Box} from '@mui/material';
import GMGROUPE from "../ressources/GUYANEMAT.png";

function Header () {
    return (
      <>
      <Box
        component="img"
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
      <Typography variant="h6">
      Le groupe Matériels et Services est spécialisé dans le négoce et la location de fournitures et équipements de chantier et industriels depuis 1986.
Avec ses entités Matériels et Services et Bolt And Ladder, le groupe offre une large gamme de produits de qualité, de la vis à la mini pelle, en passant par les EPI et l’outillage électroportatif, avec un stock adapté aux besoins de ses clients.
Les forces de l’entreprise reposent sur l’expertise de ses équipes, du conseil au Service Après-Vente, la proximité avec ses clients et un stock adapté pour répondre au plus vite à leurs exigences.
Pour garantir cette proximité, le groupe vous accueille sur plusieurs sites de Rémire à Kourou et offre un service de livraison de Saint-Laurent-du-Maroni à Saint-Georges de l’Oyapock. Cliquer ici pour voir nos différents points de vente
Son expertise est reconnue à travers son adhésion au groupement national SOCODA, n°1 de la distribution professionnelle indépendante au service des métiers du Bâtiment et de l’Industrie, avec notamment l’obtention du label SOCODA « Spécialiste EPI » mais aussi par des grandes marques qui lui font confiance : Hitachi, Dieci, Metabo, Facom, Kemppi, Etesia, Tubesca-Comabi, Diadora, Bolle safety…
      </Typography>
      </>
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