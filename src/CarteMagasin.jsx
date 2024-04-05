import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Map from './Map';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import QueryBuilder from '@mui/icons-material/QueryBuilder';
import { useMediaQuery } from '@mui/material';
import Container from '@mui/material/Container';


function ShowCard({shop, showElement, shops}){

  // const isSmallScreen = useMediaQuery('(max-width:600px)')
    console.log(shop)
    return (
    <div>
    {showElement &&
      
     <Container style={{marginTop: '3em'}}>
        <Card style={{borderRadius: '20px'}} >

          <CardContent id='contentDesk'>
            <div>
          <img src={'/src/assets/' + shop.Title + '.png'} style={{ width: '100%', maxWidth: '360px', display: 'block', margin: '2em auto' }} />
          <div className='bar' style={{margin: '2em auto'}}></div>
          
          
          <div style={{ wordWrap: 'break-word', width: '100%'}}>
            <h3 id="resumeCard">{shop.Descriptif}</h3>
          </div>
          
          <div className='butcolor'>
            <h3 class='textbutton'><QueryBuilder /> {shop.Horaires}</h3>
          </div>
          
         
          <div className='butcolor'>
            <h3 class='textbutton'><PlaceIcon />{shop.Street}</h3>
          </div>
          
           <a href={"tel:".concat(String(shop.T_x00e9_l_x00e9_phone))}>
          <div className='butcolor Surbutcolor'>
          <h3 class='textbutton'><LocalPhoneIcon /> {shop.T_x00e9_l_x00e9_phone}</h3>
          </div>
          </a>

          <a href="mailto:commercial@matservgf.com">
          <div className='butcolor Surbutcolor'>
            <h3 class='textbutton'><EmailIcon /> Contactez-nous par mail</h3>
          </div>
          </a>

        </div>

       
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <h1 style={{fontSize: '2em', margin: "0", fontWeight: 'bold'}}>On vous <div style={{color: 'white', backgroundColor: '#003A96'}}>attend</div>!</h1>
          
          <div>
          <Map shop={shop} shopsList={shops}/>
       </div> 
       </div>
</CardContent>
       
      </Card>
    </Container>
     }
</div>
    )
  }

export default ShowCard;