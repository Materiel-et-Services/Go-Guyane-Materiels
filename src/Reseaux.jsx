
import React from 'react';


function Reseaux(){

    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '70px'}}>
          {/* Première ligne */}
          <div style={{ marginRight: '200px'  }}>
            <img src="/BOLT2.png" alt="Image 1" style={{ width: '300px'}} />
            <a href="https://www.facebook.com/people/Bolt-and-Ladder/100063643597090/" target="_blank">
           <img src="/icons8-facebook-60.png" className="facebk"/>
           </a>
          </div>
          <div>
            <img src="/MATSERV2.png" alt="Image 2" style={{ width: '300px'}} />
            <a href="https://www.facebook.com/MaterielsEtServices/?locale=fr_FR" target='_blank'>
            <img src="/icons8-facebook-60.png" className="facebk"/>
          </a>
          </div>
        </div>
  
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
          {/* Deuxième ligne */}
          <div style={{ marginRight: '200px' }}>
            <img src="/MSLOC2.png" alt="Image 3" style={{ width: '300px' }} />
            <a href='https://www.facebook.com/people/MS-Loc-Guyane/100054476169284/' target='_blank'>
            <img src="/icons8-facebook-60.png" className="facebk"/>
          </a>
          </div>
          <div>
            <img src="/PRESTA2.png" alt="Image 4" style={{ width: '300px'}} />
            <a href="https://www.facebook.com/MaterielsEtServices/?locale=fr_FR" target='_blank'>
            <img src="/icons8-facebook-60.png" className="facebk"/>
          </a>
          </div>
        </div>
      </div>
    );
  
  }


export default Reseaux;