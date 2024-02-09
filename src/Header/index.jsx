import React, { useState } from "react";
import { Typography, Box, Container, useMediaQuery, useTheme, Button } from '@mui/material';
import { styled } from '@mui/system';
import GMGROUPE from "../ressources/GUYANEMAT.png";

const LogoBox = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "90%",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: theme.spacing(2, 0),
}));

const LogoText = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  color: "#003A96"  ,
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    fontSize: '1.2rem',
  },
}));

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const text = `Présent depuis plus de trente ans sur le marché guyanais, Guyane Matériels commercialise à travers les magasins Matériels et Services les marques internationales telles que Hitachi Construction, Bell, Ammann, Putzmeister, pour la gamme lourde, Hikoki, Metabo, Facom, Benza, pour la gamme industrie, Wolf et Etesia pour les espaces verts.
    Bolt&Ladder est le spécialiste de la fixation et des moyens d’accès en hauteur.
    Prestations et Services et MS Loc Guyane nous permettent d'offrir à nos clients une prise en charge totale de leurs besoins, de l'achat à la maintenance.
    Notre service pièces détachées dispose de 12 000 références en stock permanent, répondant ainsi aux besoins les plus urgents de nos clients.`;

  const shortText = `${text.substring(0, 200)}...`;

  return (
    <Container>
      <LogoBox>
        <Box
          component="img"
          alt="Logo Guyane Matériels"
          src={GMGROUPE}
          sx={{
            maxHeight: isMobile ? 233 : 167,
            maxWidth: isMobile ? 350 : 250,
          }}
        />
      </LogoBox>
      <LogoText variant="subtitle1">
        {isExpanded ? text : shortText}
      </LogoText>
      <Button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "Voir moins" : "Voir plus"}
      </Button>
    </Container>
  );
};

export default Header;