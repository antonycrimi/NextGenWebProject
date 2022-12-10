import React from 'react';
import { Link } from 'react-router-dom';
const axios = require('axios').default;

//Page error with the name 

function Errrorname () {

    return (
        <div className='list'>
          <Link className="link" to="/">Menu</Link>
          <h1 className='error'>Error : bad name or no profil</h1>
        </div>
    );
}

export default Errrorname;