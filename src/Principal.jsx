import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Slider from "react-slick";
import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { blue, red } from '@mui/material/colors';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Block } from '@mui/icons-material';
import { Grid, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';
import Container from '@mui/material/Container';



function Pic({showBanner}) {
  
  
  // const theme = useTheme();
  // const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
 
    <div style={{ position: 'relative', maxWidth: '100%', height: 'auto', borderRadius: '20px' }}>
      
      <Container>
      {showBanner === true ? <Grid className='text-header-dynamic' xs={12} sm={8} md={6} fullWidth>
        <a href='#PublicationLegale'><Typography variant="h6">Nous avons le plaisir de vous annoncer la fusion des sociétés Matériels et Services et Bolt And Ladder, consulter l'avis de publication en pied de page de ce site. </Typography></a>
      </Grid> : ""}
      <Grid xs={12} sm={8} md={6} fullWidth>

      <div style={{ position: 'relative', width: '100%', height: 'auto', borderRadius: '20px', overflow: 'hidden' }}>
  <img src='/soudeur.jpg' style={{ width: '100%', height: 'auto', borderRadius: '20px', zIndex: 1 }} />
  <img src="/GROUPE.png" style={{ position: 'absolute', top: '3%', left: '2%', width: '20%', height: 'auto', zIndex: 3 }} />
  <a href='https://www.instagram.com/guyane_materiels/' target='_blank'>
    <img src="/logoinsta.png" style={{ width: '5%', position: 'absolute', top: '2%', right: '7%', zIndex: 3 }} />
  </a>
  <a href='https://www.facebook.com/people/Guyane-Mat%C3%A9riels-Groupe/100090642260998/' target='_blank'>
    <img src="/icons8-facebook-90.png" style={{ width: '5%', position: 'absolute', top: '2%', right: '2%', zIndex: 3 }} />
  </a>
  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgb(0 27 255 / 22%)', borderRadius: '20px', zIndex: 2 }}></div>
</div>

      
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: '#fff', zIndex: 3 }}>
        <h1 style={{color: 'white', fontWeight:'800'}}>Notre expertise<br />à votre service<br /><div style={{backgroundColor: 'white', color: '#003A96', borderRadius: '20px', height: '1.3em', width: '10em', display: 'inline-block'}}>depuis + de 40 ans</div></h1>
        
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} >
        <h2 className='textphoto' style={{fontWeight: 'bold'}}><div style={{backgroundColor: 'white', color: '#003A96', borderRadius: '20px',  width: '5em', display: 'inline-block'}}>+ 30 000</div> Références en stock</h2>
        </Grid>
        <Grid item xs={12} sm={4}>
        <h2 className='textphoto' style={{fontWeight: 'bold'}}>7 Points de ventes</h2>
        </Grid>
        <Grid item xs={12} sm={4}>
        <h2 className='textphoto' style={{fontWeight: 'bold'}}>4 Sites</h2>
        </Grid>
        </Grid>
      </div>

    </Grid>
    </Container>
    </div>
  
  );
}





function Carte() {


  return (
   <Container>
    <Card style={{borderRadius: '20px'}}>
      <CardContent>
        
      <div style={{textAlign: 'left'}}><h1>Un groupe proche de vous !</h1></div>
        <div className="bar"></div>

        {/* <div style={{ display: 'flex', justifyContent: 'space-between' }}>
         
          
  <div style={{ flex: 1 }}> */}
  <Grid container spacing={2}>
    <Grid item xs={12} sm={6}>
  <h2 className='textcard'>Spécialisés dans le négoce de fournitures et équipements industriels, nous avons à cœur de vous accompagner dans la croissance de vos métiers.</h2>
  </Grid>
 {/* </div> */}
 {/* <div style={{ flex: 1, marginLeft:'20px' }}> */}
 <Grid item xs={12} sm={6}>
  <h2 className='textcard'>Avec une offre produits complète, plusieurs points de vente et un service après-vente intégré, votre suivi et votre satisfaction sont nos priorités.</h2>
  </Grid>
  {/* </div> */}
  {/* </div> */}
  <Grid item xs={12} sm={12}>
  <h2 className='textcard'>Nous cultivons confiance et fidélité envers nos fournisseurs et nos clients. Notre expertise permet de répondre à vos besoins à tout moment.</h2>
   </Grid>   
  </Grid>    
      </CardContent>
    </Card>
    </Container>
  //   </Grid>
  //  </Grid>
  );
}


function MultipleItems({ toggleElement, updateShopInfo, shops }) {

  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2
  };

  return (
    <Container style={{marginTop: '1em'}} className='ContainerSty'>
      <div className="slider-container">
        <Grid>
          <Grid item xs={9} sm={5} xl={1}>
            <Slider {...settings}>
              {shops.sort((a, b) => a.Ordre - b.Ordre) // Trie les éléments en fonction de la colonne 'Ordre'
        .map((item, index) => {
        //         const el = document.createElement( 'html' );
        //  const parser = new DOMParser(); 
        //  const desc1 = parser.parseFromString(el, item.Description2);
       
console.log(item)
                return (
                  <div className='carou' key={index} onClick={(e) => {
                    toggleElement(item);
                    updateShopInfo(e, index);
                  }}>

                    <div style={{height: '180px', display: 'flex', alignItems:'center', justifyContent:'center'}}>
                    <img className='shake' src={item.Title + '.png'} style={{ width: '50%', maxWidth: '300px', display: 'inline-block'}} />
                    </div>
                    
                    <h2 id="SousTitre" style={{ color: '#003A96' }}>{item.SubTitle}</h2>
                    <div className="bar2"></div>
                    <p className='desc2' style={{color: 'black'}} dangerouslySetInnerHTML={{ __html: item.Description2.replace(/<ul>/g, '<ul>').replace(/<\/ul>/g, '</ul>').replace(/<li>/g, '<li>').replace(/<\/li>/g, '</li>') }}></p>
                    {/* <p className='desc2'>{desc1}</p> */}



                  </div>
                );
              })}
            </Slider>
          </Grid>
        </Grid>
      </div>
    </Container>  
  );


}




// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

// function BasicModal() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <div>
//       <Button onClick={handleOpen}>Open modal</Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             Magasin
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             Description
//           </Typography>
//         </Box>
//       </Modal>
//     </div>
//   );
// }



// function MyCarousel({toggleElement, updateShopInfo, shops}) {
//   // const items = [
//   //   {
//   //     name: "MSSAFETY",
//   //     description: "Equipements de protection individuelle",
//   //     details: [
//   //       "Protection de la tête aux pieds",
//   //       "Vêtements de travail",
//   //       // ... more details
//   //     ],
//   //   },
//   //   // ... other items
//   // ];

//   return (
//     <div>
//     <Carousel
//       NextIcon={<ArrowForwardIos />}
//       PrevIcon={<ArrowBackIos />}
//       // You can specify additional props here for customization
//     >
//       {shops.map((item, index) => (
//         <Item key={i} item={item} />
//       ))}
//     </Carousel>
//     </div>
//   );
// };

// const Item = ({ item }) => {
//   return (
//     <Card>
//       <CardContent>
//         <Typography variant="h5">{item.Title}</Typography>
//         <Typography variant="subtitle1">{item.description}</Typography>
//         {item.details.map((detail, index) => (
//           <Typography key={index} variant="body2">
//             {detail}
//           </Typography>
//         ))}
//       </CardContent>
//     </Card>
//   );
// };





export default Carte;
export {MultipleItems, Pic};
