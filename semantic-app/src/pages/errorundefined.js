import React from 'react';
import { Link } from 'react-router-dom';
const axios = require('axios').default;

//Page error undefined data

function Errrorundefined () {

    return (
        <div className='list'>
          <Link className="link" to="/">Menu</Link>
          <h1 className='error'>Error : check your gender choice</h1>
        </div>
    );
}

export default Errrorundefined;