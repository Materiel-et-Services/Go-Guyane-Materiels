// import React from "react";
// import {Typography,Box,Grid} from '@mui/material';

// // import MSSAFETY from "../ressources/MS SAFETY.png"
// // let tempgallery = () => {

// // }

// function LogoGallery ({updateShopInfo,shops}) {
  
//     return shops === null ? <div></div> : 
//       <><Typography sx={{mt: 3}} fontSize={20}>Choisir un magasin pour voir les informations qui le concernent</Typography>
//       <Grid sx={{mb: 3}} container spacing={1} justifyContent="center"
//       alignItems="center">
//         {
//           shops.map((imageItem,index) => {
//             // let city = () => {
//             //   if (imageItem.Title === "BOLT AND LADDER KOUROU") {"Kourou"} else {
                
//             //   }
//             // } 
//             return (
//               <Grid item  key={index} xs={4} onClick={updateShopInfo}>
        
//       <div className="img-container">
//       <img data-id={index} src={window.location.origin + '/img/' + imageItem.Title + ".png"} width="90%" >
        
//       </img>
//       <div className="cityText"><p>{imageItem.Title.includes("BOLT AND LADDER ") ? imageItem.Title.replace("BOLT AND LADDER ","") : ""}</p></div>
//       </div>
      
//         </Grid>
//             )
//           })
//         }
        
//       </Grid>
//       </>
    
// }

// export default LogoGallery;
import React from "react";
import { Typography, Box, Grid, Card, CardActionArea, CardMedia, CardContent, useMediaQuery, useTheme } from '@mui/material';

function LogoGallery({ updateShopInfo, shops }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (!shops) return <div />;

  return (
    <>
      <Typography sx={{ mt: 3 }} fontSize={20}>Choisir un magasin pour voir les informations qui le concernent</Typography>
      <Grid sx={{ mb: 3 }} container spacing={2} justifyContent="center" alignItems="center">
        {shops.map((imageItem, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card data-id={index}>
              <CardActionArea onClick={(e) => updateShopInfo(e,index)} data-id={index}>
                <CardMedia
                  component="img"
                  image={window.location.origin + '/img/' + imageItem.Title + ".png"}
                  title={imageItem.Title}
                />
                <Box className="cityText" sx={{
                  position: 'absolute',
                  bottom: '1em',
                  right: '5px',
                  fontSize: '90%',
                  '& p': {
                    backgroundImage: 'linear-gradient(#FFAA00, #FFFF00)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 'bold',
                  },
                }}>
                  <Typography  variant="h6">
                    {imageItem.Title.includes("BOLT AND LADDER ") ? imageItem.Title.replace("BOLT AND LADDER ","") : ""}
                  </Typography>
                </Box>
                <CardContent>
                  {isMobile && <Typography variant="caption">Cliquer pour voir les informations</Typography>}
                </CardContent>
                {!isMobile && (
                  <Box sx={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    color: '#fff',
                    padding: '1rem',
                    borderRadius: '5px',
                    opacity: 0,
                    transition: 'opacity 0.3s',
                    '&:hover': { opacity: 1 },
                  }}>
                    Cliquer pour voir les informations
                  </Box>
                )}
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default LogoGallery;
