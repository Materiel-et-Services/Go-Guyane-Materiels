import React, { useState } from "react";
import { Typography, Box, Container, useMediaQuery, useTheme, Button } from '@mui/material';
import { styled } from '@mui/system';



const Publication = ({showBanner}) => {
  

  return (
    <Container>
    {showBanner === true ? <Box id="PublicationLegale" sx={{ padding: 4, backgroundColor: '#000', color: '#fff', fontFamily: 'Arial, sans-serif' }}>
<Typography variant="h4" align="center" gutterBottom>
  AVIS RELATIF A UN PROJET DE FUSION
</Typography>
<Typography variant="h6" gutterBottom>
  MATERIELS ET SERVICES
</Typography>
<Typography variant="body1">
  SOCIETE A RESPONSABILITE LIMITEE AU CAPITAL DE 304 304 EUROS
</Typography>
<Typography variant="body1">
  SIEGE SOCIAL : CAYENNE (97300) CARREFOUR DE SUZINI
</Typography>
<Typography variant="body1" gutterBottom>
  324 847 672 RCS CAYENNE
</Typography>
<Typography variant="h6" gutterBottom>
  BOLT AND LADDER – B&L
</Typography>
<Typography variant="body1">
  SOCIETE A RESPONSABILITE LIMITEE AU CAPITAL DE 7 500 EUROS
</Typography>
<Typography variant="body1">
  SIEGE SOCIAL : CAYENNE (97300) CARREFOUR DE SUZINI
</Typography>
<Typography variant="body1" gutterBottom>
  420 121 733 RCS CAYENNE
</Typography>
<Typography variant="body1" paragraph>
  Suivant acte signé électroniquement du 29 juillet 2024, déposé au nom des deux sociétés au greffe du Tribunal de Commerce de leur siège le 30 juillet 2024, la société BOLT AND LADDER envisage de faire apport, à titre de fusion, à la société MATERIELS ET SERVICES, de la totalité de son actif évalué à 6 636 100 € contre la prise en charge de son passif évalué à 2 636 100 €, déterminés sur la base du bilan d’ouverture de la société BOLT AND LADDER au 31 août 2023.
</Typography>
<Typography variant="body1" paragraph>
  En rémunération de l'apport, la société MATERIELS ET SERVICES augmenterait son capital de 200 000 € pour le porter à 504 304 €, par l'émission de 200 000 parts sociales nouvelles de 1,00 € de valeur nominale chacune, de même catégorie que les anciennes, entièrement libérées, et attribuées aux associés de la société BOLT AND LADDER, à raison de 0,0025 part sociale de la société MATERIELS ET SERVICES pour 1 part sociale de la société BOLT AND LADDER.
</Typography>
<Typography variant="body1" paragraph>
  Une prime de fusion d’un montant de 3 800 000 € serait constatée.
</Typography>
<Typography variant="body1" paragraph>
  La fusion est soumise à la condition suspensive de l'approbation du projet de fusion par les associés des sociétés participantes.
</Typography>
<Typography variant="body1" paragraph>
  Les créanciers des sociétés parties à cette opération, dont la créance est antérieure au présent avis, peuvent former opposition à cette fusion dans les conditions et délais prévus par les articles L.236-14 et R.236-8 du Code de commerce.
</Typography>
<Typography variant="body1">
  Pour avis
</Typography>
</Box>
: "" }
</Container>
);
};

export default Publication;