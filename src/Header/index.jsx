import React, { useState } from "react";
import { Typography, Box, Container, useMediaQuery, useTheme, Button ,Card,CardContent} from '@mui/material';
// import { styled } from '@mui/system';
import { styled } from '@mui/material/styles';

import GMGROUPE from "../ressources/GUYANEMAT.png";

const LogoBox = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "90%",
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'left',
  margin: theme.spacing(2, 0),
}));

const LogoText = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  color: "#003A96"  ,
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    fontSize: '3rem',
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main, // Utilise le thème principal par défaut de MUI
  color: theme.palette.primary.contrastText,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  boxShadow: theme.shadows[4],
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem', // Remplacez par la taille de votre choix
  marginBottom: theme.spacing(2),
}));

const BodyText = styled(Typography)(({ theme }) => ({
  fontSize: '1rem', // Remplacez par la taille de votre choix
  marginBottom: theme.spacing(1), // Espace entre les paragraphes
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
      {/* <LogoText variant="subtitle1">
        {isExpanded ? text : shortText}
      </LogoText> */}
      <LogoText variant="title1" component="h2">
        Notre expertise à votre service
      </LogoText>
      <LogoText variant="title2" component="h2">
         depuis plus de 40 ans
      </LogoText>

      <LogoText variant="title3" component="h3">
         Plus de 30000 références en stock
      </LogoText>
      <LogoText variant="title3" component="h3">
         7 points de ventes
      </LogoText>
      <LogoText variant="title3" component="h3">
         4 sites
      </LogoText>

      <StyledCard>
      <CardContent>
        <Title gutterBottom variant="h5" component="div">
          Un groupe proche de vous !
        </Title>
        <BodyText variant="body1">
          Spécialisés dans le négoce de fournitures et équipements industriels, nous
          avons à cœur de vous accompagner dans la croissance de vos métiers.
        </BodyText>
        <BodyText variant="body1">
          Avec une offre produits complète, plusieurs points de vente et un service
          après-vente intégré, votre suivi et votre satisfaction sont nos priorités.
        </BodyText>
        <BodyText variant="body1">
          Nous cultivons confiance et fidélité envers nos fournisseurs et nos clients. Notre
          expertise permet de répondre à vos besoins à tout moment.
        </BodyText>
      </CardContent>
    </StyledCard>

      
      {/* <Button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "Voir moins" : "Voir plus"}
      </Button> */}
    </Container>
  );
};

export default Header;